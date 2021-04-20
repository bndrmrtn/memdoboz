function ajanlatKeres() {
    let form = document.getElementById("ajanlat");

    if(form.style.display == "none"){

        form.style.display = "block";

    } else {
        form.style.display = "none";
    }
}








function story() {
    document.getElementById("menugomb") = document.getElementById("story").text()
}









function bekuld() {
    var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

    let selectCheck = document.getElementById("slct").value;

    if(selectCheck === "0"){
        alert("Kérlek válassz");
        console.log("valassz");
    } else {

        console.log("ok");

        if(document.getElementById("insta").value == "" || document.getElementById("email").value == ""){
            alert("NE hagyj üresen semmilyen üzenet mezőt!")
        } else {
    
    
    
        alert("NE SPAMELD A BEKÜLDÉS GOMBOT! VISSZAJELZÉST KÜLDÜNK, HA AZ ÜZENETED EL LETT KÜLDVE");
        Email.send({
          Host: "smtp.gmail.com",
          Username: "memdobozweb@gmail.com",
          Password: "MemDobozweb1",
          To: 'memdoboz@gmail.com',
          From: "memdobozweb@gmail.com",
          Subject: "Hírdetés",
          Body: "Kategória:" + document.getElementById("slct").value + " Instagram: " + document.getElementById("insta").value + " Email: " + document.getElementById("email").value,
        })
          .then(function (message) {
            alert("Sikeresen elküldtük az üzenetét");
            location.reload();
          });
      }








    }

































}