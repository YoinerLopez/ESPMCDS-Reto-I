function ejercicio2(){
    /* Ganera un numero entre 0 y 10 */
    let num1 = aleatorioRango();
    /* Ganera un numero entre 0 y 10 */
    let num2 = aleatorioRango();
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    console.log("Resta: "+num1+" - "+num2+" = "+ resta+" Multiplicación: "+num1+" * "+num2+" = "+multiplicacion );
    document.getElementById("ejercicio2").innerHTML= "Resta: "+num1+" - "+num2+" = "+ resta+" Multiplicación: "+num1+" * "+num2+" = "+multiplicacion;
}