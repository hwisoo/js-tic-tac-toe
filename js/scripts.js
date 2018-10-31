//Business Logic


//Game Object
function GameObject() {
    this.players = [],
    this.currentId = 0
}

GameObject.prototype.addPlayer = function(player) {
    player.id = this.assignId();
    this.players.push(player);
}

GameObject.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

//Board Object 
function BoardObject(){
    this.spaces = [],
    this.currentId = 0
}

BoardObject.prototype.addSpaces = function(space) {
    space.id = this.assignId();
    this.spaces.push(space);
}

BoardObject.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

BoardObject.prototype.assignCoords = function(space){
    if(space.id % 3 == 0){
        space.xCoord = 3;
    } else if (space.id % 2 == 0 && space.id != 4 || space.id === 5){
        space.xCoord = 2;
    } else {
        space.xCoord = 1;
    }

    if(space.id > 6) {
        space.yCoord = 3;
    } else if(space.id >3) {
        space.yCoord = 2;
    } else 
        space.yCoord =1
    };
// BoardObject.prototype.clickFill = function(space){
//    space.filled = true;
// }
//Space Object
function SpaceObject(filled, xCoord, yCoord){
    this.filled = filled,
    this.xCoord = xCoord,
    this.yCoord = yCoord

}

//Player Object 
function PlayerObject(name, difficulty, marker){
    this.name = name,
    this.difficulty = difficulty,
    this.marker = marker
}

//Click Logic





//User Interface Logic
var gameObject = new GameObject();
var boardObject = new BoardObject();

$(document).ready(function() {
    counter = 1;
    $("div.clickable").click(function(e){
        var click = e.target;
       
        console.log(click.id);
        if(click && counter%2 ==0 && $(`div#${click.id}`).hasClass("clickable") === true) {
            
            $(`div#${click.id}`).text("X");
            $(`div#${click.id}`).removeClass("clickable");
            
        } else if(click && counter%2 !=0 && $(`div#${click.id}`).hasClass("clickable") === true){
            
            $(`div#${click.id}`).text("O");
            $(`div#${click.id}`).removeClass("clickable");
        }
        counter++;

    });
   
    $("#inputButton").click(function(event) {
        event.preventDefault();
        var playerOne = $("input#player1").val();
        var playerDifficulty = $("select#difficulty").val();
        var filled = false;
        var xCoord = 0;
        var yCoord = 0;
        var marker = "";
        var newPlayer = new PlayerObject(playerOne, playerDifficulty, marker);
        gameObject.addPlayer(newPlayer);
        
        //debugger;
        for(var i =0; i < 9; i++){
            var space = new SpaceObject(filled, xCoord, yCoord)
            boardObject.addSpaces(space);
            boardObject.assignCoords(space);
            // if (space.id <= 3) {
            //     $("#row1").append("<div id='"+ space.id + "' class='col col-md-4'></div>");
                
            // } else if (space.id <=6 ) {
            //     $("#row2").append("<div id='"+ space.id + "' class='col col-md-4'></div>");
                    
                               
            // } else {
            //     $("#row3").append("<div id='"+ space.id + "' class='col col-md-4'></div>");         
            // };
        };
        

   
        $("form").hide();
        
        console.log(boardObject);
        
        
    });
    
});

