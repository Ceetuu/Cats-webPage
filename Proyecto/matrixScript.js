var cuadrito = document.getElementsByClassName('cuadro');

function cargar(evento){
  var i;
  while(i<cuadrito.length){
    cuadrito[i] = document.addEventListener("onmouseover",crearMatriz);
    i++;
  }

  $(document).ready(function(){
      $("cuadro").mouseover(function(){
          $("cuadro").css("background-color", "#0B610B");
      });
      $("cuadro").mouseout(function(){
          $("cuadro").css("background-color", "#0B610B");
      });
  });
  console.log(cuadrito[10]);

}

function crearMatriz(){
  var i; //filas
  var j; //columnas
  for(i=0; i<16 ; i++){
    document.write("<div class="+"fila"+">");
    for(j=0; j<16; j++){
      document.write("<div class="+"cuadro"+"></div>");
    }
    document.write("</div>");
  }

  //Los imprime al revés.


}
$(document).ready(function(){
    $("cuadro").mouseover(function(){
        $("cuadro").css("background-color", "#0B610B");
    });
    $("cuadro").mouseout(function(){
        $("cuadro").css("background-color", "#0B610B");
    });
});

window.addEventListener("load",cargar);

crearMatriz();
