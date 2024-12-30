function appliquerMode(mode) {

    if (mode === "sombre") {
        const bas = document.querySelector ("#pied")
        const barre = document.querySelector ("#barre")
        const barre1 = document.querySelector ("#barre1")

        document.body.style.backgroundColor = "#121212"; 
        document.body.style.color = "#ffffff"; 
        header.style.backgroundColor = "#000000";         
        header.style.color = "#ffffff";
        bas.style.backgroundColor = "#ffffff";    
        bas.style.color = "#000000";
        barre.style.backgroundColor = "#ffffff";    
        barre1.style.backgroundColor = "#ffffff";    
    } else {
        document.body.style.backgroundColor = "#ffffff"; 
        document.body.style.color = "#000000"; 
        header.style.backgroundColor = "#ff0000";         
        header.style.color = "#ffffff";   
        bas.style.backgroundColor = "#000000";    
        bas.style.color = "#ffffff"; 
        barre.style.backgroundColor = "#ff0000"; 
        barre1.style.backgroundColor = "#ff0000";     
    }
}

function basculerMode() {
    let modeActuel = document.body.getAttribute("data-mode");
    let nouveauMode;
    if (modeActuel === "sombre") {
        nouveauMode = "clair"; 
    } else {
        nouveauMode = "sombre"; 
    }
    document.body.setAttribute("data-mode", nouveauMode);
    appliquerMode(nouveauMode);
}

window.onload = function () {
    document.body.setAttribute("data-mode", "clair"); 
    appliquerMode("clair");
}