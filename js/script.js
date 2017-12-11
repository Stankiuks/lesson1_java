var aukstis =parseInt(prompt('iveskite auksti'));
var plotis =parseInt(prompt('iveskite ploti'));

function gautiPerimetra (plotis, aukstis) {
    var perimetras;
    perimetras = (plotis + aukstis) *2;
    return perimetras;
}

function gautiPlota (plotis, aukstis) {
    var plotas;
    plotas = plotis * aukstis;
    return plotas;
}

function gautiIstrizaine (plotis, aukstis) {
    var istrizaine;
    istrizaine = Math.sqrt(Math.pow (aukstis, 2) + Math.pow(plotis, 2)).toFixed(2);
    return istrizaine;
}


var perimetras =gautiPerimetra(plotis, aukstis);
//document.writeln('staciakampio perimetras'+ perimetras)
console.log('staciakampio perimetras'+ perimetras);
document.querySelector('#perimetras').innerText = perimetras;

var plotas = gautiPlota(plotis, aukstis);
//document.writeln('staciakampio plotas'+ plotas)
console.log('Staciakampio plotas' + plotas);
document.querySelector('#plotas').innerText = plotas;

var istrizaine = gautiIstrizaine(plotis, aukstis)
//document.writeln('staciakampio istrizaine'+ istrizaine)
console.log('staciakampio istrizaine' + istrizaine);
document.querySelector('#istrizaine').innerText = istrizaine;