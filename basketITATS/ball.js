//creator
//©Dewa Nanda (mahasiswa semester 2)
//ITATS
//this code is free to use and edit
//you may have lag issue.
//code is bad writen

function Ball(x , y , img)
{

this.ballGoal = false;
this.x = x;
this.y = y;
this.img = img;
this.r = 15;
this.gravityActive=false;
this.vx=0;
this.vy=0;


  this.display = function()
    {

    imageMode(CENTER);
    image(this.img, this.x, this.y , this.r*2,this.r*2);


    }

  this.collision= function()
  {

  // var d=b.x-20;

//hit back Board

  if (this.x -this.r< 35 + 20 &&
     this.x + this.r > 35 &&
     this.y -this.r< 76.9 + 112 &&
     this.r + this.y > 76.9) {
       this.x=55+this.r;
       this.vx =-this.vx/2;
      backBoardSound.setVolume(this.vx/8);
      backBoardSound.play();
  }
//hit back rim
  if (this.x -this.r< 54 + 5 &&
     this.x + this.r > 53 &&
     this.y -this.r< 175 + 5 &&
     this.r + this.y > 175) {


       this.y=175-this.r;
       this.vy =-this.vy/1.5;

       rimSound.setVolume(this.vy/13);
       rimSound.play();
        rimSound.jump(0.5);

  }
//hit front rim
  if (this.x -this.r< 112 + 4 &&
     this.x + this.r > 112 &&
     this.y -this.r< 175 + 3 &&
     this.r + this.y > 175) {
       this.y=175-this.r;
       this.vy =-this.vy/1.5;
       rimSound.setVolume(this.vy /12);
       rimSound.play();
       rimSound.jump(0.5);

  }

//bola masuk ke ring
if(!this.ballGoal)
    if (this.x-this.r < 65 + 45 &&
       this.x + this.r > 65 &&
       this.y-this.r < 178 + 8 &&
       this.r + this.y > 178) {

        this.x=87;
        this.vx=0;
        console.log("GOAL");

        score+=10;
        netSound.play();
        netSound.jump(0.6);
        this.ballGoal =true;

    }

//fence hittin
    if(this.x-this.r <=0 &&
       this.y-this.r<222+200 &&
       this.y+this.r>222)
       {
         this.x=0+this.r;
         this.vx=-this.vx/2;
         fenceSound.setVolume(this.vx/11);
         fenceSound.play();
       }

//bouncing
  if(this.y >=tanah-this.r)
  {
    this.y=tanah-this.r;
    this.vy=-this.vy/2;




  if(this.vy<=-5)
  {
    bounceSound.setVolume(this.vy/15);
    bounceSound.play();

  }





}



}

this.update= function(){

this.x +=this.vx/5;


this.y +=this.vy/5;


if (this.gravityActive)
{
  this.vy +=grav/5;
}

}
this.launch= function(vx, vy ,gravi)
{

  this.vx=-vx;
  this.vy=-vy;
  this.gravityActive=gravi;

}

this.intersect = function (that) {
  var d = jarak(this.x,this.y ,that.x,that.y);

  if (d<this.r+that.r)
  {
      console.log("NABRAK");
  }

}

}
