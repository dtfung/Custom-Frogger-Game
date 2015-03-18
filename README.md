##frontend-nanodegree-arcade-game

###Enemy function loaded

####Set Enemy Initial Position

Enemy objects placed in an array called allEnemies[].  Three enemies were created with fixed y coordinates but their x coordinates were randomized.  Each enemy was also adjusted to reappear at different times.

####Enemy speed

This was defined in Enemy.prototype.update = function(dt) {}

####Enemy location update
Defined in an if statement in the Enemy.prototype.update = function() {}.  Once the enemy touches the right side of the canvas, its position is reset.

####Collision with player

Defined in the Enemy.prototype.update = function(dt) {}.  An array was created called collision[] which outlined all the possible ways the player and enemy objects could collide.

Here is a video I used to see how this was achieved:  https://www.youtube.com/watch?v=9h0ITOuX2Aw.

####The player function

This was created as a subclass of the enemy class since they share similar properties.
This link provides a good introduction to pseudoclassical instantiation and subclassing:
http://www.willvillanueva.com/an-introduction-to-pseudoclassical-instantiation-patterns-and-subclassing-in-javascript/

####Player image & location

player image used : images/char-boy.png
player location was fixed and defined in var = player;

####Update player location

Defined in Player.prototype.update = function(dt) {}.

####Player Rendered

Similar to the one for the enemy & defined in Player.prototype.render = function() {}

####The handleInput method

Although a bit tricky, I used this link to help me with this:
http://discussions.udacity.com/t/player-handleinput-and-update-methods/4666

The player is able to use the arrow keys to move left, right, up or down.
Also, the boundaries of the game were also defined here.

####Player collision with water

Defined in Player.prototype.update = function(dt) {}.  An if statement was used to implement this feature.




