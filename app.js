document.addEventListener("keydown", changeSize);

function changeSize() {
    var e = event.keyCode;
    var bSize = document.getElementById("balloonImg").style.fontSize;
    if (e == 73){
        if (parseInt(bSize)>60){
            document.getElementById("balloonImg").innerHTML = "💥";
            document.removeEventListener('keydown', changeSize);
        }
        else{
            if(bSize==""){
                bSize=30;
            }
            var inflateSize = parseInt(bSize) + 5;
            document.getElementById("balloonImg").style.fontSize=inflateSize.toString()+"px";
        }
        
    }
    else if (e == 68){
        console.log("d was pressed");
        if(parseInt(bSize)<=5){
            document.getElementById("balloonImg").style.fontSize=30+"px";
            document.getElementById("balloonImg").innerHTML = "Done";
            document.removeEventListener('keydown', changeSize);
        }
        else{
            if(bSize==""){
                bSize=30;
            }
            var deflateSize = parseInt(bSize) - 10;
            document.getElementById("balloonImg").style.fontSize = deflateSize.toString() +"px";
        }        
    }
}