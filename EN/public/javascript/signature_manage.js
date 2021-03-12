var vards_parent = document.getElementsByClassName("teksts-vards")[0];
var vards = document.getElementsByClassName("vards")[0];
var pasts = document.getElementsByClassName("teksts-pasts")[0];
console.log(vards);
vards_parent.addEventListener("mouseover", manageNames);
// pasts.addEventListener("mouseover", manageNames);
vards_parent.addEventListener("mouseleave", manageNamesoff);
pasts_parent.addEventListener("mouseleave", manageNamesoff);

function manageNames() {
    pasts.setAttribute("style", "display: inline-block;");
    vards.setAttribute("style", "display: none;");
}

function manageNamesoff() {
    pasts.setAttribute("style", "display: none;");
    vards.setAttribute("style", "display: inline-block;");
}
