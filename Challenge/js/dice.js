var playa1 = prompt("Enter Name Playa 1!");
var playa2 = prompt("Enter Name Playa 2!");
document.getElementById("players").innerHTML = playa1 + " vs. " + playa2;

var butt1 = document.getElementById("button1");
var butt2 = document.getElementById("button2");

butt1.addEventListener("click", roll1);
butt2.addEventListener("click", roll2);


function roll1 () {

    var ran1 = Math.floor(Math.random()*6 )+ 1;
    var ran2 = Math.floor(Math.random()*6 )+ 1;
    var ran3 = Math.floor(Math.random()*6 )+ 1;
    sum1 = ran1 + ran2 + ran3;
    
    if(ran1 == 1) {
        document.getElementById("ran1").innerHTML = "<img src=\"./img/one.jpg\">";
    } else if (ran1 == 2) {
        document.getElementById("ran1").innerHTML = "<img src=\"./img/two.jpg\">";
    }else if (ran1 == 3) {
        document.getElementById("ran1").innerHTML = "<img src=\"./img/three.jpg\">";
    }else if (ran1 == 4) {
        document.getElementById("ran1").innerHTML = "<img src=\"./img/four.jpg\">";
    }else if (ran1 == 5) {
        document.getElementById("ran1").innerHTML = "<img src=\"./img/five.jpg\">";
    }else {
        document.getElementById("ran1").innerHTML = "<img src=\"./img/six.jpg\">";
    };

    if(ran2 == 1) {
        document.getElementById("ran2").innerHTML = "<img src=\"./img/one.jpg\">";
    } else if (ran2 == 2) {
        document.getElementById("ran2").innerHTML = "<img src=\"./img/two.jpg\">";
    }else if (ran2 == 3) {
        document.getElementById("ran2").innerHTML = "<img src=\"./img/three.jpg\">";
    }else if (ran2 == 4) {
        document.getElementById("ran2").innerHTML = "<img src=\"./img/four.jpg\">";
    }else if (ran2 == 5) {
        document.getElementById("ran2").innerHTML = "<img src=\"./img/five.jpg\">";
    }else {
        document.getElementById("ran2").innerHTML = "<img src=\"./img/six.jpg\">";
    };

    if(ran3 == 1) {
        document.getElementById("ran3").innerHTML = "<img src=\"./img/one.jpg\">";
    } else if (ran3 == 2) {
        document.getElementById("ran3").innerHTML = "<img src=\"./img/two.jpg\">";
    }else if (ran3 == 3) {
        document.getElementById("ran3").innerHTML = "<img src=\"./img/three.jpg\">";
    }else if (ran3 == 4) {
        document.getElementById("ran3").innerHTML = "<img src=\"./img/four.jpg\">";
    }else if (ran3 == 5) {
        document.getElementById("ran3").innerHTML = "<img src=\"./img/five.jpg\">";
    }else {
        document.getElementById("ran3").innerHTML = "<img src=\"./img/six.jpg\">";
    };

    document.getElementById("sum1").innerHTML = "Sum: " + sum1;

    if(sum1>sum2) {
        document.getElementById("winner").innerHTML = playa1 + " wins!";
     } else if (sum2>sum1){
         document.getElementById("winner").innerHTML = playa2 + " wins!";
     } else {
         document.getElementById("winner").innerHTML ="Draw!";
     }
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var bgColor2 = "rgb(" + y + "," + z + "," + x + ")";
    var grad = "linear-gradient(" + bgColor + "," + bgColor2 + ")";
    console.log(bgColor);
    
    document.body.style.backgroundImage = grad;
}
    


function roll2() {

    var ran4 = Math.floor(Math.random()*6 )+ 1;
    var ran5 = Math.floor(Math.random()*6 )+ 1;
    var ran6 = Math.floor(Math.random()*6 )+ 1;
    sum2 = ran4 + ran5 + ran6;
    if(ran4 == 1) {
        document.getElementById("ran4").innerHTML = "<img src=\"./img/one.jpg\">";
    } else if (ran4 == 2) {
        document.getElementById("ran4").innerHTML = "<img src=\"./img/two.jpg\">";
    }else if (ran4 == 3) {
        document.getElementById("ran4").innerHTML = "<img src=\"./img/three.jpg\">";
    }else if (ran4 == 4) {
        document.getElementById("ran4").innerHTML = "<img src=\"./img/four.jpg\">";
    }else if (ran4 == 5) {
        document.getElementById("ran4").innerHTML = "<img src=\"./img/five.jpg\">";
    }else {
        document.getElementById("ran4").innerHTML = "<img src=\"./img/six.jpg\">";
    };

    if(ran5 == 1) {
        document.getElementById("ran5").innerHTML = "<img src=\"./img/one.jpg\">";
    } else if (ran5 == 2) {
        document.getElementById("ran5").innerHTML = "<img src=\"./img/two.jpg\">";
    }else if (ran5 == 3) {
        document.getElementById("ran5").innerHTML = "<img src=\"./img/three.jpg\">";
    }else if (ran5 == 4) {
        document.getElementById("ran5").innerHTML = "<img src=\"./img/four.jpg\">";
    }else if (ran5 == 5) {
        document.getElementById("ran5").innerHTML = "<img src=\"./img/five.jpg\">";
    }else {
        document.getElementById("ran5").innerHTML = "<img src=\"./img/six.jpg\">";
    };

    if(ran6 == 1) {
        document.getElementById("ran6").innerHTML = "<img src=\"./img/one.jpg\">";
    } else if (ran6 == 2) {
        document.getElementById("ran6").innerHTML = "<img src=\"./img/two.jpg\">";
    }else if (ran6 == 3) {
        document.getElementById("ran6").innerHTML = "<img src=\"./img/three.jpg\">";
    }else if (ran6 == 4) {
        document.getElementById("ran6").innerHTML = "<img src=\"./img/four.jpg\">";
    }else if (ran6 == 5) {
        document.getElementById("ran6").innerHTML = "<img src=\"./img/five.jpg\">";
    }else {
        document.getElementById("ran6").innerHTML = "<img src=\"./img/six.jpg\">";
    };

    document.getElementById("sum2").innerHTML = "Sum: " + sum2;
    
    if(sum1>sum2) {
       document.getElementById("winner").innerHTML = playa1 + " wins!";
    } else if (sum2>sum1){
        document.getElementById("winner").innerHTML = playa2 + " wins!";
    } else {
        document.getElementById("winner").innerHTML ="Draw!";
    }
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var bgColor2 = "rgb(" + y + "," + z + "," + x + ")";
    var grad = "linear-gradient(" + bgColor + "," + bgColor2 + ")";
    console.log(bgColor);
    
    document.body.style.backgroundImage = grad;

}


function bg() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var bgColor2 = "rgb(" + y + "," + z + "," + x + ")";
    var grad = "linear-gradient(" + bgColor + "," + bgColor2 + ")";
    console.log(bgColor);
    
    document.body.style.backgroundImage = grad;
    }

bg();