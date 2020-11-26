function ejercicio3(){
    /* Ganera un numero entre 0 y 10 */
    let num1 = aleatorioRango();
    /* Ganera un numero entre 0 y 10 */
    let num2 = aleatorioRango();
    let aleatorio = aleatorioRango();
    let resultado = 0;
    if(aleatorio>5){
        console.log("Mayor a 5 "+ aleatorio);
        resultado = num1- num2; 
    }else{
        console.log("Menor a 5 "+aleatorio);
        resultado = num1 * num2;
    }
    console.log("Resultado ejericio 3: Número uno: "+num1+" Número dos: "+num2+" Número aleatorio: "+aleatorio+" Resultado: "+resultado);
    document.getElementById("ejercicio3").innerHTML= "Resultado ejericio 3: Número uno: "+num1+" Número dos: "+num2+" Número aleatorio: "+aleatorio+" Resultado: "+resultado;
}