var score=0;
// Enemies our Player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //declar x,y and speed
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;

//if eneme go out from canvas will return with deffrent speed

 if (this.x > 510) {
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 400);
    };

//if collisions will happen between Player and enemy game will reset

if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.x = 202;
        player.y = 405;
        score=0;
    };
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
     ctx.fillText("Score: " + score, 40, 70);
};



// Now write your own Player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y){
    this.x=x;
    this.y=y;

  this.player = 'images/char-boy.png';

};

Player.prototype.update = function(dt) {};

//this is for render the Player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};


// Allows the user to use the arrow keys to jump from tile to tile
Player.prototype.handleInput = function (keyPress) {

    // Enables user on left arrow key to move left on the x axis by 102
    // Also enables user not to go off the game tiles on the left side
    if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    };

    // Enables user on right arrow key to move right on the x axis by 102
    // Also enables user not to go off the game tiles on the right side
    if (keyPress == 'right' && this.x < 405) {
        this.x += 102;
    };

    // Enables user on up arrow key to move upwards on the y axis by 83
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    };

    // Enables user on down arrow key to move downwards on the y axis by 83
    // Also enables user not to go off the game tiles on the bottom side
    if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    };

    // Once the user reaches the top of the page; the water, the user is
    // Instantly reset to the starting position
    if (this.y < 0) {

        setTimeout(() => {
            this.x = 202;
            this.y = 405;
        }, 800)
score+=10;

    };
};
// Now instantiate your objects.
// Playerce all enemy objects in an array called allEnemies
// Playerce the Player object in a variable called Player



//all enemy var
var allEnemies =[];
 
//enemy lcation 
var enlocation=[63, 147, 230];

enlocation.forEach(function(loc){
    enemy=new Enemy(0,loc,200);
    allEnemies.push(enemy);
});

//Player object
var player=new Player(200,405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

