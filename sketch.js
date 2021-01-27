var hr, mn, sc;

function setup() {
  createCanvas(800,800);

  //Calculating time
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);

}

function draw() {
  background("black");  

  //Second Hand 
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(5);
  line(398, 400, 370, 250);
  pop();

  //Minute Hand
  push();
  rotate(mnAngle);
  stroke("lightgreen");
  strokeWeight(5);
  line(402, 400, 420, 300);
  pop();

  //Hour Hand
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(5);
  line(400, 400, 400, 350);

  drawSprites();
}