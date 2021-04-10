function ajanlat1() {
    document.getElementById("ajanlat2").style.display = "none";
    document.getElementById("form1").style.display = "block";
    document.getElementById("gomb1").style.display = "none";
    document.getElementById("gomb2").style.display = "none";

}


function ajanlat2() {
    document.getElementById("ajanlat1").style.display = "none";
    document.getElementById("form2").style.display = "block";
    document.getElementById("gomb1").style.display = "none";
    document.getElementById("gomb2").style.display = "none";

}


function vissza() {
    document.getElementById("ajanlat1").style.display = "block";
    document.getElementById("ajanlat2").style.display = "block";
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("gomb1").style.display = "unset";
    document.getElementById("gomb2").style.display = "unset";
    document.getElementById("peldak").style.display = "none";
}


function peldak() {
    document.getElementById("ajanlat1").style.display = "none";
    document.getElementById("peldak").style.display = "block";
    document.getElementById("form2").style.display = "none";
    document.getElementById("gomb1").style.display = "none";
    document.getElementById("gomb2").style.display = "none";
}


