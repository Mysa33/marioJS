/*
Mario JS
Author : Sami Tlili
*/
/*Mario go left*/
function marioLeft(){ $('#mariO').stop().animate({left:'-=30'});}
/*Mario go right*/  
function marioRight(){ $('#mariO').stop().animate({left:'+=30'});}
/*Mario jump*/  
function marioJump(){
    $('#mariO').stop().animate({top:'-=30'});
    var jumpSound = "<audio id='jumpMarioAudio' autoplay><source src='sounds/saut.wav' type='audio/mpeg'></audio> ";//Jump sound
    $('#jumpMario').append(jumpSound);
    //Remove Jump Audio
    function delMarioJumpSound(){ $('#jumpMarioAudio').remove();}
    setTimeout(delMarioJumpSound, 550);
}
/*Mario go down*/ 
function marioDawn(){$('#mariO').animate({top:'+=30'});}
/*Mario flip left*/ 
function marioFlipFunc(){ $('#mariO').addClass("marioFlip");}
/*Mario flip right*/ 
function marioFoward(){ $('#mariO').removeClass("marioFlip");}
/*Level background foward*/
function backgroundTransitionRight(){
    $('.bgClass').stop().animate({backgroundPositionX:'-=50'});
    $('.coinOne').stop().animate({left:'-=150'});
}
/*Level background back*/
function backgroundTransitionLeft(){
    $('.bgClass, .coinOne').stop().animate({backgroundPositionX:'+=50'});
    $('.coinOne').stop().animate({left:'+=150'});
}
/*Get Mario position*/
function getMarioPosition(){
    var p = $( "#mariO" );
    var position = p.position();
    var positionLeft = position.left; 
    //Max Bouttom 
    var positionTop = position.top;
    //ConsoleLog Dev
    console.log("Mario positionLeft", positionLeft);
    console.log("Mario positionTop", positionTop);
    if(positionTop>540){p.css( "top", "540px" );}
    /*Mario left border*/
    if(positionLeft < 2){p.css( "left", "15px" );}
    /*Mario right border*/
    if(positionLeft > 850 ){
        alert("right bounce");
        p.css( "left", "- 15px" );
    }
}
//Get Level postion/ Responsive
function getLevelPosition(){
    var p = $( ".bgClass" );
    var position = p.position();
    var positionLeft = position.left; 
    var positionRight = position.right; 
    var positionTop = position.top;
    //ConsoleLog Dev
    console.log("BG positionLeft = ", positionLeft);
}
//Get coin postion on load
function getCoinPosition(){
    var p = $( ".coinOne" );
    var position = p.position();
    var positionLeftCoin = position.left; 
    var positionRight = position.right; 
    var positionTop = position.top;
    //ConsoleLog Dev
    console.log("Coin positionLeft = ",positionLeftCoin);
    //CoinOne
    if(positionLeftCoin < 330){
        p.css( "display", "none" );
        var coinSound = "<audio id='coinMarioAudio' autoplay><source src='sounds/piece.wav' type='audio/mpeg'></audio> ";//Coin sound
        $('#coinMario').append(coinSound);
        event.stopPropagation();
    }
    //Delete coin sound
    if (positionLeftCoin == 0){
        //Remove Jump Audio
        function delMarioJumpSound(){ $('#coinMarioAudio').remove();}
        setTimeout(delMarioJumpSound, 550);
    $("#coinMario").remove(); 
    }
    
}
// Get Elements Positions
$(document).ready(function() { getLevelPosition(); getMarioPosition(); getCoinPosition(); });
// Get Keydown
$(document).keydown(function(e){
    //Get Mario Position on keydown
    getMarioPosition(); 
    //Get coin Position on keydown
    getCoinPosition();
    //Mario Gameplay
    switch (e.which){
        case 81: // Left
            marioFlipFunc();  marioLeft(); backgroundTransitionLeft(); break;
        case 90: // Jump
            marioJump(); marioDawn(); break;
        case 68: // Right
            marioFoward(); marioRight(); backgroundTransitionRight(); break;
    }
}); 
