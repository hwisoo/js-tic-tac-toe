//Business Logic


// //Game Object
// function GameObject() {
//     this.players = [],
//     this.currentId = 0
// }

// GameObject.prototype.addPlayer = function(player) {
//     player.id = this.assignId();
//     this.players.push(player);
// }

// GameObject.prototype.assignId = function() {
//     this.currentId += 1;
//     return this.currentId;
// }

//Board Object 
function BoardObject(){
    this.spaces = [],
    this.currentId = 0,
    this.players = []
}

BoardObject.prototype.addPlayer = function(player) {
    this.players.push(player)
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
function SpaceObject(filled, current, xCoord, yCoord){
    this.filled = filled,
    this.current = current,
    this.xCoord = xCoord,
    this.yCoord = yCoord

}
//Player Object 
function PlayerObject(name, difficulty, marker){
    this.name = name,
    this.difficulty = difficulty,
    this.marker = marker
}

//Win Logic

BoardObject.prototype.updateSpace = function(clickid) {
    //debugger;

    if (clickid) {

        var divClick = `${clickid}`;
        var x = parseInt((clickid));
        var node = document.getElementById(divClick)
        boardObject.spaces[x - 1].filled = true;
        if (node.textContent === "X") {
            boardObject.spaces[x-1].current = "X";
        } else if (node.textContent === "O") {
            boardObject.spaces[x-1].current = "O";
        }
    };
}

BoardObject.prototype.winCheck = function(playerOne, playerTwo) {
    //debugger;
    if (boardObject.spaces[0].current === "X" && boardObject.spaces[1].current === "X" && boardObject.spaces[2].current === "X") {
        $("#winMessage").text(boardObject.players[0].name + " Wins!");
    } else if (boardObject.spaces[3].current === "X" && boardObject.spaces[4].current === "X" && boardObject.spaces[5].current === "X") {
        $("#winMessage").text(boardObject.players[0].name + " Wins!");
    } else if (boardObject.spaces[6].current === "X" && boardObject.spaces[7].current === "X" && boardObject.spaces[8].current === "X") {
        $("#winMessage").text(boardObject.players[0].name + " Wins!");
    } else if (boardObject.spaces[0].current === "X" && boardObject.spaces[3].current === "X" && boardObject.spaces[6].current === "X") {
        $("#winMessage").text(boardObject.players[0].name + " Wins!");
    } else if (boardObject.spaces[1].current === "X" && boardObject.spaces[4].current === "X" && boardObject.spaces[7].current === "X") {
        $("#winMessage").text(boardObject.players[0].name + " Wins!");
    } else if (boardObject.spaces[2].current === "X" && boardObject.spaces[5].current === "X" && boardObject.spaces[8].current === "X") {
        $("#winMessage").text(boardObject.players[0].name + " Wins!");
    } else if (boardObject.spaces[0].current === "X" && boardObject.spaces[4].current === "X" && boardObject.spaces[8].current === "X") {
        $("#winMessage").text(boardObject.players[0].name + " Wins!");
    } else if (boardObject.spaces[2].current === "X" && boardObject.spaces[4].current === "X" && boardObject.spaces[6].current === "X") {
        $("#winMessage").text(boardObject.players[0].name + " Wins!");
    } else if (boardObject.spaces[0].current === "O" && boardObject.spaces[1].current === "O" && boardObject.spaces[2].current === "O") {
        $("#winMessage").text(boardObject.players[1].name + " Wins!");
    } else if (boardObject.spaces[3].current === "O" && boardObject.spaces[4].current === "O" && boardObject.spaces[5].current === "O") {
        $("#winMessage").text(boardObject.players[1].name + " Wins!");
    } else if (boardObject.spaces[6].current === "O" && boardObject.spaces[7].current === "O" && boardObject.spaces[8].current === "O") {
        $("#winMessage").text(boardObject.players[1].name + " Wins!");
    } else if (boardObject.spaces[0].current === "O" && boardObject.spaces[3].current === "O" && boardObject.spaces[6].current === "O") {
        $("#winMessage").text(boardObject.players[1].name + " Wins!");
    } else if (boardObject.spaces[1].current === "O" && boardObject.spaces[4].current === "O" && boardObject.spaces[7].current === "O") {
        $("#winMessage").text(boardObject.players[1].name + " Wins!");
    } else if (boardObject.spaces[2].current === "O" && boardObject.spaces[5].current === "O" && boardObject.spaces[8].current === "O") {
        $("#winMessage").text(boardObject.players[1].name + " Wins!");
    } else if (boardObject.spaces[0].current === "O" && boardObject.spaces[4].current === "O" && boardObject.spaces[8].current === "O") {
        $("#winMessage").text(boardObject.players[1].name + " Wins!");
    } else if (boardObject.spaces[2].current === "O" && boardObject.spaces[4].current === "O" && boardObject.spaces[6].current === "O") {
        $("#winMessage").text(boardObject.players[1].name + " Wins!");
    };
}



//User Interface Logic
// var gameObject = new GameObject();
var boardObject = new BoardObject();

$(document).ready(function() {

    $("#inputButton").click(function(event) {
        event.preventDefault();
        var playerOneName = $("input#player1").val();
        var playerTwoName = $("input#player2").val();
        var playerDifficulty = $("select#difficulty").val();
        var filled = false;
        var current = "";
        var xCoord = 0;
        var yCoord = 0;
        var marker = "";
        
        var newPlayerOne = new PlayerObject(playerOneName, playerDifficulty, marker);
        boardObject.addPlayer(newPlayerOne);
        var newPlayerTwo = new PlayerObject(playerTwoName, playerDifficulty, marker);
        boardObject.addPlayer(newPlayerTwo);
        
        //debugger;
        for(var i =0; i < 9; i++){
            var space = new SpaceObject(filled, current, xCoord, yCoord)
            boardObject.addSpaces(space);
            boardObject.assignCoords(space);
        };
       
        $("form").hide();
        $("#board").show();
        console.log(boardObject);
    
    });

    counter = 0;
    
    $("div.clickable").click(function(e){
        var click = e.target;
        

        console.log(click.id);
        if ($(`div#${click.id}`).hasClass("clickable") === true) {
            if(click && counter%2 ==0 ) {
                
                $(`div#${click.id}`).text("X");
                $(`div#${click.id}`).removeClass("clickable");
                counter++;
                boardObject.updateSpace(click.id);
                boardObject.winCheck();
                
            } else if(click && counter%2 !=0 ){
                
                $(`div#${click.id}`).text("O");
                $(`div#${click.id}`).removeClass("clickable");
                counter++;
                boardObject.updateSpace(click.id);
                boardObject.winCheck();
            }
        };
        
    });
    
});

