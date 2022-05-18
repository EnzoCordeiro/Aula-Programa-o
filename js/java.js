function mostrartexto(){
    document.getElementById("botao").innerHTML = "Funciona!"
}var btn = document.querySelectorAll(" .key li")
input = document.querySelector(".input- valor")
operador = document.querySelectorAll(".operador")


    //ciclo repetitivo intendificar se o usuario vai clicar em algum operador 
    for(var = 0; i<btn.length; i+1) //lup que vai para o visor 
     document.onkeypress = function(event){
         var key = event.charCode;
         //mudança para o navegador
         //firefox interpretar calculadora
           for(var e = 0; e <=10; e++){
               if(key === (48+e)){
                   input.innerHTML += e;
               }
           } 
     }