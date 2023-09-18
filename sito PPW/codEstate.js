// variabili responsive menu
var nodoApriMenu;
var nodoRespMenuTendina;
var nodoBtnChiudiMenu;
// var ricette sezione Estate
var nodoRicettaEst1;
var nodoIngredientiEst1;
var testo5;
var nodoFiorizucca;
var nodoChiudiRicettaEst1;
var nodoRicettaEst2;
var nodoIngredientiEst2;
var testo6;
var nodoCouscous;
var nodoChiudiRicettaEst2;

function gestoreLoad() {
    try {
        // responsive menu 
        nodoApriMenu = document.getElementById("apriMenu")
        nodoRespMenuTendina = document.getElementById("respMenuTendina");
        nodoBtnChiudiMenu = document.getElementById("btnChiudiMenu");
        nodoApriMenu.onclick = gestoreMenuResponsive;
        nodoBtnChiudiMenu.onclick = gestoreChiudiMenuResp;
        // ricette
        nodoFiorizucca = document.getElementById("fiorizucca");
        nodoRicettaEst1 = document.getElementById("ricettaEst1");
        nodoIngredientiEst1 = document.getElementById("ingredientiEst1");
        nodoChiudiRicettaEst1 = document.getElementById("chiudiRicettaEst1");
        testo5 = document.createTextNode("Preparazione: tritiamo, prima di tutto, il basilico; dopodiché sbattiamo l’uovo e uniamolo in una ciotola con il basilico, il pesto e un pizzico di sale. Amalgamiamo bene il composto e farciamoci ogni fiore. Una volta farciti chiudiamoli bene e disponiamoli via, via su una teglia. Versiamo un filo d’olio sulla superficie di ciascun fiore. Facciamo cuocere in forno preriscaldato a 180° per 15/20 minuti.");
        nodoCouscous = document.getElementById("couscous");
        nodoRicettaEst2 = document.getElementById("ricettaEst2");
        nodoIngredientiEst2 = document.getElementById("ingredientiEst2");
        nodoChiudiRicettaEst2 = document.getElementById("chiudiRicettaEst2");
        testo6 = document.createTextNode("Preparazione: iniziamo tagliando la cipolla a pezzettini, mettiamola in una padella a soffriggere con un filo d’olio. Laviamo, puliamo e tagliamo il peperone a listarelle e uniamolo nella padella con la cipolla, mettiamo un po’ di sale e pepe, aggiungiamo mezzo bicchiere d’acqua e lasciamo cuocere per circa 15 minuti a fiamma media coprendo per metà la padella e mescolandoli spesso. A questo punto prendiamo una grossa ciotola o una pentola capiente e versiamo il cous cous e l’acqua bollente, copriamo la superficie e lasciamo riposare il tempo segnato sulla confezione del cous cous; solitamente minimo 5 minuti. Nel frattempo, laviamo i ciliegini e tagliamoli a metà. Trascorso il tempo, aiutandoci con una forchetta, sgraniamo il cous cous; aggiungiamo, poi, i peperoni, i pomodorini e il tonno precedentemente sgocciolato, aggiustiamo di sale e infine mettiamo un filo d’olio a crudo.");
        nodoFiorizucca.onclick = gestoreEstate1;
        nodoChiudiRicettaEst1.onclick = gestoreChiudiEst1;
        nodoCouscous.onclick = gestoreEstate2;
        nodoChiudiRicettaEst2.onclick = gestoreChiudiEst2
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
function gestoreEstate1 () {
    try {
        if (nodoRicettaEst1.firstChild != null) {
            nodoRicettaEst1.removeChild(nodoRicettaEst1.firstChild);  
        }
        nodoFiorizucca.style.display = "none";
        nodoIngredientiEst1.style.display = "block";
        nodoRicettaEst1.appendChild(testo5);
        nodoChiudiRicettaEst1.style.display = "block";
    } catch ( e ) {
        alert("gestoreEstate1 " + e);
    }
}

function gestoreChiudiEst1 () {
    nodoFiorizucca.style.display = "block";
    nodoIngredientiEst1.style.display = "none";
    nodoRicettaEst1.removeChild(nodoRicettaEst1.firstChild);
    nodoChiudiRicettaEst1.style.display="none";
}

function gestoreEstate2 () {
    try {
        if (nodoRicettaEst2.firstChild != null) {
            nodoRicettaEst2.removeChild(nodoRicettaEst2.firstChild);
        }
        nodoCouscous.style.display = "none";
        nodoIngredientiEst2.style.display = "block";
        nodoRicettaEst2.appendChild(testo6);
        nodoChiudiRicettaEst2.style.display = "block";
    } catch ( e ) {
        alert("gestoreEstate2 " + e);
    }
}

function gestoreChiudiEst2 () {
    nodoCouscous.style.display = "block";
    nodoIngredientiEst2.style.display = "none";
    nodoRicettaEst2.removeChild(nodoRicettaEst2.firstChild);
    nodoChiudiRicettaEst2.style.display="none";
}