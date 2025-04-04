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