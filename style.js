let count = 0;

const count1 = document.getElementById('count')

function clickCounter(){
    count = count + 1
    count1.innerHTML = count
}

function myFunction() {
    let x = document.getElementById("myAudio").duration;
}

const myAudio2 = document.getElementById("myAudio2");

const myAudio = document.getElementById("myAudio");

myAudio2.addEventListener("click",function(){
    if (myAudio.paused){
        myAudio.play()
    } else {
        myAudio.pause()
    }
})

myAudio4.addEventListener("click",function(){
    if (myAudio3.paused){
        myAudio3.play()
    } else {
        myAudio3.pause()
    }
})

