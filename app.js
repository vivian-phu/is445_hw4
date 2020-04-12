document.getElementById("balloonImg").addEventListener("keydown", changeSize);
console.log("js linked");
function changeSize() {
    console.log("function is called");
    var e = event.keyCode;
    console.log("function runs")
    if (e == 73){
        alert("yes")
        //document.getElementById("balloonImg").style.fontSize +=5;
    }
}