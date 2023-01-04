
function selecionaPrato(prato){
    if(prato === "parmegiana"){
        document.getElementById("parmegiana").style.borderColor = "#32B72F";
        document.getElementById("strogonorfe").style.borderColor = "white";
        document.getElementById("peixinho").style.borderColor = "white";
        return "estou aqui";
    } else if(prato === "strogonorfe"){
        document.getElementById("strogonorfe").style.borderColor = "#32B72F";
        document.getElementById("peixinho").style.borderColor = "white";
        document.getElementById("parmegiana").style.borderColor = "white";
        return prato;
    } else if (prato === "peixinho"){
        document.getElementById("peixinho").style.borderColor = "#32B72F";
        document.getElementById("strogonorfe").style.borderColor = "white";
        document.getElementById("parmegiana").style.borderColor = "white";
        return prato;
    };
};




function selecionaBebida(bebida){
    if(bebida === "coquinha"){
        document.getElementById("coquinha").style.borderColor = "#32B72F";
        document.getElementById("fantinha").style.borderColor = "white";
        document.getElementById("mineirinho").style.borderColor = "white";
    } else if(bebida === "fantinha"){
        document.getElementById("fantinha").style.borderColor = "#32B72F";
        document.getElementById("mineirinho").style.borderColor = "white";
        document.getElementById("coquinha").style.borderColor = "white";
    } else if (bebida === "mineirinho"){
        document.getElementById("mineirinho").style.borderColor = "#32B72F";
        document.getElementById("fantinha").style.borderColor = "white";
        document.getElementById("coquinha").style.borderColor = "white";
    };
};


function selecionaSobremesa(sobremesa){
    if(sobremesa === "tiramisu"){
        document.getElementById("tiramisu").style.borderColor = "#32B72F";
        document.getElementById("pavê").style.borderColor = "white";
        document.getElementById("pudim").style.borderColor = "white";
    } else if(sobremesa === "pavê"){
        document.getElementById("pavê").style.borderColor = "#32B72F";
        document.getElementById("pudim").style.borderColor = "white";
        document.getElementById("tiramisu").style.borderColor = "white";
    } else if (sobremesa === "pudim"){
        document.getElementById("pudim").style.borderColor = "#32B72F";
        document.getElementById("pavê").style.borderColor = "white";
        document.getElementById("tiramisu").style.borderColor = "white";
    };
};