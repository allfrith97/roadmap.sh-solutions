const ventanaCookiee=document.getElementById("cookieConsent");
const btn= document.getElementById("boton");
const ventana=document.getElementById("ventanaModal");
const btnCerrar=document.getElementById("cerrarModal");

function aceptarCookies(){
   
    animacionVentana();
    crearCookie();
    setTimeout(cerrarVentana,3000);
    
}

function animacionVentana(){
    ventanaCookiee.style.bottom="-150%";
}
function cerrarVentana(){
    ventanaCookiee.style.display="none";
    console.log("VentanaOculta");
}

function crearCookie(){
    document.cookie="user=Alfredo; expires=Thu, 18 Dec 2025, 12:00:00 UTC; path=/";
    document.cookie="edad=25";
    console.log="Se ha creado la cookie correctamente";
}

btn.addEventListener("click",()=>{
    ventana.showModal();
});

btnCerrar.addEventListener("click",()=>{
    ventana.close();
});




