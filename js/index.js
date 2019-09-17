// variable decleration 
const audio = document.querySelector(".box:nth-child(2) .img .sound");
const bellIcon = document.querySelector(".box:nth-child(2) .img i.fa-bell");
const icon = document.querySelectorAll("i")[0]

// functions 
function toggleReaction(){
    icon.addEventListener("mouseover", function(){
        this.className = "fas fa-smile-beam";
        this.style.color = "white"
    })
    icon.addEventListener("mouseleave", function(){
        this.className = "fas fa-angry";      
    })
}
toggleReaction();
function bellRing(){
    /* bellIcon.addEventListener("click", function(){
        if(audio.pause){
            audio.play()
        }else if(audio.play){
            audio.pause();
            audio.currentTime=0;
        }
    })*/
    bellIcon.addEventListener("mouseover", function(){
        audio.play()
    })
    bellIcon.addEventListener("mouseleave", function(){
        audio.pause();
        audio.currentTime=0;      
    })
}
bellRing();