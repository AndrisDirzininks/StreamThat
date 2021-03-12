var header = document.getElementById("myTopnav2");
var btns = document.getElementsByClassName("changeColor");

var aboutUs = document.getElementById("about").offsetTop-200;
var whyStream = document.getElementById("why").offsetTop-200;
var clients = document.getElementById("clients").offsetTop-200;

function highLightNavName() {
    if (window.pageYOffset >= aboutUs && window.pageYOffset <= whyStream) {
        btns[1].classList.add("active");
    }
    else {
        btns[1].classList.remove("active");
    };

    if (window.pageYOffset >= whyStream && window.pageYOffset <= clients) {
        btns[2].classList.add("active");
    }
    else {
        btns[2].classList.remove("active");
    };

    if (window.pageYOffset >= clients && window.pageYOffset < clients+300) {
        btns[3].classList.add("active");
    }
    else {
        btns[3].classList.remove("active");
    };

    if (window.pageYOffset >= clients+300) {
        btns[4].classList.add("active");
    }
    else {
        btns[4].classList.remove("active");
    };
};
