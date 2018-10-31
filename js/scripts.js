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

//Space Object
function SpaceObject(filled, xCoord, yCoord){
    this.filled = filled,
    this.xCoord = xCoord,
    this.yCoord = yCoord

}

//Player Object 
function PlayerObject(name, difficulty, mark){
    this.name = name,
    this.difficulty = difficulty,
    this.mark = mark
}

//User Interface Logic
var gameObject = new GameObject();
var boardObject = new BoardObject();

$(document).ready(function() {
    $("#inputButton").click(function(event) {
        event.preventDefault();
        var playerOne = $("input#player1").val();
        var playerDifficulty = $("select#difficulty").val();
        var filled = false;
        var xCoord = 0;
        var yCoord = 0;

        var newPlayer = new PlayerObject(playerOne, playerDifficulty, "X");
        //debugger;
        for(var i =0; i < 9; i++){
            var space = new SpaceObject(filled, xCoord, yCoord)
            boardObject.addSpaces(space);
            boardObject.assignCoords(space);
            if (space.id <= 3) {
                $("#row1").append("<div id='"+ space.id + "' class='col col-md-4'>"+ space.xCoord +","+ space.yCoord+ "</div>");
            } else if (space.id <=6 ) {
                $("#row2").append("<div id='"+ space.id + "' class='col col-md-4'>"+ space.xCoord +","+ space.yCoord+ "</div>");
            } else {
                $("#row3").append("<div id='"+ space.id + "' class='col col-md-4'>"+ space.xCoord +","+ space.yCoord+ "</div>");
            };
        };

        gameObject.addPlayer(newPlayer);
        $("form").hide();
        
        console.log(boardObject);
        $(`"col`).click(function(){
            
            console.log(this.boardObject.space);
        });
    });
});

