
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(".pre").click(function() {
  if (!started) {
    nextSequence();
    started = true;
    $("#level-title").text("Level " + level);
    $(".pre").css("display", "none");

  }
});

$(document).keydown(function() {
  if (!started) {
    
    nextSequence();
    started = true;
    $("#level-title").text("Level " + level);
    $(".pre").css("display", "none");

  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
          var i=0;
          var y=0;
          $("#level-title").text("Level " + level);
           var myInterval=setInterval(function(){animatePress(gamePattern[y]);
            playSound(gamePattern[y]);
            y++;
            if(y===gamePattern.length){
              setTimeout( nextSequence,500);
              clearInterval(myInterval);
            }
                        },500) ;
        }
        
          
      }
     else {
      playSound("wrong");
      $("body").addClass("game-over");
      $(".pre").css("display", "block");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
 
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(1000).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
