//creator
//©Dewa Nanda (mahasiswa semester 2)
//ITATS
//this code is free to use and edit
//you may have lag issue.
//code is bad writen

var bg
var ballimg;
var y = 0;
var balls = [];
var gravityActive;
var siapMeluncur;
const grav = 9.8;
var power;
var angle;
var tanah =380;
var go =0;
var score = 0;
var jaring;
var birds = [];
var birdCount = 0;
var birdsGo = false;
const tinggi = 460;
const lebar = 640;
// var Engine = Matter.Engine,
//     Render = Matter.Render,
//     World = Matter.World,
//     Bodies = Matter.Bodies;



var engine;
var world;
var ball;
var song;
var button;
var birdImg = [];
function preload()
{
    bg = loadImage("images/lapangan11.png");
    ballimg = loadImage("images/ball2.png");
    jaring = loadImage("images/jaring.png");
    var b1 = loadImage("images/burung1.png");
    var b2 = loadImage("images/burung2.png");
    var b3 = loadImage("images/burung3.png");

    birdImg.push(b1);
    birdImg.push(b2);
    birdImg.push(b3);


    // engine = Engine.create();
    // world = engine.world;
    // ball = Bodies.ellipse(mouseX, mouseY, 80, 80);

}
function setup() {
//load song

  song = loadSound("sound/ali_song.mp3", loaded("ali_song"));
  bounceSound =loadSound("sound/Bounces.mp3",loaded("Bounces.mp3"));
  backBoardSound =loadSound("sound/Back+Board.mp3",loaded("back board"));
  fenceSound = loadSound("sound/fence_sound2.mp3",loaded("Fence Sound"));
  basketsound = loadSound("sound/basketsounds.mp3");
  rimSound = loadSound ("sound/rim_sound.mp3" , loaded("rim _sound"));
  netSound = loadSound("sound/net_sound.mp3",loaded("net_sound"))
//load sond done
  createCanvas(lebar, tinggi);
  siapMeluncur = false;
  gravityActive = false;
  power = 0;
  angle=0;

  button = createButton("Play" );
  button.mousePressed(togglePlay);


}


function loaded(str){

    console.log(str + " is succesfull LOADED");
  }
function togglePlay(){

  if(!song.isPlaying()){
  song.setVolume(0.5);
  song.play();
  }

  else {
  song.stop();

  }
}
function draw() {


  imageMode(CORNER);
  image(bg ,0,0 ,640 , 460);

  soundCheck();

//ball stuff

   for (var a = 0 ; a<balls.length;a++)
   {

     balls[a].update();
     balls[a].collision();

     // check if collision with other ball
     for(var b = 0; b<balls.length;b++)
     {
       if (b==a) continue;
       balls[a].intersect(balls[b]);
     }

     if((balls[a].x < -15 && balls[a].y<=222) ||balls[a].x>lebar+balls[a].r)
     {
       balls.splice(a,1);
       go--;
     }
     if(balls[a]!=null)
     {
     noStroke();
     var c = color(0, 0, 0, 80);
     var value = alpha(c);  // Sets 'value' to 102
     fill(value);
     ellipse(balls[a].x, tanah, 40 +balls[a].y/40-15, 12 );
     balls[a].display();
     }
   }
   imageMode(CORNER);
   image(jaring,54.5 , 178);

//collision posisiion

  //  fill(255);
  // rect(35 , 76.9 , 20 , 112);
  // rect(54 , 170, 9 , 3);
  // rect(112 , 175 , 9 , 3);
  // fill('yellow')
  // rect(65 , 178, 45 , 8);
  // rect(0 , 222 ,12 , 200 );

//power meter

  stroke(255);
  fill(0);
  rect(20 , tinggi-30 , 150 ,20);
  fill('rgb(100%,0%,10%)');
  rect(20 , tinggi-30 , power ,20);


  textSize(15);
  fill(255);
  text("SCORE : "+score, lebar-140, tinggi-10);

//Key Input

  if (keyIsDown(32))
  power+=3;

  if (power>=150)
  keyReleased();
  if (keyIsDown(UP_ARROW))
  {
    angle +=0.1;

    if (angle >= 90)
    {
      angle=90;
    }

  }

  if (keyIsDown(DOWN_ARROW))
  {
    angle -=0.1;
  }

//birdstuff

  if(birdCount>=400)
  {

    var brd = new Bird(lebar ,30 ,birdImg ,30);
    birds.push(brd);
    birdsGo = true;
    birdCount=0;
    console.log("birds is puushed");

  }



  for(var a =0 ; a<birds.length;a++)
  {
    //membuat bayangan
    noStroke();
    var c = color(0, 0, 0, 80);
    var value = alpha(c);  // Sets 'value' to 102
    fill(value);
    ellipse(birds[a].x, tanah, 40 +birds[a].y/40-20, 8 );


    birds[a].display();
    birds[a].update();

    if(birds[a].x<=0 ||birds[a].x>lebar+4)
    {
      birds.splice(a,1);
    }

  }

birdCount++;

}




function mousePressed() {
   var b;
   console.log('bird count : '+birdCount);

  // gravityActive= false;
if(mouseX <lebar)
{

     b = new Ball(mouseX,mouseY,ballimg);
     balls.push(b);
     console.log(balls.length);

}
}
function keyPressed()
{
  if (keyCode==32)
  {
    siapMeluncur = true;



  }

}

function keyReleased() {

if (siapMeluncur)
{

  // bolaMeluncur = true;

var a = atan(angle);
// var ang = atan2(mouseX , mouseY);

console.log(a);

  var vx = power*cos(a);
  var vy = power*sin(a);



  balls[go].launch(vx,vy,true);



  go++;

  siapMeluncur=false;


}

power=0;
console.log('x : '+mouseX);
console.log('y : '+mouseY);
// ball = new Ball(mouseX,mouseY,ballimg);
console.log('angle : '+angle);

}

function jarak (x1,y1,x2,y2)
{
  var j = Math.pow(x1-x2,2)+Math.pow(y1-y2,2);
  return Math.sqrt(j);
}

//still on working
// function arrow ()
// {
//     beginShape()
//     {
//       vertex()
//     }
//
// }
