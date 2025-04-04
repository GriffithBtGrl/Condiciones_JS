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