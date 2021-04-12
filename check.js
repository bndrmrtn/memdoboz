function check() {
    let valasz1 = document.getElementById("select1").value;
    let valasz2 = document.getElementById("select2").value;
    let jovalasz = 0;
    let rosszvalasz = 0;


    if(valasz1 != 2){
        rosszvalasz += 1;
    } else {
        jovalasz += 1;
    }

    if(valasz2 != 1){
        rosszvalasz += 1;
    } else {
        jovalasz += 1;
    }

    document.getElementById("eredmeny").innerHTML = "Eredmény" + " jo valasz: " + jovalasz + " rossz: " + rosszvalasz;
} 