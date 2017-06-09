function Maps (t, l){
  this.tinggi = t;
  this.lebar = l;

  this.maps= new Array(this.tinggi);
  for(var a = 0 ;a<this.tinggi ; a++)
  {
    this.maps[a]= new Array(this.lebar);
    for(var b = 0 ;b<this.lebar;b++)
    {
      this.maps[a][b]=0;
    }
  }

  this.checkingLine = function()
  {




    for(var a = this.tinggi-1 ;a>=0 ; a--)
    {    var c = 0;
      for(var b = 0 ;b<this.lebar;b++)
      {
        if(this.maps[a][b]!=0)
          c++;

        if (c>=this.lebar)
          this.clearLine(a);
      }
    }




  }
  this.clearLine = function(a)
  {

    console.log("Clear Line");

    for(var b=0 ; b<this.lebar;b++)
    {
        this.maps[a][b]=0;
    }

    this.mapdown(a);



  }

  this.mapdown = function (x)
  {
    for(var a =x ; a>0 ; a-- )
    {
      for(var b = 0 ; b<mapp.lebar ; b++)
      {
        mapp.maps[a][b]=mapp.maps[a-1][b];
      }
    }
  }

  this.draw = function ()
  {
    for(var a = 0 ; a<this.tinggi; a++)
    {
      for (var b = 0 ; b<this.lebar ; b++)
      {
        var isi = this.maps[a][b];

        if(isi!=0)
        {
          strokeWeight(2);
  stroke(51);
  fill(245);
  rect(b*tetris.lebar+40,a*tetris.tinggi, tetris.lebar , tetris.tinggi)
          image(balok[isi-1], b*tetris.lebar+40,a*tetris.tinggi, tetris.lebar-1 , tetris.tinggi-3)
        }
      }
    }
  }

this.checkDead = function ()
{
   for(var a = 0 ; a<this.lebar;a++)
 {
     if (this.maps [0][a]!=0) {

       textFont(sansation);
       textAlign(CENTER);
         textSize(32);
       text("GAME OVER :P" , lebar/3, tinggi/2);
        noLoop();

     }
   }

}



}
