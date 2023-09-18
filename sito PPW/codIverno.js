// variabili responsive menu
var nodoApriMenu;
var nodoRespMenuTendina;
var nodoBtnChiudiMenu;
// var ricette sezione Inverno
var nodoRicettaInv1;
var nodoIngredientiInv1;
var testo1;
var nodoVellutatabroccoli;
var nodoChiudiRicettaInv1;
var nodoRicettaInv2;
var nodoIngredientiInv2;
var testo2;
var nodoTortinopatate;
var nodoChiudiRicettaInv2;

function gestoreLoad () {
    try {
        // responsive menu 
        nodoApriMenu = document.getElementById("apriMenu")
        nodoRespMenuTendina = document.getElementById("respMenuTendina");
        nodoBtnChiudiMenu = document.getElementById("btnChiudiMenu");
        nodoApriMenu.onclick = gestoreMenuResponsive;
        nodoBtnChiudiMenu.onclick = gestoreChiudiMenuResp;
        // ricette
        nodoVellutatabroccoli = document.getElementById("vellutatabroccoli");
        nodoRicettaInv1 = document.getElementById("ricettaInv1");
        nodoIngredientiInv1 = document.getElementById("ingredientiInv1");
        nodoChiudiRicettaInv1 = document.getElementById("chiudiRicettaInv1");
        testo1 = document.createTextNode("Preparazione: tagliamo a rondelle il cipollotto, mettiamolo in una casseruola abbastanza alta con all’interno un giro d’olio e lasciamo soffriggere a fiamma dolce. Peliamo, laviamo e tagliamo a pezzetti le patate. Facciamo lo stesso con i broccoli e poi mettiamo entrambi nella casseruola. Mescoliamo tutto e aggiungiamo poco alla volta il brodo fino a coprire gli ingredienti. Lasciamo cuocere, sempre a fiamma dolce, per circa 20 minuti. Laviamo i fagioli già cotti sotto acqua corrente e aggiungiamoli nella casseruola, facciamo cuocere gli ultimi 10 minuti. Dopodiché frulliamo con un mixer. Infine, aggiungiamo la panna vegetale e mescoliamo. Serviamo in un piatto con spezie a spiacere e un filo d’olio a crudo.")
        nodoTortinopatate = document.getElementById("tortinopatate");
        nodoRicettaInv2 = document.getElementById("ricettaInv2");
        nodoIngredientiInv2 = document.getElementById("ingredientiInv2");
        nodoChiudiRicettaInv2 = document.getElementById("chiudiRicettaInv2");
        testo2 = document.createTextNode("Preparazione: sbucciamo e tagliamo le patate a fette sottili, meglio se ci aiutiamo con una mandolina, poi lasciamole in ammollo nell’acqua fredda per 10 minuti. Nel frattempo, imburriamo uno stampo a cerniera da 22 cm, o in alternativa una teglia alta, e cospargiamolo di pangrattato. Togliamo le fette di patate dall’acqua e asciughiamole bene, disponiamole a raggera sullo sfondo dello stampo, condiamole con rosmarino, sale e pepe e aggiungiamo poco pangrattato. Poi copriamo con la provola. Continuiamo così stratificando fino all’orlo dello stampo. Terminiamo, infine, con il pangrattato, il parmigiano grattugiato e un generoso giro d’olio. Cuociamo in forno preriscaldato a 180° per circa 15 minuti fino a far dorare la superficie del tortino.");
        nodoVellutatabroccoli.onclick = gestoreInverno1;
        nodoChiudiRicettaInv1.onclick = gestoreChiudiInv1;
        nodoTortinopatate.onclick = gestoreInverno2;
        nodoChiudiRicettaInv2.onclick = gestoreChiudiInv2;
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
function gestoreInverno1 () {
    try {
        if (nodoRicettaInv1.firstChild != null) {
            nodoRicettaInv1.removeChild(nodoRicettaInv1.firstChild);  
        }
        nodoVellutatabroccoli.style.display = "none";
        nodoIngredientiInv1.style.display = "block";
        nodoRicettaInv1.appendChild(testo1);
        nodoChiudiRicettaInv1.style.display="block";
    } catch ( e ) {
        alert("gestoreInverno1 " + e);
    }
}

function gestoreChiudiInv1 () {
    nodoVellutatabroccoli.style.display = "block";
    nodoIngredientiInv1.style.display = "none";
    nodoRicettaInv1.removeChild(nodoRicettaInv1.firstChild);
    nodoChiudiRicettaInv1.style.display="none";
}

function gestoreInverno2 () {
    try {
        if (nodoRicettaInv2.firstChild != null) {
            nodoRicettaInv2.removeChild(nodoRicettaInv2.firstChild);  
        }
        nodoTortinopatate.style.display = "none";
        nodoIngredientiInv2.style.display = "block";
        nodoRicettaInv2.appendChild(testo2);
        nodoChiudiRicettaInv2.style.display="block";
    } catch ( e ) {
        alert("gestoreInverno2 " + e);
    }
}

function gestoreChiudiInv2 () {
    nodoTortinopatate.style.display = "block";
    nodoIngredientiInv2.style.display = "none";
    nodoRicettaInv2.removeChild(nodoRicettaInv2.firstChild);
    nodoChiudiRicettaInv2.style.display="none";
}