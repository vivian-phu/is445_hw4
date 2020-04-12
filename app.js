document.addEventListener("keydown", changeSize);

function changeSize() {
    var e = event.keyCode;
    var balloonImgPX = 30;
    if (e == 73){
        balloonImgPX = document.getElementById("balloonImg").style.fontSize = (balloonImgPX + 5) +"px";
    }
    else if (e == 68){
        balloonImgPX = document.getElementById("balloonImg").style.fontSize = (balloonImgPX - 10) +"px";
    }
}