let size = 30;
let button;
let noseConeShow = true;
var nose;
var font;
//let ellipsoid;
var triangle_model;
function setup() {
  createCanvas(900,600,WEBGL);
//  ellipsoid = loadModel('Ellipsoid.obj');
  nose = new NoseCone(40,70,2);
  button = createButton('Begin Launch!');
  button.position(400,50);
  button.size(100,50);
  console.log(button);
  button.elt.setAttribute("id", "launch");
  button.mousePressed(launch);
  triangle_model = loadModel('assets/306090.obj');
  font = loadFont('assets/Avenir.otf');
}

function draw() {
  background(100);
  displayRocket();
  textFont(font);
  fill(255,255,255);
  textSize(20);
  text('Time: ',-440,-285,20,20);
  text('Altitude: ',-440,-240,20,20);
  text('Velocity: ',-440,-195,20,20);
  text('Thrust: ',-440,-150,20,20);
}

function launch(){
  button.remove();
}

displayRocket = function(){
  let rotateMouse = map(mouseX,0,width,-2*PI,2*PI);
  let rotateMouse1 = map(mouseY,0,height,-2*PI,2*PI);

  //Point being rotated at: 0, -180
  //Starting point: 0,20
  //Ending point: 0,-380
  noStroke();
  push();
  translate(0,-40);
//  rotateY(rotateMouse);
//  rotateX(rotateMouse1);
  translate(0,-100);
  rotateX(PI);
  fill(255,0,0);
  nose.draw(noseConeShow);
  translate(0,-160);
  fill(0,0,255);
  cylinder(40,250);
  push();
  translate(0,-120,0);
  fill(0,0,0);
  cylinder(20,50);
  pop();
  fill(255,0,255);
  push();
  translate(0,-125);
  rotateZ(PI/2);
  rotateX(PI/3);
  scale(30,60,30);
  model(triangle_model);
  pop();
  translate(0,-125);
  rotateZ(PI/2);
  rotateX(-PI/3);
  scale(30,60,30);
  model(triangle_model);
  pop();

}

gridToDisplay = function(startI){
  let grid = [[0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3],[4,4,4,4,4,4,4,4,4],[5,5,5,5,5,5,5,5,5]]
  for (var i = 0; i < grid.length; i++) {
//      push();
    rectMode(CENTER);
    for (var j = 0; j < grid[i].length; j++) {
        let num = grid[i][j];
        let j1 = j%3 + 1;
        let j2 = int(j/3);
        let x = j1*size;
        let y = j2*size;
//          rect(x,y,5,5);
//          console.log(x,y,j,j1);
        drawIt(i,num,x,y);
    }
//      pop();
  }
}
