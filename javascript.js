let ley = "Ohm";
function Watt () {
    document.querySelector("#resistencia").innerHTML = "Watts";
    document.querySelector("#resistenciaD").innerHTML = "Watts";
    ley = "Watt";
}
function Ohm () {
    document.querySelector("#resistencia").innerHTML = "Resistencia";
    document.querySelector("#resistenciaD").innerHTML = "Resistencia";
    ley = "Ohm";
}
function calcular () {
    let valorU = document.querySelector(".contenedor__formulario-opciónU").value;
    let valorD = document.querySelector(".contenedor__formulario-opciónD").value;
    let inputU = document.querySelector(".contenedor__formulario-inputU").value;
    let inputD = document.querySelector(".contenedor__formulario-inputD").value;
    if ((valorU == "Volts" && valorD == "Amperes") && ley == "Ohm"){
        document.querySelector(".resultado").innerHTML = (inputU / inputD) + " Ω";
    }
    else if ((valorD == "Volts" && valorU == "Amperes") && ley == "Ohm"){
        document.querySelector(".resultado").innerHTML = (inputD / inputU) + " Ω";
    }
    else if ((valorU == "Volts" && valorD == "Ohmios") && ley == "Ohm"){
        document.querySelector(".resultado").innerHTML = (inputU / inputD) + " A";
    }
    else if ((valorD == "Volts" && valorU == "Ohmios") && ley == "Ohm"){
        document.querySelector(".resultado").innerHTML = (inputD / inputU) + " A";
    }
    else if (((valorU == "Amperes" && valorD == "Ohmios") || (valorD == "Amperes" && valorU == "Ohmios")) && ley == "Ohm"){
        document.querySelector(".resultado").innerHTML = (inputU * inputD) + " V";
    }
    else if (((valorU == "Volts" && valorD == "Amperes") || (valorD == "Volts" && valorU == "Amperes")) && ley == "Watt"){
        document.querySelector(".resultado").innerHTML = (inputU * inputD) + " W";
    }
    else if ((valorU == "Watts" && valorD == "Amperes") && ley == "Watt"){
        document.querySelector(".resultado").innerHTML = (inputU / inputD) + " V";
    }
    else if ((valorD == "Watts" && valorU == "Amperes") && ley == "Watt"){
        document.querySelector(".resultado").innerHTML = (inputD / inputU) + " V";
    }
    else if ((valorU == "Watts" && valorD == "Volts") && ley == "Watt"){
        document.querySelector(".resultado").innerHTML = (inputU / inputD) + " A";
    }
    else if ((valorU == "Volts" && valorD == "Watts") && ley == "Watt"){
        document.querySelector(".resultado").innerHTML = (inputD / inputU) + " A";
    }
    else{
        alert("Seleccione unidades diferentes");
    }
}