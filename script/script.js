const btn = document.getElementById('btnOrderEnd');
let order = []; //contador para habilitar o botão de fechar pedido

//itemPrice
let dishPrice = "";
let drinkPrice = "";
let dessertPrice = "";
//itemName
let dishName = "";
let drinkName = "";
let dessertName = "";

const endBtn = document.getElementById('btnOrderEnd');

//clientData
let clientName = "não fornecido";
let clientAddress = "não fornecido";


let totalOrderSumToFixedNoPoint = 0;
//função para marcar um prato como selecionado
// prato = id do prato, section = categoria. checkmark = id do checkmark

function selecionaPrato(prato, sectionName, checkmark) {

    const selectedBtn = document.querySelector(prato); //<--quem chamou a função
    const section = document.querySelector(sectionName) //<-- captura a seção
    const btnSelectedBefore = section.querySelector(`.selected`); //<-- captura a opção que tenha a classe selected, ou seja, que está selecionado
    const chek = document.querySelector(checkmark); //<-- captura o checkmark que desejo mostrar //<-- captura o checkmark que está sendo mostrado atualmente
    dishPrice = selectedBtn.querySelector('h3').innerHTML.replace("R$", "");
    dishName = selectedBtn.querySelector('h2').innerHTML;

    if (btnSelectedBefore !== null) { //<-- caso btnSelectedBefore encontre alguém selecionado
        btnSelectedBefore.classList.remove("selected"); //<-- remove a seleção
        btnSelectedBefore.querySelector(".show-check").classList.remove('show-check');//<-- remove o checkmark
    }

    selectedBtn.classList.add("selected"); //<-- adiciona a seleção
    chek.classList.add('show-check'); //<-- adiciona o checkmark


    document.querySelector('.modal .checkoutDish .item').innerHTML = dishName;
    document.querySelector('.modal .checkoutDish .preco').innerHTML = dishPrice;

    if (!order.includes(1)) {
        order.push(1)
    }
    btnEnable(order)
};

function selecionaBebida(bebida, sectionName, checkmark) {


    const section = document.querySelector(sectionName)
    const btnSelectedBefore = section.querySelector(`.selected`);
    const selectedBtn = document.querySelector(bebida);
    const chek = document.querySelector(checkmark);
    drinkPrice = selectedBtn.querySelector('h3').innerHTML.replace("R$", "");
    drinkName = selectedBtn.querySelector('h2').innerHTML;

    if (btnSelectedBefore !== null) {
        btnSelectedBefore.classList.remove("selected");
        btnSelectedBefore.querySelector(".show-check").classList.remove('show-check');
    }

    selectedBtn.classList.add("selected");
    chek.classList.add('show-check');


    document.querySelector('.modal .checkoutDrink .item').innerHTML = drinkName;
    document.querySelector('.modal .checkoutDrink .preco').innerHTML = drinkPrice;

    if (!order.includes(2)) {
        order.push(2)
    }
    btnEnable(order)
};


function selecionaSobremesa(sobremesa, sectionName, checkmark) {

    const section = document.querySelector(sectionName)
    const btnSelectedBefore = section.querySelector(`.selected`);
    const selectedBtn = document.querySelector(sobremesa);
    const chek = document.querySelector(checkmark);
    dessertPrice = selectedBtn.querySelector('h3').innerHTML.replace("R$", "");
    dessertName = selectedBtn.querySelector('h2').innerHTML;

    if (btnSelectedBefore !== null) {
        btnSelectedBefore.classList.remove("selected");
        btnSelectedBefore.querySelector(".show-check").classList.remove('show-check')
    }

    selectedBtn.classList.add("selected");
    chek.classList.add('show-check');


    document.querySelector('.modal .checkoutDessert .item').innerHTML = dessertName;
    document.querySelector('.modal .checkoutDessert .preco').innerHTML = dessertPrice;

    if (!order.includes(3)) {
        order.push(3)
    }
    btnEnable(order)
};

//função para habilitar e formatar o botão de fechar pedido
function btnEnable(order) {
    let qtdOrder = order.length;
    let itemNameInsert = qtdOrder === 2 ? "item" : "itens"; //<-- basicamente um elseif, se tiver 2 itens faltando, mantenha o texto itens, do contrário, troque pra item

    if (qtdOrder === 3) { //<-- caso o contador chegue em 3
        btn.classList.add('btnEnabled') //<-- recebe a formatação pela classe btnEnabled
        btn.removeAttribute('disabled') //<-- remove o atributo disabled, para que possa ser clicado
        btn.innerHTML = `Fechar pedido` //<-- muda o texto para "Fechar pedido"
        const totalOrder = getDataOrder();
        document.querySelector('.total .valor').innerHTML = `R$ ${totalOrder.toFixed(2).replace(".", ",")}`;
    } else {
        btn.innerHTML = `Selecione mais ${3 - qtdOrder} ${itemNameInsert}</br>para fechar o pedido` //<-- aqui serve apenas para alterar o texto caso os 3 itens não tenham sido selecionados
    }

    
}

function checkoutCancel(blur, modal) {
    const blurSelect = document.querySelector(blur);
    const modalSelect = document.querySelector(modal);
    if (btn.classList.contains('btnEnabled')) {
        [blurSelect, modalSelect].forEach(e => {
            e.classList.toggle('hidden')
        })
    }
}

//soma o pedido e envia para o modal

function getDataOrder(){

    let dishPriceNumber = Number(dishPrice.replace(",", "."));
    let drinkPriceNumber = Number(drinkPrice.replace(",", "."));
    let dessertPriceNumber = Number(dessertPrice.replace(",", "."));
    let orderSum = (dishPriceNumber + drinkPriceNumber + dessertPriceNumber)*100;
    let totalOrderSum = orderSum / 100;

    return totalOrderSum
}

function sendMsg(){
    const totalZap = getDataOrder();

    let msgZap = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${dishName}
- Bebida: ${drinkName}
- Sobremesa: ${dessertName}
Total: R$ ${totalZap.toFixed(2)}

Nome: ${clientName}
Endereço: ${clientAddress}`);

window.open(`https://wa.me/552171516055?text=${msgZap}`, '_blank');
return msgZap
}



endBtn.addEventListener('click', function(){
    
    if(clientName === "não fornecido" && clientAddress === "não fornecido"){
        clientName = prompt('QUAL SEU NOME') || clientName;
        clientAddress = prompt('QUAL SEU ENDEREÇO') ||  clientAddress;
    }
    

})