    var world = document.getElementsByClassName("world")[0];
    var globe = document.getElementsByClassName("globe")[0];

if (screen.width>1199){
    globe.addEventListener("mouseover", showWorld);

      
    world.addEventListener("mouseleave", showWorld);
    var langs = document.getElementsByClassName("lang")[0];

    function showWorld() {
        // alert('čau');
        if(langs.className === "lang hide") {
            setTimeout(function(){langs.classList.remove("hide")}, 100);
            setTimeout(function(){langs.classList.add("show")}, 100);

            setTimeout(function(){globe.classList.remove("show")}, 100);
            setTimeout(function(){globe.classList.add("hide")}, 100);

        }
        else if(langs.className === "lang show") {
            setTimeout(function(){langs.classList.remove("show")}, 500);
            setTimeout(function(){langs.classList.add("hide")}, 500);

            setTimeout(function(){globe.classList.remove("hide")}, 500);
            setTimeout(function(){globe.classList.add("show")}, 500);
        }
    }
}


if (screen.width<1199){
    globe.addEventListener("click", showWorld);

    var langs = document.getElementsByClassName("lang")[0];
    langs.addEventListener("click", showWorld);
    
    function showWorld() {
        // alert('čau');
        if(langs.className === "lang hide") {
            langs.classList.remove("hide");
            langs.classList.add("show");

            globe.classList.remove("show");
            globe.classList.add("hide");

        }
        else if(langs.className === "lang show") {
            langs.classList.remove("show");
            langs.classList.add("hide");

            globe.classList.remove("hide");
            globe.classList.add("show");
        }
    }
}
