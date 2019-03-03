let size = 30;
let button;
let button_1;
let noseConeShow = true;
var nose;
var body;
var fin;
var font;
var triangle_model;
function setup() {
  createCanvas(1280,600,WEBGL);
  nose = new NoseCone(40,70,3);
  body = new BodyTube(40,250);
  fin = new Fin(20,2);

  //Nose cone button
  button = createButton('Nose Cone');
  button.position(0,0);
  button.size(100,30);
  button.elt.setAttribute("id", "nose_cone");
  button.mousePressed(nose_cone);

  //Body Tube
  button = createButton('Body Tube');
  button.position(100,0);
  button.size(100,30);
  button.elt.setAttribute("id", "body_tube");
  button.mousePressed(body_tube);

  //Fins
  button = createButton('Fins');
  button.position(200,0);
  button.size(100,30);
  button.elt.setAttribute("id", "fins");
  button.mousePressed(fins);

  //Motor mount
  button = createButton('Motor');
  button.position(300,0);
  button.size(100,30);
  button.elt.setAttribute("id", "motor");
  button.mousePressed(motor);

  //Parachute
  button = createButton('Parachute');
  button.position(400,0);
  button.size(100,30);
  button.elt.setAttribute("id", "parachute");
  button.mousePressed(parachute);


  triangle_model = loadModel('assets/306090.obj');
  font = loadFont('assets/Avenir.otf');

}

function draw() {
  background(100);
  displayRocket();
  if(nose.isActive){
    nose.makeGUI();
  }
  if(body.isActive){
    body.makeGUI();
  }
}

function nose_cone(){
  nose.activate();
  body.deactivate();
}

function body_tube(){
  body.activate();
  nose.deactivate();
}

function fins(){
  console.log('hi');
}

function motor(){
  console.log('hi');
}

function parachute(){
  console.log('hi');
}


displayRocket = function(){
  let rotateMouse = map(mouseX,0,width,-2*PI,2*PI);
  let rotateMouse1 = map(mouseY,0,height,-2*PI/20,2*PI/20);

  //Point being rotated at: 0, -180
  //Starting point: 0,20
  //Ending point: 0,-380
  noStroke();
  push();
  translate(300,0);
  rotateY(rotateMouse);
  rotateX(rotateMouse1);
  translate(0,-100);
  rotateX(PI);
  fill(255,0,0);
  nose.draw();
  translate(0,-160);
  body.draw();
  push();
  translate(0,-120,0);
  fill(0,0,0);
  cylinder(20,50);
  pop();
  fill(255,0,255);
  translate(0,-125);
  rotateZ(PI/2);
  fin.draw(PI/3);
  fin.draw(-PI/3);
  fin.draw(PI);
  pop();
  fill(200,200,200);
  rect(-windowWidth/2,-windowHeight/2 - 20,windowWidth*2/5 - 12,windowHeight+20);
}
