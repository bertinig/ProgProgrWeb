// variabili responsive menu
var nodoApriMenu;
var nodoRespMenuTendina;
var nodoBtnChiudiMenu;

function gestoreLoad () {
    // responsive menu 
    nodoApriMenu = document.getElementById("apriMenu")
    nodoRespMenuTendina = document.getElementById("respMenuTendina");
    nodoBtnChiudiMenu = document.getElementById("btnChiudiMenu");
    nodoApriMenu.onclick = gestoreMenuResponsive;
    nodoBtnChiudiMenu.onclick = gestoreChiudiMenuResp;
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