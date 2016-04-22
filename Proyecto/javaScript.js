var celdas = document.getElementsByClassName('cuadro');

var i=0;
var t=1;
var queT;
var arrGato = new Array(9);

function gato(evento){
  //alert(evento.target.id);

  var celda = evento.target;
  var idCelda = evento.target.id;

  var posicionAMarcar = idCelda[6] - 1;
  //console.log(celda);
  //alert(posicionAMarcar);

  queT = t%2;
  if(queT != 0){
    celda.innerHTML = "X";
    celda.removeEventListener("click",gato);
    arrGato[posicionAMarcar] = celda.innerHTML;
    //console.log(posicionAMarcar);
  }
  else{
    celda.innerHTML = "O";
    celda.removeEventListener("click",gato);
    arrGato[posicionAMarcar] = celda.innerHTML;
    //console.log(posicionAMarcar);
  }
  t++;
  ganador();
}

function ganador(){
  if(arrGato[0] == "X" && arrGato[1] == "X" && arrGato[2]== "X"){
    confirm("Las X han ganado!");
  }
  else if(arrGato[3] == "X" && arrGato[4] == "X" && arrGato[5]== "X"){
    confirm("Las X han ganado!");
  }
  else if(arrGato[6] == "X" && arrGato[7] == "X" && arrGato[8]== "X"){
    confirm("Las X han ganado!");
  }
  else if(arrGato[0] == "X" && arrGato[3] == "X" && arrGato[6]== "X"){
    confirm("Las X han ganado!");
  }
  else if(arrGato[1] == "X" && arrGato[4] == "X" && arrGato[7]== "X"){
    confirm("Las X han ganado!");
  }
  else if(arrGato[2] == "X" && arrGato[8] == "X" && arrGato[5]== "X"){
    confirm("Las X han ganado!");
  }
  else if(arrGato[0] == "X" && arrGato[4] == "X" && arrGato[8]== "X"){
    confirm("Las X han ganado!");
  }
  else if(arrGato[2] == "X" && arrGato[4] == "X" && arrGato[6]== "X"){
    confirm("Las X han ganado!");
  }
  else if(arrGato[0] == "O" && arrGato[1] == "O" && arrGato[2]== "O"){
    confirm("Las O han ganado!");
  }
  else if(arrGato[3] == "O" && arrGato[4] == "O" && arrGato[5]== "O"){
    confirm("Las O han ganado!");
  }
  else if(arrGato[6] == "O" && arrGato[7] == "O" && arrGato[8]== "O"){
    confirm("Las O han ganado!");
  }
  else if(arrGato[0] == "O" && arrGato[3] == "O" && arrGato[6]== "O"){
    confirm("Las O han ganado!");
  }
  else if(arrGato[1] == "O" && arrGato[4] == "O" && arrGato[7]== "O"){
    confirm("Las O han ganado!");
  }
  else if(arrGato[2] == "O" && arrGato[8] == "O" && arrGato[5]== "O"){
    confirm("Las O han ganado!");
  }
  else if(arrGato[0] == "O" && arrGato[4] == "O" && arrGato[8]== "O"){
    confirm("Las O han ganado!");
  }
  else if(arrGato[2] == "O" && arrGato[4] == "O" && arrGato[6]== "O"){
    confirm("Las O han ganado!");
  }
}

function cargarDocumento(){


  var n=0;

  while(n < celdas.length){
    celdas[n].addEventListener("click",gato);
    n++;
  }
}

window.addEventListener("load",cargarDocumento);


/*
  var fig1 = document.getElementById('cuadro1');
  var fig2 = document.getElementById('cuadro2');
  var fig3 = document.getElementById('cuadro3');
  var fig4 = document.getElementById('cuadro4');
  var fig5 = document.getElementById('cuadro5');
  var fig6 = document.getElementById('cuadro6');
  var fig7 = document.getElementById('cuadro7');
  var fig8 = document.getElementById('cuadro8');
  var fig9 = document.getElementById('cuadro9');

function putTheFiguresX(){

    fig1.onclick=function(){ fig1.textContent = "X"; };
    fig2.onclick=function(){ fig2.textContent = "X"; };
    fig3.onclick=function(){ fig3.textContent = "X"; };
    fig4.onclick=function(){ fig4.textContent = "X"; };
    fig5.onclick=function(){ fig5.textContent = "X"; };
    fig6.onclick=function(){ fig6.textContent = "X"; };
    fig7.onclick=function(){ fig7.textContent = "X"; };
    fig8.onclick=function(){ fig8.textContent = "X"; };
    fig9.onclick=function(){ fig9.textContent = "X"; };

}

function putTheFiguresO(){

    fig1.onclick=function(){ fig1.textContent = "O"; };
    fig2.onclick=function(){ fig2.textContent = "O"; };
    fig3.onclick=function(){ fig3.textContent = "O"; };
    fig4.onclick=function(){ fig4.textContent = "O"; };
    fig5.onclick=function(){ fig5.textContent = "O"; };
    fig6.onclick=function(){ fig6.textContent = "O"; };
    fig7.onclick=function(){ fig7.textContent = "O"; };
    fig8.onclick=function(){ fig8.textContent = "O"; };
    fig9.onclick=function(){ fig9.textContent = "O"; };

}

  var i = 0;

function juego(){


  var m;

  m = i%2;
      if(m === 1){
        fig1.onclick=function(){ fig1.textContent = "X"; };
        fig2.onclick=function(){ fig2.textContent = "X"; };
        fig3.onclick=function(){ fig3.textContent = "X"; };
        fig4.onclick=function(){ fig4.textContent = "X"; };
        fig5.onclick=function(){ fig5.textContent = "X"; };
        fig6.onclick=function(){ fig6.textContent = "X"; };
        fig7.onclick=function(){ fig7.textContent = "X"; };
        fig8.onclick=function(){ fig8.textContent = "X"; };
        fig9.onclick=function(){ fig9.textContent = "X"; };
      }
      else if(m === 0){
        fig1.onclick=function(){ fig1.textContent = "O"; };
        fig2.onclick=function(){ fig2.textContent = "O"; };
        fig3.onclick=function(){ fig3.textContent = "O"; };
        fig4.onclick=function(){ fig4.textContent = "O"; };
        fig5.onclick=function(){ fig5.textContent = "O"; };
        fig6.onclick=function(){ fig6.textContent = "O"; };
        fig7.onclick=function(){ fig7.textContent = "O"; };
        fig8.onclick=function(){ fig8.textContent = "O"; };
        fig9.onclick=function(){ fig9.textContent = "O"; };
      }
      i++;
}

juego();
juego();
*/
