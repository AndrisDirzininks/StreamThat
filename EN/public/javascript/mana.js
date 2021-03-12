function myFunction() {
    var x = document.getElementById("myTopnav");
    var x3=document.getElementById("disprow2");
    
    if (x.className === "topnav row justify-content-center d-flex align-items-center") {
      x.className = "topnav responsive";
    } else {
      x.className = "topnav row justify-content-center d-flex align-items-center";
      if (x3.getAttribute("style") === "visibility: visible;" ) {
        var x5 = document.getElementById("plus");
        var x6 = document.getElementById("minus");

        x3.removeAttribute("style", "visibility: visible;")
        x3.classList.add("displayrows")

        x5.setAttribute("style", "display: inline !important;")
        x6.setAttribute("style", "display: none !important;")
      
      }
    }
  }

// otrā navigācija
function myFunction2() {
  var x = document.getElementById("myTopnav2");
 if (x.className === "topnav row justify-content-center d-flex align-items-center back2z sticky") {
    x.className = "topnav responsive sticky";
  }
  else if (x.className === "topnav responsive sticky" || x.className === "topnav responsive sticky back2z") {
    x.className = "topnav row justify-content-center d-flex align-items-center back2z sticky";

    var x3=document.getElementById("disprow21");
    if (x3.getAttribute("style") === "visibility: visible;" ) {
      var x5 = document.getElementById("plus1");
      var x6 = document.getElementById("minus1");

      x3.removeAttribute("style", "visibility: visible;")
      x3.classList.add("displayrows")

      x5.setAttribute("style", "display: inline !important;")
      x6.setAttribute("style", "display: none !important;")
    
    }
  }
}

function peleFunc1() {
  // pārbauda vai ikona parādījusies, ja nav, tad turpina ar hover funkciju
  var ic = document.getElementById("icon1");
  if(getComputedStyle(ic).display === "none") {
    // alert("nav ikona redzama");
  
  // alert("hey");
  var x1=document.getElementById("disprow2");

  x1.classList.remove("displayrows");
  x1.setAttribute("style", "visibility: visible;")
  }
 }
 function peleFunc12() {
  // pārbauda vai ikona parādījusies, ja nav, tad turpina ar hover funkciju
  var ic = document.getElementById("icon11");
  if(getComputedStyle(ic).display === "none") {
    // alert("nav ikona redzama");
  
  // alert("hey");
  var x1=document.getElementById("disprow21");

  x1.classList.remove("displayrows");
  x1.setAttribute("style", "visibility: visible;")
  }
 }

 function peleFunc2() {
    // pārbauda vai ikona parādījusies, ja nav, tad turpina ar hover funkciju
    var ic = document.getElementById("icon1");
    if (getComputedStyle(ic).display === "none") {
    var x2=document.getElementById("disprow2");
    
    x2.removeAttribute("style", "visibility: visible;")
    x2.classList.add("displayrows");
    }
 }

 function peleFunc21() {
  // pārbauda vai ikona parādījusies, ja nav, tad turpina ar hover funkciju
  var ic = document.getElementById("icon11");
  if (getComputedStyle(ic).display === "none") {
  var x2=document.getElementById("disprow21");
  
  x2.removeAttribute("style", "visibility: visible;")
  x2.classList.add("displayrows");
  }
}

 function peleFunc31() {

  var x3=document.getElementById("disprow2");
  if (x3.getAttribute("style") === "visibility: visible;" ) {

    x3.removeAttribute("style", "visibility: visible;")
    x3.classList.add("displayrows")}
   else {
    x3.classList.remove("displayrows");
    x3.setAttribute("style", "visibility: visible;")
   }
 }

 function peleFunc31z() {

  var x3=document.getElementById("disprow21");
  if (x3.getAttribute("style") === "visibility: visible;" ) {

    x3.removeAttribute("style", "visibility: visible;")
    x3.classList.add("displayrows")}
   else {
    x3.classList.remove("displayrows");
    x3.setAttribute("style", "visibility: visible;")
   }
 }

// funkcija priekš SERVICES sadaļu redzēšanas - uzklikšķinot
 function peleFunc3() {
   peleFunc31();
   // funkcija priekš +/-
   var x4 = document.getElementById("disprow2");
   var x5 = document.getElementById("plus");
   var x6 = document.getElementById("minus");
   var ic = document.getElementById("icon1");
   if (x4.className !== "displayrows" && getComputedStyle(ic).display === "block"){
     x5.setAttribute("style", "display: none !important;")
     x6.setAttribute("style", "display: inline !important;")
     
    //  getComputedStyle(x5).display = "none";
   } else if (x4.className === "displayrows" && getComputedStyle(ic).display === "block") {
    // x5.removeAttribute("style", "visibility: visible;")
    x5.setAttribute("style", "display: inline !important;")
    x6.setAttribute("style", "display: none !important;")
   }
   }

   // funkcija priekš SERVICES sadaļu redzēšanas - uzklikšķinot
 function peleFunc3z() {
  peleFunc31z();
  // funkcija priekš +/-
  var x4 = document.getElementById("disprow21");
  var x5 = document.getElementById("plus1");
  var x6 = document.getElementById("minus1");
  var ic = document.getElementById("icon11");
  if (x4.className !== "displayrows" && getComputedStyle(ic).display === "block"){
    x5.setAttribute("style", "display: none !important;")
    x6.setAttribute("style", "display: inline !important;")
    
   //  getComputedStyle(x5).display = "none";
  } else if (x4.className === "displayrows" && getComputedStyle(ic).display === "block") {
   // x5.removeAttribute("style", "visibility: visible;")
   x5.setAttribute("style", "display: inline !important;")
   x6.setAttribute("style", "display: none !important;")
  }
  }
