// Enemies our player must avoid.  The Enemy object also acts as a superclass.
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};
// Update the enemy's position.
Enemy.prototype.update = function(dt) {
    // Parameter: dt, a time delta between ticks
    this.x = this.x + 350 * dt;
    // Loops the enemy instances back to a random initial position.  Enemy instances are also randomly generated.
    if (this.x > 505) {
        this.x = 0 - (Math.random() * 500);
    }
    // An array containing all possible collisions between Enemy and Player instances
    var collision = [];
    collision[0] = player.x < this.x && player.x + 50 > this.x && player.y < this.y && player.y + 50 > this.y; //top left
    collision[1] = player.x < this.x && player.x + 50 > this.x && player.y > this.y && player.y < this.y + 50; //bottom left
    collision[2] = player.x > this.x && player.x < this.x + 50 && player.y < this.y && player.y + 50 > this.y; //top right
    collision[3] = player.x > this.x && player.x < this.x + 50 && player.y > this.y && player.y < this.y + 50; //bottom right
    // If collision is true between Enemy and Player, an alert appears and the game starts over.
    if (collision[0] || collision[1] || collision[2] || collision[3]) {
        alert('Game Over!');
        player.x = 200;
        player.y = 405;
    }
};
// Draw the enemy on the screen, required method for game.
var ctx;
var Resources;
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Player subclass
var Player = function(x, y) {
    Enemy.call(this, x, y);
    this.sprite = 'images/char-boy.png';
};
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;
Player.prototype.update = function() {
    //if player reaches the water, the player wins, an alert message appears and the player moves back to initial position
    if (this.y <= 50) {
        this.x = 200;
        this.y = 405;
        alert('YOU WON!');
    }
};
// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Gem Subclass is an functionality that adds a gem to the game.  It is also a subclass of Enemy.
var Gem = function(x, y) {
    Enemy.call(this, x, y);
    this.sprite = 'images/Key.png';
};
Gem.prototype = Object.create(Enemy.prototype);
Gem.prototype.constructor = Gem;
//Updates the gem's position.  It operates similarly to the Enemy instances, but its speed is different.
Gem.prototype.update = function(dt) {
    this.x = this.x + 100 * dt;
    //The gem resets back to its original position once it hits the right edge of the canvas.
    if (this.x > 505) {
        this.x = 0 - (Math.random() * 1000);
    }
    //An array containing all possible collisions between the Player and the gem.
    var collect = [];
    collect[0] = player.x < this.x && player.x + 50 > this.x && player.y < this.y && player.y + 50 > this.y; //top left
    collect[1] = player.x < this.x && player.x + 50 > this.x && player.y > this.y && player.y < this.y + 50; //bottom left
    collect[2] = player.x > this.x && player.x < this.x + 50 && player.y < this.y && player.y + 50 > this.y; //top right
    collect[3] = player.x > this.x && player.x < this.x + 50 && player.y > this.y && player.y < this.y + 50; // bottom right
    // If player gets the gem, the player wins, a message appears and the game starts over.
    if (collect[0] || collect[1] || collect[2] || collect[3]) {
        alert('YOU WON!');
        player.x = 200;
        player.y = 405;
    }
};
// Draw the gem on the screen
Gem.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Processes keyboard input & also confines player to canvas.
Player.prototype.handleInput = function(keys) {
    switch (keys) {
        case 'left':
            if (this.x > 0) {
                this.x = this.x - 101;
            }
            break;
        case 'right':
            if (this.x + 101 < 404) {
                this.x = this.x + 100;
            }
            break;
        case 'up':
            if (this.y > 10) {
                this.y = this.y - 85;
            }
            break;
        case 'down':
            if (this.y + 171 < 505) {
                this.y = this.y + 85;
            }
            break;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies[0] = new Enemy((0 - Math.random() * 1000), 60);
allEnemies[1] = new Enemy((0 - Math.random() * 500), 140);
allEnemies[2] = new Enemy((0 - Math.random() * 100), 230);
// Place the player object in a variable called player & set the initial position
var player = new Player(200, 405);
// All gem objects in an array called treasure.  Addtional gems added but are currently deactivated.
var treasure = [];
treasure[0] = new Gem((Math.random() * 100), 60);
//treasure[1] = new Golden((Math.random() * 100), 140);
//treasure[2] = new Golden((Math.random() * 100), 230);

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
