function ejercicio4(){
    /* Ganera un numero entre 0 y 10 */
    const month = aleatorioRangoNM(1,12);
    let dias = (month<8 ? (month == 2?"29":(month%2?"31":"30")) : (month%2?"30":"31") );
    let mensaje = "El mes seleccionado es: "+ month +" Tiene "+dias+ " dias";
    document.getElementById("ejercicio4").innerHTML= mensaje;
    console.log(mensaje);
}