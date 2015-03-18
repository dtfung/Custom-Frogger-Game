##frontend-nanodegree-arcade-game

###Basic Functionality

#####Run the game using index.html.

In this game you have a Player and Enemies (Bugs) and a Collectible (gem). The goal of the player is to reach the water, without colliding into any one of the enemies or grab the gem. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.  The player can also win if they come into contact with the gem.

###Notes

The game was built using object oriented javascript and html5 Canvas.  An enemy function acts as the pseudoclassical superclass upon which two subclasses are built (player and gem).  Html5 was used to draw the the images on the screen and set the layout of the background.  Below you will find all the features added to make the game work.

####Enemy function loaded

The image used to represent the enemy is images/enemy-bug.png.

This function acts as the superclass for game functionality which revolves around the movement and location of the enemy, player and gem objects on the screen.

####Set Enemy Initial Position

Enemy objects placed in an array:
```javascript
var allEnemies = [];
allEnemies[0] = new Enemy((0 - Math.random() * 1000), 60);
allEnemies[1] = new Enemy((0 - Math.random() * 500), 140);
allEnemies[2] = new Enemy((0 - Math.random() * 100), 230);
 ```
 Three enemies were created with fixed y coordinates but their x coordinates were randomized.  Each enemy was also adjusted to reappear at different times.

####Enemy speed
```javascript
this.x = this.x + 350 * dt;  //This was used to set the speed of the enemy.
```

The speed could be manually adjusted by editing the number, 350.  Enter a number greater than 350 to increase speed or enter a smaller number to reduce speed.

####Enemy location update

Defined in an if statement:
```javascript
Enemy.prototype.update = function() {}
```
Once the enemy touches the right side of the canvas, its position is reset to a random position using the math.random() method.

####Collision with player

Defined in:
```javascript
Enemy.prototype.update = function(dt) {}.
```
```javascript
 var collision = [];
    collision[0] = player.x < this.x && player.x + 50 > this.x && player.y < this.y && player.y + 50 > this.y; //top left
    collision[1] = player.x < this.x && player.x + 50 > this.x && player.y > this.y && player.y < this.y + 50; //bottom left
    collision[2] = player.x > this.x && player.x < this.x + 50 && player.y < this.y && player.y + 50 > this.y; //top right
    collision[3] = player.x > this.x && player.x < this.x + 50 && player.y > this.y && player.y < this.y + 50; //bottom right
    // outlines all the possible ways the player and enemy objects could collide.
```

An if function immediately follows, which defines what happens when the player and enemy objects collide.  An alert message appears, the game is lost and starts over.  The player is reset to its initial position.

if (collision[0] || collision[1] || collision[2] || collision[3]) {
        alert('Game Over!');
        player.x = 200;
        player.y = 405;
    }

Here is a video I used to see how this was achieved:  https://www.youtube.com/watch?v=9h0ITOuX2Aw.

####The player function

This was created as a subclass of the enemy class since they share similar properties.
This link provides a good introduction to pseudoclassical instantiation and subclassing:
http://www.willvillanueva.com/an-introduction-to-pseudoclassical-instantiation-patterns-and-subclassing-in-javascript/

####Player image & location

player image used : images/char-boy.png.
player location was fixed and defined in:
```javascript
var = player;
```

####Update player location
```javascript
Player.prototype.render = function() {}
```

####Player Rendered

Similar to the one for the enemy & defined in:
```javascript
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
```

####The handleInput method

Although a bit tricky, I used this link to help me with this:
http://discussions.udacity.com/t/player-handleinput-and-update-methods/4666

The player is able to use the arrow keys to move left, right, up or down.
Also, the boundaries of the game were also defined here.

####Player collision with water

An if statement was used to implement this feature.  If the player reaches the water, the game is won and it starts over with the player being reset to its initial position.
```javascript
Player.prototype.update = function() {
    //if player reaches the water, the player wins, an alert message appears and the player moves back to initial position
    if (this.y <= 50) {
        this.x = 200;
        this.y = 405;
        alert('YOU WON!');
    }
};
```




