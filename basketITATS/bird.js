//creator
//©Dewa Nanda (mahasiswa semester 2)
//ITATS
//this code is free to use and edit
//you may have lag issue.
//code is bad writen
//
function Bird (x , y , img , size)
{
this.x=x;
this.y=y;
this.vx =1;
this.vy=0;
this.s = size;
this.img=img;
this.frame=0;
this.f=0;


  this.display = function()
  {
    console.log("bird display function can run");
    imageMode(CENTER);
    image(birdImg[this.frame],this.x,this.y,this.s,this.s);

  }

  this.update = function()
  {
    this.x-=this.vx;
    this.y+=this.vy;

    if(this.frameUpdate())
    {
      this.frame++;
      if(this.frame>2)
        this.frame=0;

    }

  }

  this.frameUpdate = function(){

  this.f++;
  if(this.f>=15)
  {
    this.f=0;
    return true;
  }
  else {
    return false;
  }

  }
}
