function selecionaPrato(prato){
    dish = prato;
    if(dish === "parmegiana"){
        document.getElementById("parmegiana").style.borderColor = "#32B72F";
        document.getElementById("strogonorfe").style.borderColor = "white";
        document.getElementById("peixinho").style.borderColor = "white";
    } else if(dish === "strogonorfe"){
        document.getElementById("strogonorfe").style.borderColor = "#32B72F";
        document.getElementById("peixinho").style.borderColor = "white";
        document.getElementById("parmegiana").style.borderColor = "white";
    } else if (dish === "peixinho"){
        document.getElementById("peixinho").style.borderColor = "#32B72F";
        document.getElementById("strogonorfe").style.borderColor = "white";
        document.getElementById("parmegiana").style.borderColor = "white";
    };
    
};


function selecionaBebida(bebida){
    drink = bebida;
    if(drink === "coquinha"){
        document.getElementById("coquinha").style.borderColor = "#32B72F";
        document.getElementById("fantinha").style.borderColor = "white";
        document.getElementById("mineirinho").style.borderColor = "white";
    } else if(drink === "fantinha"){
        document.getElementById("fantinha").style.borderColor = "#32B72F";
        document.getElementById("mineirinho").style.borderColor = "white";
        document.getElementById("coquinha").style.borderColor = "white";
    } else if (drink === "mineirinho"){
        document.getElementById("mineirinho").style.borderColor = "#32B72F";
        document.getElementById("fantinha").style.borderColor = "white";
        document.getElementById("coquinha").style.borderColor = "white";
    };
};


function selecionaSobremesa(sobremesa){
    dessert = sobremesa;
    if(dessert === "tiramisu"){
        document.getElementById("tiramisu").style.borderColor = "#32B72F";
        document.getElementById("pavê").style.borderColor = "white";
        document.getElementById("pudim").style.borderColor = "white";
    } else if(dessert === "pavê"){
        document.getElementById("pavê").style.borderColor = "#32B72F";
        document.getElementById("pudim").style.borderColor = "white";
        document.getElementById("tiramisu").style.borderColor = "white";
    } else if (dessert === "pudim"){
        document.getElementById("pudim").style.borderColor = "#32B72F";
        document.getElementById("pavê").style.borderColor = "white";
        document.getElementById("tiramisu").style.borderColor = "white";
    };
};