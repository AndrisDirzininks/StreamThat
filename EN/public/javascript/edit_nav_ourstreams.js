var fonsNav = document.getElementsByClassName("background1")[0];
var Inner = document.getElementById("myTopnav");
var virsr = document.getElementsByClassName("text-white")[0];

if (screen.width>1199){
virsr.setAttribute("style", "margin-top: -230px !important;");
};

fonsNav.classList.remove("background1");
fonsNav.classList.add("backgroundNavOur");

document.getElementById("nav_subtitle").remove();
document.getElementById("nav_title").innerHTML="Our Streams";

if (screen.width<1199){
    Inner.setAttribute("style", "padding-top: 60px; padding-bottom: 20px;");
    virsr.setAttribute("style", "margin-top: -290px !important;");
};

if (screen.width<600){
    document.getElementById("nav_title").setAttribute("style", "margin-top: -200px; font-size: 42px;");
    virsr.setAttribute("style", "margin-top: 50px !important;");
};
