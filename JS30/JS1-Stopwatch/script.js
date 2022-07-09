window.onload = function(){
    var sec = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(starTimer);
    }
    buttonStop.onclick = function(){
        clearInterval(Interval);
    }
    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens='00';
        sec='00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = sec;
    }

    function starTimer(){
        tens++;
        if(tens<9){
            appendTens.innerHTML = '0'+tens;
        }
        if(tens>9){
            appendTens.innerHTML = tens;
        }
        if(tens>99){
            sec++;
            appendSeconds.innerHTML = '0'+sec;
            tens=0;
            appendTens.innerHTML='0'+0;
        }
        if(sec>9){
            appendSeconds.innerHTML = sec;
        }
    }
}