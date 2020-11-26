function aleatorio(){
    /*  Generar número aleatorio entre 0 y 1 */
    let aleatoreoDecimal = Math.random();
    console.log(aleatoreoDecimal);
    return aleatoreoDecimal;
}

function aleatorioRango(){
    const MIN = 0;
    const MAX = 10;

    /* La función floor realiza un rendondemiento al número
        convirtiendo un valor decimal en entero */
    let aleatoreo = Math.floor((Math.random()*(MAX-MIN+1))+MIN);
    console.log(aleatoreo);
    return aleatoreo;
}
function aleatorioRangoNM(min, max){
    /* La función floor realiza un rendondemiento al número
        convirtiendo un valor decimal en entero */
    let aleatoreo = Math.floor((Math.random()*(max-min+1))+min);
    console.log(aleatoreo);
    return aleatoreo;
}