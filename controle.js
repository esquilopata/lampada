function on(){
    document.getElementById("lamp").src ="lamapaligada.png";
}
function off(){
    document.getElementById("lamp").src ="lamapa.png";
}
function blik(){
    var intervalo = 0;
    var contador = 0;
    while(contador < 7000){

        intervalo += 70;
        setTimeout("document.getElementById('lamp').src ='lamapaligada.png';",intervalo);
        intervalo += 70;
        setTimeout("document.getElementById('lamp').src ='lamapa.png';",intervalo);
        contador++;
    }
}