function ejercicio1(){
    /* Ganera un numero entre 0 y 10 */
    let num1 = aleatorioRango();
    /* Ganera un numero entre 0 y 10 */
    let num2 = aleatorioRango();
    let resultado = num1 - num2;
    console.log(num1+" - "+num2+" = "+ resultado);
    document.getElementById("ejercicio1").innerHTML= num1+" - "+num2+" = "+ resultado;
}