const pantalla = document.getElementById("pantalla")

function enviarPantalla(input){
    pantalla.value += input;

}

function limpiarPantalla(){
    pantalla.value = "";

}

function calcular(){
    try{ 
        pantalla.value = eval(pantalla.value);
    }   
    catch(error){
        pantalla.value = "Error"
    }
}