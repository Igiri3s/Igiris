var number = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;
function hide1(){
    $("#ghotic").fadeOut(500);
}	
function hide2(){
    $("#ghotic2").fadeOut(500);
}

function hide3(){
    $("#ghotic3").fadeOut(500);
}

function change1() {
    number++; if(number>4) number=1;
    var file = "<img src=\"ghotic1/" + number + ".jpg\" id=\"zdj\" class=\"center\"/>";
    document.getElementById("ghotic").innerHTML=file;
    $("#ghotic").fadeIn(500);
    setTimeout("change1()", 5000);
    setTimeout("hide1()", 4500);
}

function change2() {
    number2++; if(number2>4) number2=1;
    var file = "<img src=\"ghotic2/" + number2 + ".jpg\" id=\"zdj\" class=\"center\"/>";
    document.getElementById("ghotic2").innerHTML=file;
    $("#ghotic2").fadeIn(500);
    setTimeout("change2()", 5000);
    setTimeout("hide2()", 4500);
}
function change3() {
    number3++; if(number3>4) number3=1;
    var file = "<img src=\"ghotic3/" + number3 + ".jpg\" id=\"zdj\" class=\"center\"/>";
    document.getElementById("ghotic3").innerHTML=file;
    $("#ghotic3").fadeIn(500);
    setTimeout("change3()", 5000);
    setTimeout("hide3()", 4500);
}
