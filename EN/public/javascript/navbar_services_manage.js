
if (screen.width>1199){
var services = document.getElementsByClassName("services")[0];
services.addEventListener("mouseout", function timeFunction() {
    setTimeout( function(){
    document.getElementById("disprow2").removeAttribute("style");}, 0);
  }
  );

document.getElementsByClassName("colrow")[0].addEventListener("mouseover", function timeFunction() {
    setTimeout( function(){
    document.getElementById("disprow2").setAttribute("style", "visibility: visible;");}, 0);
  }
  );


var services2 = document.getElementById("services2");

services2.addEventListener("mouseout", function timeFunction() {
  setTimeout( function(){
  document.getElementById("disprow21").removeAttribute("style");}, 0);
}
);

document.getElementById("lrow11").addEventListener("mouseover", function timeFunction() {
  setTimeout( function(){
  document.getElementById("disprow21").setAttribute("style", "visibility: visible;");}, 0);
}
);

}
