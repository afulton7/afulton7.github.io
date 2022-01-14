$(document).ready(function() {
    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// INITIALIZATION ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    var FPS = 60;
    
    var playerID = "#player1";
     playerID = "#player2";
    var playerX = 100;
    var playerY = 100;
    var playersX = 100;
    var playersY = 100;
    var playerVelocityX = 0;
    var playerVelocityY = 0;
    var speedX =  0;
    var speedY =  0;

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////// CORE LOGIC //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    setInterval(newFrame, 1000 / FPS); // execute newFrame() 60 times per second

	$(document).on('keydown', setPlayerVelocity && PlayerSpeed); // execute setPlayerVelocity() in response to keydown events
	$(document).on('keyup', stopPlayerVelocity);  // execute stopPlayerVelocity() in response to keydown events
    
    function newFrame() {
        playerX += playerVelocityX;
        playerY += playerVelocityY;
			
        $(playerID).css("left", playerX);
        $(playerID).css("top", playerY);
    }

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
	   
       function GameItems ($elementid) { 
           var gameItems = {};
           gameItems.id = ($elementid)
           gameItems.x =
           gameItems.y =
           return gameItems
       }

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// KEYBOARD FUNCTIONS //////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    /** 
    Key codes:
    - left: 37
    - up: 38
    - right: 39
    - down: 40
    - w: 87
    - a: 65
    - s: 83
    - d: 68
    - c: 67
    */
    
    function setPlayerVelocity(event, players) {
        if (event.which === 38 && event.which === 40) {
           playerVelocityY = -5; 
           speedY = -5 
        }
        if (event.which === 40) {
           playerVelocityY = 5; 
        }
        if (event.which === 37) {
           playerVelocityX = -5; 
        }
        if (event.which === 39) {
           playerVelocityX = 5; 
        }
    }

    // function PlayerSpeed(event) { 
    //     if (event.which === 87) { 
    //         speedY = -5
    //     }
    //     if (event.which === 65) { 
    //         speedX = 5
    //     }
    //     if (event.which === 83) { 
    //         speedY = -5
    //     }
    //     if (event.which === 68) { 
    //         speedX = 5
    //     }
    // }

    function stopPlayerVelocity(event) {
        if (event.which === 38 || event.which === 40) {
           playerVelocityY = 0; 
        }

        if (event.which === 37 || event.which === 39) {
           playerVelocityX = 0; 
        }
    }

}); // DO NOT DELETE










