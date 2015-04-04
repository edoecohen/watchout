var gameOptions = {
  width: 1200,
  height: 800,
  nEnemies: 20,
  padding: 10
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


function moveEnemies() {
  _.each(enemies_data, function(item) {
    item.x = Math.random()*100;
    item.y = Math.random()*100;
  });

  enemies.data(enemies_data, function(d) {return d.id});

  enemies.transition().duration(1000)
         .attr('x', function(enemy) { return axes.x(enemy.x)})
         .attr('y', function(enemy) { return axes.y(enemy.y)});

}

setInterval(moveEnemies, 1500);


var player = {

//  path: 'm-7.5,1.62413c0,-5.04095 4.08318,-9.12413 9.12414,-9.12413c5.04096,0 9.70345,5.53145 11.87586,9.12413c-2.02759,2.72372 -6.8349,9.12415 -11.87586,9.12415c-5.04096,0 -9.12414,-4.08318 -9.12414,-9.12415z',
  fill: '#ff6600',
  x: 0,
  y: 0,
  angle: 0,
  r: 5,

  render: function(){
    this.el = svg.append('image')
              .attr('d', this.path)
              .attr('xlink:href', 'spaceship.png')
              .attr('width', 50)
              .attr('height', 48);


    this.transform(
      gameOptions.width * 0.5,
      gameOptions.height * 0.5
    )
  },

  getx: function() {
    return this.x;
  },

  setx: function(x) {
    xmin = gameOptions.padding;
    xmax = gameOptions.width - gameOptions.padding;
    if (x <= xmin) x = xmin;
    if (x >= xmax) x = xmax;
    this.x = x;
  },

  gety: function() {
    return this.y;
  },

  sety: function(y) {
    ymin = gameOptions.padding;
    ymax = gameOptions.height - gameOptions.padding;
    if (y <= ymin) y = ymin;
    if (y >= ymax) y = ymax;
    this.y = y;
  },

  transform: function(x, y, angle) {
    this.angle = angle || this.angle;
    this.setx(x);
    this.sety(y);

    this.el.attr('transform',
      "rotate(" + this.angle + "," +this.getx()+ "," +this.gety()+ "), "+
      "translate(" +this.getx() + "," + this.gety() + ")")
  }
};
player.render();
// player.transform(gameOptions.width * 0.5, gameOptions.height * 0.5);



  // Make sure they don't go out of bounds
  // Extra Credit = add more enemies as a sliding scale
  // of difficulty

// Create our player and the functionality around moving

// Detect collision with enemy
  // Reset score
  // Flash the screen upon collision

// Keep track of high score
  // If our score > high score...

