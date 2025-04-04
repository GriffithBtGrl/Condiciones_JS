var imagen = document.getElementById("imagenNana");
imagen.onclick = function() {
    if (imagen.style.border == "2px solid red"){
        imagen.style.border = "";
    } else{
        imagen.style.border = "2px solid red"
    }

}



