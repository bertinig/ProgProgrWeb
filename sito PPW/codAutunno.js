// variabili responsive menu
var nodoApriMenu;
var nodoRespMenuTendina;
var nodoBtnChiudiMenu;
// var ricette sezione Autunno
var nodoRicettaAut1;
var nodoIngredientiAut1;
var testo7;
var nodoVellutatazucca;
var nodoChiudiRicettaAut1;
var nodoRicettaAut2;
var nodoIngredientiAut2;
var testo8;
var nodoRisottofunghi;
var nodoChiudiRicettaAut2;

function gestoreLoad() {
    try{
        // responsive menu 
        nodoApriMenu = document.getElementById("apriMenu")
        nodoRespMenuTendina = document.getElementById("respMenuTendina");
        nodoBtnChiudiMenu = document.getElementById("btnChiudiMenu");
        nodoApriMenu.onclick = gestoreMenuResponsive;
        nodoBtnChiudiMenu.onclick = gestoreChiudiMenuResp;
        // ricette
        nodoVellutatazucca = document.getElementById("vellutatazucca");
        nodoRicettaAut1 = document.getElementById("ricettaAut1");
        nodoIngredientiAut1 = document.getElementById("ingredientiAut1");
        nodoChiudiRicettaAut1 = document.getElementById("chiudiRicettaAut1");
        testo7 = document.createTextNode("Preparazione: tagliamo a rondelle il porro, mettiamolo in una casseruola abbastanza alta con all’interno un giro d’olio e lasciamo soffriggere a fiamma dolce. Tagliamo a pezzetti la zucca e mettiamola nella casseruola. Lasciamo soffriggere per qualche minuto anche la zucca e poi aggiungiamo poco alla volta il brodo fino a coprire gli ingredienti. Lasciamo cuocere, sempre a fiamma dolce, per circa 20 minuti. Laviamo i ceci già cotti sotto acqua corrente e aggiungiamoli nella casseruola, facciamo cuocere gli ultimi 10 minuti. Dopodiché frulliamo con un mixer. Infine, aggiungiamo la panna vegetale e mescoliamo. Serviamo in un piatto con crostini, spezie a spiacere e un filo d’olio a crudo.");
        nodoRisottofunghi = document.getElementById("risottofunghi");
        nodoRicettaAut2 = document.getElementById("ricettaAut2");
        nodoIngredientiAut2 = document.getElementById("ingredientiAut2");
        nodoChiudiRicettaAut2 = document.getElementById("chiudiRicettaAut2");
        testo8 = document.createTextNode("Preparazione: iniziamo cuocendo i funghi in una padella con un filo d’olio, uno spicchio d’aglio, del prezzemolo e, se piace, del peperoncino. Nel frattempo, tritiamo finemente la cipolla e mettiamola a rosolare in una pentola dai bordi alti con un filo d’olio, senza farla dorare troppo. Uniamo il riso e facciamolo tostare a fuoco medio per qualche minuto, mescoliamo e aggiungiamo il vino. Una volta sfumato, iniziamo ad aggiungere un mestolo di brodo alla volta, mescolando spesso. A metà cottura del riso aggiungiamo i funghi e continuiamo ad aggiungere il brodo ogni volta che viene assorbito. Portiamo il riso fino a raggiungere la cottura al dente, a questo punto spegniamo la fiamma, aggiustiamo di sale e mantechiamo con la panna vegetale e un cucchiaio di olio. Copriamo la pentola e lasciamo riposare il risotto per un paio di minuti. Infine, aggiungiamo un ultimo mestolo di brodo, mescoliamo bene e impiattiamo con un po’ di pepe.");
        nodoVellutatazucca.onclick = gestoreAutunno1;
        nodoChiudiRicettaAut1.onclick = gestoreChiudiAut1;
        nodoRisottofunghi.onclick = gestoreAutunno2;
        nodoChiudiRicettaAut2.onclick = gestoreChiudiAut2;
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
function gestoreAutunno1 () {
    try {
        if (nodoRicettaAut1.firstChild != null) {
            nodoRicettaAut1.removeChild(nodoRicettaAut1.firstChild);  
        }
        nodoVellutatazucca.style.display = "none";
        nodoIngredientiAut1.style.display = "block";
        nodoRicettaAut1.appendChild(testo7);
        nodoChiudiRicettaAut1.style.display="block";
    } catch ( e ) {
        alert("gestoreAutunno1 " + e);
    }
}

function gestoreChiudiAut1 () {
    nodoVellutatazucca.style.display = "block";
    nodoIngredientiAut1.style.display = "none";
    nodoRicettaAut1.removeChild(nodoRicettaAut1.firstChild);
    nodoChiudiRicettaAut1.style.display="none";
}

function gestoreAutunno2 () {
    try {
        if (nodoRicettaAut2.firstChild != null) {
            nodoRicettaAut2.removeChild(nodoRicettaAut2.firstChild);  
        }
        nodoRisottofunghi.style.display = "none";
        nodoIngredientiAut2.style.display = "block";
        nodoRicettaAut2.appendChild(testo8);
        nodoChiudiRicettaAut2.style.display="block";
    } catch ( e ) {
        alert("gestoreAutunno2 " + e);
    }
}

function gestoreChiudiAut2 () {
    nodoRisottofunghi.style.display = "block";
    nodoIngredientiAut2.style.display = "none";
    nodoRicettaAut2.removeChild(nodoRicettaAut2.firstChild);
    nodoChiudiRicettaAut2.style.display="none";
}