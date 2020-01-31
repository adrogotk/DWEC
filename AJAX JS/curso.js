ajaxGet("http://localhost:3000/imagenes", function(respuesta) {
  var imagenes = JSON.parse(respuesta);
 
  imagenes.forEach(function(elemento) {
    var imgElt = document.createElement("img");
    imgElt.src = elemento.thumbnailUrl;
    document.getElementById("imagenes").appendChild(imgElt);
  });
});





