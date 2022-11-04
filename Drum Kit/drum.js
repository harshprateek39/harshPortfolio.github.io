// for click
var i =0;
for(i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function() 
{
    var x=this.innerHTML;
    playsound(x);
    playanimation(x);})}
// for KEY PRESS
document.addEventListener("keydown",function(event){
        var y=(event.key);
        playsound(y);
        playanimation(y);
      });
// function for playing sound
function playsound(key){
            switch (key) {
                case "w":
                    var audio=new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
            
                case "a":
                    var audio=new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;
             case "s":
               
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                    break;
             case "d":
                
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                    break;
             case "j":
               
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                    break;
             case "k":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                    break;
             case "l":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                    break;
                   
                default:
                    break;
            }

        }
        function playanimation(x){
            var y=document.querySelector("." + x);
            y.classList.add("pressed");
            setTimeout(function(){ y.classList.remove("pressed");},100);
        }
    

    
