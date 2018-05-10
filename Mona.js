var y=0;
function setup(){
  createCanvas(500,700);
}

function draw(){
  background(170,137,60);
  strokeWeight(1);
  fill(60,49,29);
  rect(0,300,500,700);
  strokeWeight(10);
  stroke(60,49,29);
  for(var i=0;i<=width;i++){
    line(i,300,i,int(random(100,300)));
  }
  stroke(0);
  strokeWeight(1);
  fill(87,81,62);
  ellipse(190,277,270,88);
  ellipse(290,387,300,108);
  
  fill(17,7,8);
  rect(0,500,500,200);
  stroke(0);
  fill(0);
  ellipse(250,300,175,200);
  rect(163,311,173,247);
  fill(30);
  ellipse(197,536,73,220);
  ellipse(259,576,175,367);
  
  fill(234,204,144);
  ellipse(256,378,31,47);
  ellipse(257,432,145,90);
  fill(30);
  rect(171,536,174,214);
  ellipse(320,539,69,226);
  ellipse(247,639,174,57);

  
  fill(234,204,144);
  ellipse(171,627,48,62);
  ellipse(198,632,59,67);
  
  
  //waqu
  fill(234,204,144);
  ellipse(250,300,113,148);
  
  push();
  translate(50,86);
  //left eye
stroke(117,77,54);
fill(117,77,54);
ellipse(170,210,30,25);
arc(150,208,20,15,-QUARTER_PI,HALF_PI+QUARTER_PI);

stroke(255);
fill(255);
ellipse(172,214,26,20);

stroke(174,209,232);
fill(174,209,232);
ellipse(175,214,20,20);


//right eye
stroke(117,77,54);
fill(117,77,54);
ellipse(230,210,30,25);
arc(250,208,20,15,QUARTER_PI,PI+QUARTER_PI);

stroke(255);
fill(255);
ellipse(229,214,26,20);

stroke(174,209,232);
fill(174,209,232);
ellipse(225,214,20,20);

//pupils
stroke(111,156,184);
fill(111,156,184);
ellipse(225,212,18,15);
ellipse(175,212,18,15);

stroke(117,114,142);
fill(117,114,142);
ellipse(225,214,10,13);
ellipse(175,214,10,13);

stroke(0,70);
fill(0,70);
ellipse(229,207,25,20);
ellipse(172,207,25,20);


//lights
stroke(255);
fill(255);
ellipse(222,209,8,5);
ellipse(171,209,8,5);


if(keyCode==='LEFT_ARROW'){
//eyebrow
y++;

}

noStroke();
fill(0,0,0,y);
ellipse(229,185,33,7);
ellipse(170,185,33,7);
pop();

stroke(0);
line(246,298,242,327);
line(230,344,273,337);
  
}