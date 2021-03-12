var fonsNav = document.getElementsByClassName("background1")[0];
fonsNav.classList.remove("background1");
fonsNav.classList.add("backgroundNav");

var fonsNavNext = document.getElementsByClassName("topnav")[0];

var apaksVirsraksts = document.getElementsByClassName("header3")[0];
apaksVirsraksts.remove();

var metaTag = document.getElementsByName("description")[0];
var title = document.getElementsByTagName("title")[0];
function changeMeta(content, titletext) {
    metaTag.setAttribute("content", content);
    title.innerHTML=titletext;
};


