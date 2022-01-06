/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Preventing Box to leave the bounds of the board
  // Created two variables width and height to set the board id to find the width and height of the board

  var width = $("#board").width()
  var height = $("#board").height()
  var circleWidth = $("#gameItem").width()
  var circleHeight = $("#gameItem").height()


  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var Key = {
    "LEFT": 37,
    "UP": 38,
    "DOWN": 40,
    "RIGHT": 39,
  }

  // Game Item Objects
  var gameItem;
  var speedX = 0
  var speedY = 0
  var positionX = 0
  var positionY = 0

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    outOfBounds(); // 
    redrawGameItem();
  }

  /* 
  Called in response to events.
  */
  // Arrow key down is 40 
  //  Arrow key up is 38
  // Arrow key left is 37
  // Arrow key right is 39

  function handleKeyDown(event) {
    //console.log(event.which);
    //  Move when moving left
    if (event.which === Key.LEFT) {
      speedX = -5;

    }
    //  Move when moving right 
    else if (event.which === Key.RIGHT) {
      speedX = 5;

    }
    //  Move when moving up
    else if (event.which === Key.UP) {
      speedY = -5;

    }
    //  Move when moving down 
    else if (event.which === Key.DOWN) {
      speedY = 5;

    }
  }

  // This function helps stop the circle from moving when key released.
  function handleKeyUp(event) {

    // Stop moving when I release the left key  
    if (event.which === Key.LEFT) {
      speedX = 0;

    }
    // Stop moving when I release the right key
    else if (event.which === Key.RIGHT) {
      speedX = 0;

    }
    // Stop moving when I release the up key
    else if (event.which === Key.UP) {
      speedY = 0;

    }
    // Stop moving when I release the down key 
    else if (event.which === Key.DOWN) {
      speedY = 0;

    }
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // update the position of the box along the x-axis
  function repositionGameItem() {
    positionX += speedX;
    positionY += speedY;
  }
  // draw the box in the new location, positionX pixels away from the "left"
  function redrawGameItem() {
    $("#gameItem").css("top", positionY);
    $("#gameItem").css("left", positionX);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function outOfBounds() {
    //  if ball moves past the screen right go back left

    if (positionX > width - circleWidth) {
      // Don't want to set equal to zero ( because this resets it.), but want to set back inbounds next to the width.
      positionX = width - circleWidth; 
    }
    // if the balls go up 
    if (positionX < 0) {
      positionX = 0;
    }
    // if the balls go up  I want it to stop
    if (positionY < 0) {
      positionY = 0;
    }
    //
    if (positionY > height - circleHeight) {
      positionY = height - circleHeight; 

    }
  }
}

