let min = 00
let sec = 00 
let diol = 00 

let timeDiol =document.getElementById("diol")
let timeSec = document.getElementById("sec")
let timeMin = document.getElementById("min")
let starButton = document.getElementById('start')

function startTime(){
    diol++
    if(diol > 9){
        timeDiol.innerHTML = "0" + diol
    }
    else{
        timeDiol.innerHTML = diol
    }
function time() {
    
}


}

starButton.addEventListener('click',()=> {setInterval(startTime())} )