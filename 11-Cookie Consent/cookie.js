const ventanaCookiee=document.getElementById("cookieConsent");
const btnInfo= document.getElementById("botonInfo");
const ventana=document.getElementById("ventanaModal");
const btnCerrar=document.getElementById("cerrarModal");

function animacionVentana(){
    ventanaCookiee.style.bottom="-150%";
}
function cerrarVentana(){
    ventanaCookiee.style.display="none";
    console.log("VentanaOculta");
}



 function existeCookie(nombre){
    return document.cookie.split(";").some(cookie=>cookie.trim().startsWith(nombre+"=aceptado"));
 }


function aceptarCookies(){
    document.cookie="consentimiento=aceptado; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
    animacionVentana();
    setTimeout(cerrarVentana,3000);
    
}
function mostrarVentanaCookie(){
    ventanaCookiee.style.display="flex";
}

window.addEventListener("DOMContentLoaded",()=>{
    if(existeCookie("consentimiento")){
        ventanaCookiee.style.display="none";
       
    
    }
    else{
        setTimeout(mostrarVentanaCookie, 5000);
        ventanaCookiee.style.bottom="0% ";
        ventanaCookiee.style.animation="desplazar 1s ease-in-out"
        
    }
});



boton.addEventListener("click",()=>{
    ventana.showModal();
});

btnCerrar.addEventListener("click",()=>{
    ventana.close();
});




