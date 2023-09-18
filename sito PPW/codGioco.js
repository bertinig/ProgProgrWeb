// variabili responsive menu
var nodoApriMenu;
var nodoRespMenuTendina;
var nodoBtnChiudiMenu;
// variabili gioco
var fruttaVerdura = ["albicocca", "anguria", "arancia", "asparago", "barbabietola", "broccoli", "cachi", "carciofo", "castagna", "fico", "finocchio", "fragola", "kiwi", "melanzana", "melone", "peperone", "pomodoro", "uva", "zucca", "zucchina"];
var nodiFruttaVerdura = {};
var nodoInverno;
var nodoPrimavera;
var nodoEstate;
var nodoAutunno;
var nodoConfermaGioco;
var nodoMessaggioGiocoTop;
var nodoGiocaAncora;
var nodoMessaggioGiocoFlop;
var nodoRiprova;
var iconaSelez;
var riquadroScelto;
var scelteInverno = [];
var sceltePrimavera = [];
var scelteEstate = [];
var scelteAutunno = [];
var soluzInverno = ["arancia", "barbabietola", "broccoli", "finocchio", "kiwi"];
var soluzPrimavera = ["albicocca", "asparago", "fragola", "melone", "zucchina"];
var soluzEstate = ["anguria", "fico", "melanzana", "peperone", "pomodoro"];
var soluzAutunno = ["cachi", "carciofo", "castagna", "uva", "zucca"];

function gestoreLoad () {
    try {
        // responsive menu 
        nodoApriMenu = document.getElementById("apriMenu")
        nodoRespMenuTendina = document.getElementById("respMenuTendina");
        nodoBtnChiudiMenu = document.getElementById("btnChiudiMenu");
        nodoApriMenu.onclick = gestoreMenuResponsive;
        nodoBtnChiudiMenu.onclick = gestoreChiudiMenuResp;

        // Gioco      
        for (var i = 0; i < fruttaVerdura.length; i++) {
            var frutto = fruttaVerdura[i];
            var nodoFrutto = document.getElementById(frutto);
            nodiFruttaVerdura[frutto] = nodoFrutto;
            nodoFrutto.ondragstart = gestoreDragStart;
            nodoFrutto.onmouseover = gestoreCursore;
        }

        nodoInverno = document.getElementById("inverno");
        nodoPrimavera = document.getElementById("primavera");
        nodoEstate = document.getElementById("estate");
        nodoAutunno = document.getElementById("autunno");
        nodoConfermaGioco = document.getElementById("confermaGioco");
        nodoMessaggioGiocoTop = document.getElementById("messaggioGiocoTop");
        nodoGiocaAncora = document.getElementById("giocaAncora");
        nodoBottoneTop = document.getElementById("bottoneTop");
        nodoMessaggioGiocoFlop = document.getElementById("messaggioGiocoFlop");
        nodoRiprova = document.getElementById("riprova");
        nodoBottoneFlop = document.getElementById("bottoneFlop");

        nodoInverno.ondragover = gestoreDragOver;
        nodoInverno.ondrop = gestoreDrop;
        nodoPrimavera.ondragover = gestoreDragOver;
        nodoPrimavera.ondrop = gestoreDrop;
        nodoEstate.ondragover = gestoreDragOver;
        nodoEstate.ondrop = gestoreDrop;
        nodoAutunno.ondragover = gestoreDragOver;
        nodoAutunno.ondrop = gestoreDrop;

        nodoConfermaGioco.onclick = gestoreConferma;
        nodoGiocaAncora.onclick = gestoreGiocaAncora;
        nodoRiprova.onclick = gestoreRiprovaGioco;
        } catch ( e ) {
        alert("gestoreLoad " + e); 
    } 
}

window.onload = gestoreLoad;

// funzioni per il responsive menu
function gestoreMenuResponsive () {
    try {
        nodoApriMenu.style.display = "none"
        nodoRespMenuTendina.style.display = "block";
        nodoBtnChiudiMenu.style.display = "block";
    } catch ( e ) {
        alert ("gestoreMenuResponsive " + e);
    }  
}

function gestoreChiudiMenuResp () {
    nodoRespMenuTendina.style.display = "none";
    nodoBtnChiudiMenu.style.display = "none";
    nodoApriMenu.style.display = "block"
}

// funzioni per il gioco
// INIZIO CODICE DISPENSE
// invocata quando l'icona inzia a essere spostata
function gestoreDragStart (evento) {
    try {
        evento.dataTransfer.setData("text", this.id);
    } catch ( e ) {
        alert("gestoreDragStart" + e);
    }
}
// invocata quando l'utente sposta l'icona nel riquadro
function gestoreDragOver (evento) {
    try {
        evento.preventDefault();
    } catch ( e ) {
        alert("gestoreDragOver " + e);
    }
}
// invocata quando l'utente rilascia l'icona nel riquadro
function gestoreDrop (evento) {
    try {
        evento.preventDefault();
        var dati = evento.dataTransfer.getData("text");
        var elemento = document.getElementById(dati)
        var riquadro = evento.target.id;
        elemento.setAttribute('draggable', false);
        this.appendChild(elemento);
        stagioneSelezionata(dati, riquadro);
        } catch ( e ) {
        alert("gestoreStop " + e);
    }
}
// serve a cambiare il cursore quando l'utente passa sopra l'icona
function gestoreCursore () {
    try {
        for (var frutto in nodiFruttaVerdura.length) {
            var nodoFruttaVerdura = nodiFruttaVerdura[frutto];
            nodoFruttaVerdura.style.cursor = "pointer";
        }
    } catch ( e ) {
        alert("gestoreCursore " + e);
    }
}
// FINE COD DISPENSE

// di volta in volta mi salva in un array le icone messe dall'utente nei riquadri
function stagioneSelezionata(icona, riquadro) {
    try {
        switch (riquadro) {
            case 'inverno': // primo caso
                scelteInverno.push(icona); // push aggiunge nuovi elementi all'array
                break;
            
            case 'primavera': // secondo caso
                sceltePrimavera.push(icona);
                break;
    
            case 'estate': // terzo caso
                scelteEstate.push(icona);
                break;
    
            case 'autunno': // quarto caso
                scelteAutunno.push(icona);
                break;
        }
    } catch ( e ) {
        alert("stagioneSelezionata " + e);
    }
}
/* il metodo every() prima controlla se i due array hanno la stessa lunghezza
dopo itera su uno degli array usando gli indici per confrontare i suoi elementi con quelli dell'altro */ 
function controlloDatiUgualiNonOrdinati(array1, array2) {
    var ugualeArray1 = array1.every(elem => array2.includes(elem)); // il metodo includes() restituisce true se un array contiene un valore specifico
    var ugualeArray2 = array2.every(elem => array1.includes(elem));
    var lunghezzaUguale = array1.length === array2.length;

    return lunghezzaUguale && ugualeArray1 && ugualeArray2;
}

function gestoreConferma () {
    var verificaInverno = controlloDatiUgualiNonOrdinati(scelteInverno, soluzInverno);
    if (verificaInverno) { // se verificaInverno è vero restituisce lo stile del rettangolo top, altrimenti flop
        nodoInverno.className = "rettangolo-top";
    } else {
        nodoInverno.className = "rettangolo-flop";
    }
    var verificaPrimavera = controlloDatiUgualiNonOrdinati(sceltePrimavera, soluzPrimavera);
    if (verificaPrimavera) {
        nodoPrimavera.className = "rettangolo-top";
    } else {
        nodoPrimavera.className = "rettangolo-flop";
    }
    var verificaEstate = controlloDatiUgualiNonOrdinati(scelteEstate, soluzEstate);
    if (verificaEstate) {
        nodoEstate.className = "rettangolo-top";
    } else {
        nodoEstate.className = "rettangolo-flop";
    }
    var verificaAutunno = controlloDatiUgualiNonOrdinati(scelteAutunno, soluzAutunno);
    if (verificaAutunno) {
        nodoAutunno.className = "rettangolo-top";
    } else {
        nodoAutunno.className = "rettangolo-flop";
    }

    if (verificaInverno && verificaPrimavera && verificaEstate && verificaAutunno) {
        nodoConfermaGioco.style.display = "none";
        nodoMessaggioGiocoTop.style.display = "block";
        nodoBottoneTop.style.display = "block";
    } else {
        nodoConfermaGioco.style.display = "none";
        nodoMessaggioGiocoFlop.style.display = "block";
        nodoBottoneFlop.style.display = "block";
    }
}

function gestoreGiocaAncora () {
    location.reload();
}

function gestoreRiprovaGioco () {
    location.reload();
}