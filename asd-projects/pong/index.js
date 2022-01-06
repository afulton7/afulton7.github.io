/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Variables for the KeyPress
  var KEYS = {
    "W" : 87,
    "ArrowUp": 38,
    "S": 83,
    "ArrowDown": 40,
  }

  // Game Item Objects

var leftPaddle = GameObject("#leftPaddle");
var rightPaddle = GameObject("#rightPaddle");
var pongBall = GameObject("#ball");
var randomNum = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  startBall();
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    rightPaddle.y = rightPaddle.y + rightPaddle.speedY
    $(rightPaddle.id).css("top", rightPaddle.y);
    leftPaddle.y = leftPaddle.y + leftPaddle.speedY
    $(leftPaddle.id).css("top",leftPaddle.y)
  }
  
  /* 
  Called in response to events.
  */

  //  This function handles the paddles moving up and down when the key is pressed
  function handleKeyDown(event) {
  //  Move the left paddle with the W key 
    if (event.which === KEYS.W) {
       leftPaddle.speedY = -5
    }
    // Move the right paddle with the up arrow 
    else if (event.which === KEYS.ArrowUp) {
      rightPaddle.speedY = -5

    }
    // Move the left paddle with the S key 
    else if (event.which === KEYS.S) {
      leftPaddle.speedY = 5
    }
    // Move the right paddle with the down arrow
    else if (event.which === KEYS.ArrowDown) {
     rightPaddle.speedY = 5
    }
    console.log(rightPaddle);
  }

  // This function helps stop the right,and left paddle stop moving when key released
  function handleKeyUp(event) { 
    // stop moving the W key when released
    if (event.which === KEYS.W) {
    leftPaddle.speedY = 0
    }
    // stop moving the Up arrow key when released
    else if (event.which === KEYS.ArrowUp) {
      rightPaddle.speedY = 0
    }
    //stop moving the S key when released
    else if (event.which === KEYS.S) {
      leftPaddle.speedY = 0
    }
    // stop moving the Down arrow key when released 
    else if (event.which === KEYS.ArrowDown) {
      rightPaddle.speedY = 0
    }
  }       



  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  // factory function for the paddles, and pong ball. also give them their traits.
  function GameObject ($elementid) {
    var gameItems = {};
    gameItems.id = $elementid; 
    gameItems.x = parseFloat($($elementid).css("left"));
    gameItems.y =  parseFloat($($elementid).css("top"));
    gameItems.width = $($elementid).width();
    gameItems.height = $($elementid).height();
    gameItems.speedX = 0;
    gameItems.speedY = 0;
    return gameItems;
  }

  function startBall() { 
    pongBall.speedX = randomNum;
    pongBall.speedY= Math.random();
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
