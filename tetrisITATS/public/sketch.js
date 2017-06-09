
//var tinggi = 570;
var lebar =600;
var tinggi = lebar -(lebar/20);
var tetris;
var level;
var score = 0;
var mapp;
var sansation;
var head;
var c;
var click= false;
var menu =
{
  x : lebar*0.10,
  y : tinggi*0.15,
  lebar:  lebar-lebar*0.25,
  tinggi : tinggi-tinggi*0.30
};

var sidebar =
{
  x : lebar/20 *10 +40 ,
  y :0 ,
  lebar : lebar -((lebar/20 )*10)-40,
  tinggi : tinggi,

  cont : {
    x:lebar/20 *10 +40+20 ,
    y: tinggi /6 -20 ,
    lebar : lebar -((lebar/20 )*10 )-80,
    tinggi : 180

  }
};



var buttons;
var balok = [];
var bg ;
var level;
var dewa;
var habibah;
var bagus;
var imgSize = 70;
function preload()
{

  sansation = loadFont("font/Sansation_Light.ttf");
  for(var a = 0 ; a<7;a++)
  {
    balok.push(loadImage("foto/dewa/balok"+a+".png"));
  }
  dewa = loadImage ("foto/dewa.png");
  habibah = loadImage ("foto/habibah.png");
  bagus = loadImage ("foto/bagus.png");

  bg = loadImage ("foto/dewa/background1.png");

}
function setup ()
{

  mapp= new Maps(20 , 10);

   var c1 =color(87, 255, 123);
   var c2 = color(224, 239, 122);
   var c3 = color(252, 82, 40);
  button1 = new Buttons ((menu.lebar+menu.x)/2 , (menu.y+menu.tinggi)/3,80 ,50,c1,"EASY");
  button2 = new Buttons ((menu.lebar+menu.x)/2 , (menu.y+menu.tinggi)/2,80 ,50,c2,"NORMAL");
  button3 = new Buttons ((menu.lebar+menu.x)/2 , (menu.y+menu.tinggi)/1.5,80 ,50,c3,"HARD");
  createCanvas(lebar,tinggi);

 //pilihLevel();
}

function draw(){


  if(!click)
    pilihLevel();

  else {


    image(bg ,0,0 ,lebar , tinggi);
    fill(color(69, 82, 104));
    rect(0 , 0 , 40 , tinggi);
    tetris.draw();
    tetris.fall();
    tetris.collisionCheck(mapp);
    mapp.draw();
    mapp.checkingLine();
    mapp.checkDead();

    showSidebar();

  }

}

function keyPressed() {
 tetris.move(key);


 if(keyCode==ESCAPE )
 {
   noLoop();
//  resizes();
 }

}



function showSidebar ()
{


  fill(color(69, 82, 104));
  rect(sidebar.x , sidebar.y ,sidebar.lebar, sidebar.tinggi);

  fill(color(34, 90, 183))
  rect(sidebar.cont.x ,sidebar.cont.y ,sidebar.cont.lebar , sidebar.cont.tinggi);
  image (dewa , tetris.lebar *mapp.lebar +40 , tinggi*0.75 ,imgSize,imgSize);
  image (bagus , tetris.lebar *mapp.lebar +40+imgSize+10 , tinggi*0.75 ,imgSize,imgSize);
  image (habibah , tetris.lebar *mapp.lebar +40+(imgSize+10)*2, tinggi*0.75 ,imgSize,imgSize);
  fill(255);
  textAlign(LEFT);
  textSize(13);
  textFont(sansation);
  text(" Tugas Matematika Diskirt",tetris.lebar*mapp.lebar+50 , 20);
  textSize(15);
  textFont("Georgia");
  text("Created By : ",tetris.lebar*mapp.lebar+50 , tinggi*0.75-20  );
  textFont(sansation);
  textSize(20);
  text("LEVEL: "+level , tetris.lebar*mapp.lebar+50,tinggi-20);



  textSize(12);
  text("Dewa", 40+tetris.lebar *mapp.lebar +(imgSize*0.25) , tinggi*0.75 +imgSize+20 );
  text("Bagus", 40+(tetris.lebar *mapp.lebar+ (imgSize*0.25))*1.25 , tinggi*0.75 +imgSize+20 );
  text("Habibah", 40+(tetris.lebar *mapp.lebar+ (imgSize*0.25))*1.5 , tinggi*0.75 +imgSize+20 );

}

function pilihLevel()
{



//  colorMode(HSL);


  background(bg);
  fill(color(239, 223, 179));
  rect (menu.x , menu.y , menu.lebar,menu.tinggi);

  fill(51);

  textFont(sansation);
  textAlign(CENTER);
    textSize(32);
  text("PILIH LEVEL" , menu.x+menu.lebar/2+20 , menu.y+30);


  button1.buttonActive();
  button2.buttonActive();
  button3.buttonActive();


if (mouseIsPressed)
{
  if(button1.clicked())
  {

    click=true;
    level = "EASY";
    var body = createTetris(level);
    tetris = new Tetris (body , lebar/20 );
  }
  if(button2.clicked())
  {
    console.log("keKlik");
    click=true;
    level = "NORMAL";
    var body = createTetris(level);
    tetris = new Tetris (body , lebar/20 );
  }
  if(button3.clicked())
  {
    console.log("keKlik");
    click=true;
    level = "HARD";
    var body = createTetris(level);
    tetris = new Tetris (body , lebar/20);
  }
}

}

// function resizes() {
//
//   console.log("Bisaa");
//   var w = window.innerWidth;
//   var h = window.innerHeight;
//   console.log(w+"  "+ h);
//   tinggi = lebar -(lebar/20);
//   createCanvas(w,tinggi);
//   lebar = w;
//
// };
