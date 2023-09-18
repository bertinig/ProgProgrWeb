var spesaStagione = [
    {
        mese : "Dicembre - Gennaio - Febbraio",
        frutta : "- Frutta: ananas, arance, kiwi, limoni, mandarini, pompelmi",
        verdura : "- Verdura: barbabietola, broccoli, cavoli, finocchio, patate, radicchio, spinaci"
    },
    {
        mese : "Marzo - Aprile - Maggio",
        frutta : "- Frutta: fragole, kiwi, lamponi, melone, nespole",
        verdura : "- Verdura: agretti, asparagi, bietola, zucchine"
    },
    {
        mese : "Giugno - Luglio - Agosto",
        frutta : "- Frutta: albicocche, anguria, ciliegie, fichi, melone, pesche, susine",
        verdura : "- Verdura: cetrioli, melanzane, peperoni, pomodori, zucchine"
    },
    {
        mese : "Settembre - Ottobre - Novembre",
        frutta : "- Frutta: cachi, castagne, frutti di bosco, melagrana, uva",
        verdura : "- Verdura: carciofi, funghi, ravanello, topinanmbur, zucca"
    }
]

// variabili responsive menu
var nodoApriMenu;
var nodoRespMenuTendina;
var nodoBtnChiudiMenu;
// variabili menù scelta periodo 
var nodoScegliMese;
var scelta;
var listaSpesa;
var nodoRisultatoTot;

function gestoreLoad () {
    try {
        // responsive menu 
        nodoApriMenu = document.getElementById("apriMenu")
        nodoRespMenuTendina = document.getElementById("respMenuTendina");
        nodoBtnChiudiMenu = document.getElementById("btnChiudiMenu");
        nodoApriMenu.onclick = gestoreMenuResponsive;
        nodoBtnChiudiMenu.onclick = gestoreChiudiMenuResp;
        // menu spesa 
        nodoScegliMese = document.getElementById("scegliMese");
        var scelta = calcolaMese();
        creaSelect(nodoScegliMese, scelta);
        aggiungiPrimaOpzione(nodoScegliMese, "Seleziona un periodo");
        nodoRisultatoTot = document.getElementById("risultatoTot");
        nodoScegliMese.onchange = gestoreScelta;
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

// funzioni per la gestione del menù spesa generato dinamicamente 
function gestoreScelta () {
    try {
        var mese = nodoScegliMese.value;
        var scelta = calcolaMese();
        creaSelect(nodoScegliMese, scelta);
        nodoScegliMese.value = mese;
        gestoreRisultatoMese();
    } catch ( e ) {
        alert("gestoreScelta " + e)
    }
}

function aggiungiPrimaOpzione (nodoSelect, opzione) {
    var nodoOpzione = document.createElement("option") ;
    nodoOpzione.value = opzione;
    var nodoTesto = document.createTextNode(opzione);
    nodoOpzione.appendChild(nodoTesto);
    nodoSelect.insertBefore(nodoOpzione, nodoSelect.firstChild);
    nodoSelect.value = opzione;
}

function calcolaMese () {
    var scelta = {};
    for (var i = 0; i < spesaStagione.length; i++) {
        var spesa = spesaStagione[i]; 
        scelta[spesa.mese] = true;
    }
    return scelta;
}

function creaSelect (nodoSelect, opzioni) {
    rimuoviFigli(nodoSelect);
    for (var opzione in opzioni) {
        var nodoOpzione = document.createElement("option");
        nodoOpzione.value = opzione;
        var nodoTesto = document.createTextNode(opzione);
        nodoOpzione.appendChild(nodoTesto);
        nodoSelect.appendChild(nodoOpzione);
    }
}

function creaLista (nodoLista, elementi) {
    rimuoviFigli(nodoLista);
    for (var i = 0; i < elementi.length; i++) {
        var elemento = elementi[i];
        var nodoElemento = document.createElement("li");
        nodoLista.appendChild(nodoElemento);
        var nodoTesto = document.createTextNode(elemento);
        nodoElemento.appendChild(nodoTesto);
    }
}

function rimuoviFigli (nodo) {
    while (nodo.childNodes.length > 0) {
        nodo.removeChild(nodo.firstChild);
    }
}

function ricercaUnica (mese) {
    var stag = [];
    for (var i = 0; i < spesaStagione.length; i++) { 
        var spesa = spesaStagione[i];
        if (spesa.mese == mese) { 
            stag.push(spesa);
        }
    }
    return stag;
} 

function calcolaListaSpesa (stag) {
    var listaSpesa = [];
    for (var i = 0; i < stag.length; i++) { 
        var spesa = stag[i];
        var f = spesa.frutta; 
        var v = spesa.verdura;
        listaSpesa.push(f, v);
    }
    return listaSpesa;
}   

function gestoreRisultatoMese () {
    try {
        var mese = nodoScegliMese.value;
        var stag = ricercaUnica(mese);
        var listaSpesa = calcolaListaSpesa(stag);
        creaLista(nodoRisultatoTot, listaSpesa);
    } catch ( e ) {
        alert("gestoreRisultatoMese " + e);
    }
}