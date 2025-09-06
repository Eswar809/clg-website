var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}

function openWebPage(url) {
    window.location.href = url;
}
// document.addEventListener('contextmenu', event => event.preventDefault());