document.addEventListener("keydown", changeSize);

function changeSize() {
    var e = event.keyCode;
    var bSize = document.getElementById("balloonImg").style.fontSize;
    if (e == 73){
        console.log("you pressed i");
        if (parseInt(bSize)>60){
            document.getElementById("balloonImg").innerHTML = "💥";
            document.removeEventListener('keyup', changeSize);
        }
        else{
            if(bSize==""){
                bSize=30;
            }
            var newBSize = parseInt(bSize) + 5;
            console.log("increasing size to"+newBSize);
            document.getElementById("balloonImg").style.fontSize=newBSize.toString()+"px";
            console.log(newBSize);
        }
        
    }
    else if (e == 68){
        if(parseInt(bSize)==0){
            document.getElementById("balloonImg").innerHTML = "Done";
            document.removeEventListener('keyup', changeSize);
        }
        newBSize = parseInt(bSize) -10;
        document.getElementById("balloonImg").style.fontSize = newBSize.toString() +"px";
    }

}