let dishPrice = 0; //<-- armazena o preço do prato
let drinkPrice = 0; //<-- armazena o preço da bebida
let dessertPrice = 0; //<-- armazena o preço da sobremesa





const btn = document.getElementById('btnOrderEnd');
let order = []; //contador para habilitar o botão de fechar pedido

//função para marcar um prato como selecionado
// prato = id do prato, section = categoria. checkmark = id do checkmark
function selecionaPrato(prato, sectionName, checkmark) {
    
    const selectedBtn = document.querySelector(prato); //<--quem chamou a função
    const section = document.querySelector(sectionName) //<-- captura a seção
    const btnSelectedBefore = section.querySelector(`.selected`); //<-- captura a opção que tenha a classe selected, ou seja, que está selecionado
    const chek = document.querySelector(checkmark); //<-- captura o checkmark que desejo mostrar
    const checkedBefore = document.querySelector('.show-check'); //<-- captura o checkmark que está sendo mostrado atualmente
    
    if (btnSelectedBefore !== null) { //<-- caso btnSelectedBefore encontre alguém selecionado
        btnSelectedBefore.classList.remove("selected"); //<-- remove a seleção
        btnSelectedBefore.querySelector(".show-check").classList.remove('show-check');//<-- remove o checkmark
    }
    
    selectedBtn.classList.add("selected"); //<-- adiciona a seleção
    chek.classList.add('show-check'); //<-- adiciona o checkmark
    


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
    const checkedBefore = document.querySelector('.show-check');
    
    if (btnSelectedBefore !== null) {
        btnSelectedBefore.classList.remove("selected");
        btnSelectedBefore.querySelector(".show-check").classList.remove('show-check');
    }
    
    selectedBtn.classList.add("selected");
    chek.classList.add('show-check');

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
    const checkedBefore = document.querySelector('.show-check');
    
    if (btnSelectedBefore !== null) {
        btnSelectedBefore.classList.remove("selected");
        btnSelectedBefore.querySelector(".show-check").classList.remove('show-check')
    }
    
    selectedBtn.classList.add("selected");
    chek.classList.add('show-check');

    if (!order.includes(3)) {
        order.push(3)
    }
    btnEnable(order)
};

//função para habilitar e formatar o botão de fechar pedido
function btnEnable(order) {
    let qtdOrder = order.length;
    let itemNameInsert = qtdOrder === 2 ? "item" : "itens"; //<-- basicamente um elseif, se tiver 2 itens faltando, mantenha o texto itens, do contrário, troque pra item

    if (qtdOrder === 3) { //<-- caso o contador chege em 3
        btn.classList.add('btnEnabled') //<-- recebe a formatação pela classe btnEnabled
        btn.removeAttribute('disabled') //<-- remove o atributo disabled, para que possa ser clicado
        btn.innerHTML = `Fechar pedido` //<-- muda o texto para "Fechar pedido"
    } else {
        btn.innerHTML = `Selecione mais ${3 - qtdOrder} ${itemNameInsert}</br>para fechar o pedido` //<-- aqui serve apenas para alterar o texto caso os 3 itens não tenham sido selecionados
    }
}

function checkout(blur, modal) {
    const blurSelect = document.querySelector(blur);
    const modalSelect = document.querySelector(modal);
    if (btn.classList.contains('btnEnabled')) {
        [blurSelect, modalSelect].forEach(e => {
            e.classList.toggle('hidden')
        })
    }
}

function cancel() {
    const blurSelect = document.querySelector(blur);
    const modalSelect = document.querySelector(modal);
    if (btn.classList.contains('btnEnabled')) {
        [blurSelect, modalSelect].forEach(e => {
            e.classList.toggle('hidden')
        })
    }
}

