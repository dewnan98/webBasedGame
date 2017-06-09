function Buttons (x , y , lebar,tinggi ,c,teks)
{
  this.x = x;
  this.y = y;
  this.tinggi = tinggi;
  this.lebar = lebar;
  this.teks = teks;
  this.warna = c;
  this.colors =c;


  this.buttonActive = function()
  {
    this.draw();
    this.crossOver();
  }

  this.crossOver = function()
  {
    if(this.isCrossOver())
    {

      this.warna = color(244, 246, 247);



    }
    else
    {
      this.warna = this.colors;
    }


  }
  this.isCrossOver = function ()
  {
    if (mouseX>=this.x &&mouseX<=this.lebar+this.x
       &&mouseY>=this.y&&mouseY<=this.tinggi+this.y)
       {
         return true;
       }
       else {
         return false;
       }
  }

  this.clicked = function ()
  {
    if(this.isCrossOver())
    return true;

    else
    return false;

  }
  this.draw = function ()
  {

    fill(this.warna);

    rect(this.x,this.y,this.lebar,this.tinggi,20);
    fill(0);
    textSize(16);
    //textAlign(CENTER);
    textFont(sansation);
    text(this.teks,this.x+this.lebar/2,this.y+this.tinggi/2 +5);
  //  textAlign(CORNER);


  }
}
