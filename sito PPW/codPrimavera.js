// variabili responsive menu
var nodoApriMenu;
var nodoRespMenuTendina;
var nodoBtnChiudiMenu;
// var ricette sezione Primavera
var nodoRicettaPri1;
var nodoIngredientiPri1;
var testo3;
var nodoFrittataasparagi;
var nodoChiudiRicettaPri1;
var nodoRicettaPri2;
var nodoIngredientiPri2;
var testo4;
var nodoTriangolinispinacifeta;
var nodoChiudiRicettaPri2;

function gestoreLoad () {
    try {
        // responsive menu 
        nodoApriMenu = document.getElementById("apriMenu")
        nodoRespMenuTendina = document.getElementById("respMenuTendina");
        nodoBtnChiudiMenu = document.getElementById("btnChiudiMenu");
        nodoApriMenu.onclick = gestoreMenuResponsive;
        nodoBtnChiudiMenu.onclick = gestoreChiudiMenuResp;
        // ricette
        nodoFrittataasparagi = document.getElementById("frittataasparagi");
        nodoRicettaPri1 = document.getElementById("ricettaPri1");
        nodoIngredientiPri1 = document.getElementById("ingredientiPri1");
        nodoChiudiRicettaPri1 = document.getElementById("chiudiRicettaPri1");
        testo3 = document.createTextNode("Preparazione: per prima cosa puliamo gli asparagi tagliando la parte finale del gambo e laviamoli. Per cuocerli li mettiamo in una padella abbastanza capiente in larghezza, dopo averli ricoperti con l’acqua, li lasciamo sul fuoco a fiamma dolce per 20 minuti. Nel frattempo, in una ciotola sbattiamo le uova e aggiungiamo le spezie a nostro piacimento; io solitamente metto origano, curcuma e paprika. Passati i 20 minuti togliamo qualche asparago per fare la nostra frittata, mentre gli altri lasciamoli cuocere altri 10 minuti così li avremo già pronti per altri pasti. Tagliamo gli asparagi a pezzetti di grandezza a piacere e mettiamoli nella ciotola con le uova sbattute; aggiungiamo sale e pepe e mescoliamo tutto. Mettiamo un filo d’olio in una padella, versiamo il composto, copriamo con un coperchio e lasciamo cuocere su fiamma dolce per circa 10 minuti.");
        nodoTriangolinispinacifeta = document.getElementById("triangolinispinacifeta");
        nodoRicettaPri2 = document.getElementById("ricettaPri2");
        nodoIngredientiPri2 = document.getElementById("ingredientiPri2")
        nodoChiudiRicettaPri2 = document.getElementById("chiudiRicettaPri2");
        testo4 = document.createTextNode("Preparazione: mettiamo in una ciotola la feta con un pizzico di pepe e gli spinaci, aiutandoci con una forchetta amalgamiamo gli ingredienti. Prendiamo un foglio di pasta fillo, adagiamolo su un piano di lavoro e spennelliamolo con l’olio senza parsimonia! Prendiamo un altro foglio e adagiamolo sopra al primo, facciamoli aderire facendo un po’ di pressione. Dopodiché con un coltello tagliamo a metà il foglio per il senso della lunghezza. Disponiamo nell’angolo in basso del foglio un cucchiaio di ripieno, chiudiamo formando un triangolo e continuiamo così fino ad arrivare alla fine della striscia. Sigilliamo gli estremi spennellando un pochino d’olio e poi riponiamo su una teglia. Proseguiamo fino a esaurire gli ingredienti. Prima di infornare in forno preriscaldato a 200° gradi per circa 15 minuti, spennelliamo la superficie per farla dorare e, se gradiamo, aggiungiamo dei semini come topping.");
        nodoFrittataasparagi.onclick = gestorePrimavera1;
        nodoChiudiRicettaPri1.onclick = gestoreChiudiPri1;
        nodoTriangolinispinacifeta.onclick = gestorePrimavera2;
        nodoChiudiRicettaPri2.onclick = gestoreChiudiPri2;
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

// funzioni per le ricette
function gestorePrimavera1 () {
    try {
        if (nodoRicettaPri1.firstChild != null) {
            nodoRicettaPri1.removeChild(nodoRicettaPri1.firstChild);  
        }
        nodoFrittataasparagi.style.display = "none";
        nodoIngredientiPri1.style.display = "block";
        nodoRicettaPri1.appendChild(testo3);
        nodoChiudiRicettaPri1.style.display="block";
    } catch ( e ) {
        alert("gestorePrimavera1 " + e);
    }
}

function gestoreChiudiPri1 () {
    nodoFrittataasparagi.style.display = "block";
    nodoIngredientiPri1.style.display = "none";
    nodoRicettaPri1.removeChild(nodoRicettaPri1.firstChild);
    nodoChiudiRicettaPri1.style.display="none";
}

function gestorePrimavera2 () {
    try {
        if (nodoRicettaPri2.firstChild != null) {
            nodoRicettaPri2.removeChild(nodoRicettaPri2.firstChild);  
        }
        nodoTriangolinispinacifeta.style.display = "none";
        nodoIngredientiPri2.style.display = "block";
        nodoRicettaPri2.appendChild(testo4);
        nodoChiudiRicettaPri2.style.display="block";
    } catch ( e ) {
        alert("gestorePrimavera2 " + e);
    }
}

function gestoreChiudiPri2 () {
    nodoTriangolinispinacifeta.style.display = "block";
    nodoIngredientiPri2.style.display = "none";
    nodoRicettaPri2.removeChild(nodoRicettaPri2.firstChild);
    nodoChiudiRicettaPri2.style.display="none";
}