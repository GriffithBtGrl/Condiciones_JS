var imagen = document.getElementById("imagenNana");
imagen.onclick = function() {
    if (imagen.style.border == "2px solid red"){
        imagen.style.border = "";
    } else{
        imagen.style.border = "2px solid red"
    }

}

//Stickers
var sticker1 = document.getElementById("sticker1");
var sticker2 = document.getElementById("sticker2");
var sticker3 = document.getElementById("sticker3");
var botonStickers = document.getElementById("botonStickers");
var resultado = document.getElementById("resultadoStickers");

botonStickers.onclick = function() {
    var total = Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value);
    if (total <= 10) {
        resultado.innerHTML = "Llevas " + total + " stickers";
    } else {
        resultado.innerHTML = "Llevas demasiados stickers";
    }
}

//Password
var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");
var num3 = document.getElementById("numero3");
var boton = document.getElementById("botonPassword");
var resultadoPass = document.getElementById("resultadoPassword");

boton.onclick = function() {
    var password = num1.value + num2.value + num3.value;
    if (password == "911") {
        resultadoPass.innerHTML = "Contraseña 1 es correcta";
    } else if (password == "714") {
        resultadoPass.innerHTML = "Contraseña 2 es correcta";
    } else if (password == "707") {
        resultadoPass.innerHTML = "Contraseña 3 es correcta";
    } else {
        resultadoPass.innerHTML = "Contraseña incorrecta";
    }
}