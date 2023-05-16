let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
};


function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
};


//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("typescript");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("angular");
        habilidades[5].classList.add("nodeJs");
        habilidades[6].classList.add("postgreSQL");
        habilidades[7].classList.add("mongoDb");
        habilidades[8].classList.add("express");
        habilidades[9].classList.add("git_github");

        habilidades[10].classList.add("adaptacion");
        habilidades[11].classList.add("comunicacion");
        habilidades[12].classList.add("trabajoEnEquipo");
        habilidades[13].classList.add("dedicacion");
        habilidades[14].classList.add("colaboracion");
        habilidades[15].classList.add("creatividad");
        habilidades[16].classList.add("sentidoDePertenencia");
        habilidades[17].classList.add("responsabilidad");
        habilidades[18].classList.add("disciplina");
        habilidades[19].classList.add("humildad");
    }
};


//Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}; 