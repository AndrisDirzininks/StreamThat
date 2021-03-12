window.onscroll = function() {
   myFunction3()
   highLightNavName();
  };

// Get the navbar
var navbar = document.getElementById("myTopnav2");

// Get the offset position of the navbar
var sticky = navbar.offsetTop-200;

// funkcija navigācijas aizvēršanai, ja zemāk nolaižas!
function myFunction5() {
    var x = document.getElementById("myTopnav");
    var x2 = document.getElementById("disprow2");

    if (x.className === "topnav responsive") {
      x.className = "topnav row justify-content-center d-flex align-items-center";
    } 
  }
  
function myFunction8() {
      // aizver paplašināto services navigāciju!
      var x3=document.getElementById("disprow2");
      if (x3.getAttribute("style") === "visibility: visible;") {
        // console.log("čau");
        x3.removeAttribute("style", "visibility: visible;")
        x3.classList.add("displayrows")
      // menedžē +/- 
        var x5 = document.getElementById("plus");
        var x6 = document.getElementById("minus");
        x5.setAttribute("style", "display: inline !important;")
        x6.setAttribute("style", "display: none !important;")
      }
}

function myFunction3() {
  // alert("čau");
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("back2z");
    navbar.classList.remove("neredz");
    navbar.classList.add("sticky");
    myFunction5();
    // peleFunc31();
    myFunction8();
  } else {
    navbar.className = "topnav row justify-content-center d-flex align-items-center neredz"; 
          // arī 2. navigācijai aizver.
          var x31=document.getElementById("disprow21");
          if (x31.getAttribute("style") === "visibility: visible;") {
            // console.log("čau");
            x31.removeAttribute("style", "visibility: visible;")
            x31.classList.add("displayrows")
          // menedžē +/- 
            var x51 = document.getElementById("plus1");
            var x61 = document.getElementById("minus1");
            x51.setAttribute("style", "display: inline !important;")
            x61.setAttribute("style", "display: none !important;")
          }
  }
}

// drusku nocentrē about us
if (screen.width>1500){
  document.getElementsByClassName("w-100 ml-xl-4")[0].setAttribute("style", "margin-right: 50px");
};
