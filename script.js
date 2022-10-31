var body = document.querySelector("body");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var h3 = document.querySelector("h3");
var random = document.getElementById("button");



setBackground();

function setBackground() {
    body.style.background =  
    "linear-gradient(to right, " 
    + color1.value
    +", " 
    + color2.value 
    + ")";
    h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackground);

color2.addEventListener("input", setBackground);

function randomrgb(){
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    return "rgb(" + red + "," + green +"," + blue + ")"; 
}

function randombackground() {
    var colorrandom1 = randomrgb();
    var colorrandom2 = randomrgb();
   
    body.style.background =  
    "linear-gradient(to right, " 
    + colorrandom1
    +", " 
    + colorrandom2
    + ")";
    h3.textContent = body.style.background + ";";
}

random.addEventListener("click", randombackground);

    
