function setup() {
  createCanvas(720,480);
  strokeWeight(2);
}

function draw() {
  background(198,198,198);
  
  //Neck
  stroke(87,87,86);
  line(360,240,360,300);
  line(370,240,370,300);
  line(380,240,380,300);
  
  //Antennas
  stroke(0,0,0);
  line(370,200,390,91);
  line(430,220,370,200);
  line(340,160,370,200);
  
  //Head
  noStroke();
  fill(0,0,0);
  ellipse(370,200,80,80);
  
  fill(255,255,255);
  ellipse(380,195,23,23);
  
  fill(0,0,0);
  ellipse(380,195,6,6)
  
  fill(87,87,86);
  ellipse(360,195,10,10);
  ellipse(390,180,8,8);
  ellipse(395,205,6,6);
  
  //Body
  fill(87,87,86);
  ellipse(360,400,60,60)
  
  fill(0,0,0);
  rect(320,300,80,100);
  
  fill(87,87,86);
  rect(320,310,80,5);
}