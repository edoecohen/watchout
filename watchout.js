var gameOptions = {
  width: 800,
  height: 600,
  nEnemies: 20
}

var svg = d3.select('body').append('svg')
  .attr('width', gameOptions.width).attr('height', gameOptions.height);

var axes = {
  x: d3.scale.linear().domain([0,100]).range([0, gameOptions.width]),
  y: d3.scale.linear().domain([0,100]).range([0, gameOptions.height])
}

var enemies_data = _.range(0, gameOptions.nEnemies).map( function(i){
  var obj = {
    id: i,
    x: Math.random()*100,
    y: Math.random()*100
  }
  return obj;
});// [1, 2, 3]


// Create the enemies and their movement
var enemies = svg.selectAll('image.enemy').data(enemies_data, function(d) {return d.id});
enemies.enter().append('image')
  .attr('class','enemy')
  .attr('xlink:href','asteroid.png')
  .attr('x', function(enemy) { return axes.x(enemy.x)})
  .attr('y', function(enemy) { return axes.y(enemy.y)})
  .attr('height', 50)
  .attr('width', 50)

  // Make sure they don't go out of bounds
  // Extra Credit = add more enemies as a sliding scale
  // of difficulty

// Create our player and the functionality around moving

// Detect collision with enemy
  // Reset score
  // Flash the screen upon collision

// Keep track of high score
  // If our score > high score...

