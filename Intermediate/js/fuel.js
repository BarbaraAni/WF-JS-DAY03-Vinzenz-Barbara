var butt = document.getElementById("button");


butt.addEventListener("click", calc);


function calc(km, lit){
    var km = document.getElementById("km").value;
    var lit = document.getElementById("liter").value;

    var fuel = (lit/km) * 100;
    document.getElementById("output").innerHTML = fuel;

}