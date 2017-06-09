function Tetris (body , s ) {


this.x =3;
this.y = 0;
this.lebar =s;

if(level=="NORMAL")
this.vy = 0.07;
else if(level=="HARD")
this.vy = 0.1;
else {
this.vy = 0.05;
}

this.tinggi =s;
this.body = body;
this.fallDelay = 0;

  this.move = function (input)
  {
    if (input =='A' || input=='a'||keyCode ==LEFT_ARROW )
    {
      this.x--;
      if(this.isNabrak())
      {
        this.x++;
      }
    }
    if (input =='D' || input=='d'||keyCode==RIGHT_ARROW)
    {
      this.x++;
      if(this.isNabrak())
      {
        this.x--;
      }

    }
    if (input =='s' || input=='S' ||keyCode ==DOWN_ARROW)
    {
      this.vy = 1;
    }
    if (input ==' ')
    {

      var b = this.rotate();
      this.body = b;
      while(this.isNabrak())
      {
          if(this.x<mapp.lebar/2)
          this.x++;

          else
           this.x--;
      }
    //  this.rotate();

    }

  }

  this.rotate = function()
  {

    var ret = new Array(4);

    for (var i = 0; i < 4; i++) {
      ret [i] = new Array(4);

        for (var j = 0; j < 4; j++) {

            ret[i][j]=this.body[4-j-1][i];

        }
    }

    return ret;

  }

  this.collision = function()
  {

      //return true

      //else return false
  }
  this.fall = function()
  {
    this.fallDelay+=1;
    // if(this.fallDelay>=15)
    // {
      this.y+=this.vy;
      this.fallDelay=0
  //  }

  }
  this.isNabrak = function ()
  {
    for(var a = 0 ; a <4 ; a++)
    {
      for (var b = 0 ; b<4; b++)
      {
        if (this.body[a][b]!=0)
        {
          if (  mapp.maps[floor(this.y)+a][floor(this.x)+b]!==0 )
          {
              return true;
          }
        }
      }
    }
    return false;

  }
  this.collisionCheck = function (m)
  {
    for(var a = 0 ; a <4 ; a++)
    {
      for (var b = 0 ; b<4; b++)
      {
        if (this.body[a][b]!=0)
        {
          if (  mapp.maps[floor(this.y)+a+1][floor(this.x)+b]!==0||
            floor(this.y)+a+1>=m.tinggi-1)
          {
            this.collision();
          }
        }
      }
    }
  }

  this.collision = function()
  {
    for (var a = 0 ; a<4; a++)
    {
       for (var b = 0 ; b<4; b++)
       {
         var isi = this.body[a][b];
         if(isi!=0)

         {

             mapp.maps[floor(this.y)+a][floor(this.x)+b]=this.body[a][b];

           var body = createTetris(level);
            tetris = new Tetris(body , lebar/20);
         }
       }
    }
  }

  this.draw = function ()
  {
    for(var a =0 ; a<4 ; a++)
    {
      for(var b = 0; b<4 ; b++)
      {
        var isi = this.body[a][b];
      //  console.log(isi);

        if(isi!=0)
        {

        //  fill(255);
        strokeWeight(2);
stroke(51);
fill(245)
rect((this.x+b)*this.lebar+40,(this.y+(a))*this.tinggi, this.lebar , this.tinggi)
          image(balok[isi-1] , (this.x+b)*this.lebar+40,(this.y+(a))*this.tinggi, this.lebar -1, this.tinggi-3);

        }
      }
    }
  }


}

//Generate Tetris
function createTetris (level)
{


  var peluang = [];
  var p;
  var jum=0;
    if(level == "EASY")
    {

        for(var a = 0 ; a<7;a++)
        {
          if(a==0)
              p=8;

          if (a==1)
              p=9;
          if(a==2)
              p=6;
          if(a==3)
              p=6;
          if(a==4)
              p=2;
          if(a==5)
              p=1;
          if(a==6)
              p=1;

              jum+=p;


          for(var b = 0 ; b<p;b++)
            {
              peluang.push(a+1);

            }
        }

    }

    if(level == "NORMAL")
    {

              for(var a = 0 ; a<7;a++)
              {
                if(a==0)
                    p=3;

                if (a==1)
                    p=3;
                if(a==2)
                    p=3;
                if(a==3)
                    p=3;
                if(a==4)
                    p=3;
                if(a==5)
                    p=2;
                if(a==6)
                    p=2;

                    jum+=p;


                for(var b = 0 ; b<p;b++)
                  {
                    peluang.push(a+1);

                  }
              }




    }

    if (level =="HARD")
    {

                    for(var a = 0 ; a<7;a++)
                    {
                      if(a==0)
                          p=1;

                      if (a==1)
                          p=1;
                      if(a==2)
                          p=1;
                      if(a==3)
                          p=1;
                      if(a==4)
                          p=6;
                      if(a==5)
                          p=8;
                      if(a==6)
                          p=8;




                      for(var b = 0 ; b<p;b++)
                        {
                          peluang.push(a+1);

                        }
                    }



    }

    var r = floor(random (0,peluang.length));

  c = peluang[r];
  console.log(c);
  var tetris1 = [[0,1,0,0],
                [0,1,0,0],
                [0,1,0,0],
                [0,1,0,0]];

  var tetris2 = [[0,0,0,0],
                [0,2,2,0],
                [0,2,2,0],
                [0,0,0,0]];

  var tetris3 = [[0,3,0,0],
                [0,3,0,0],
                [0,3,3,0],
                [0,0,0,0]];

  var tetris4 = [[0,0,4,0],
                [0,0,4,0],
                [0,4,4,0],
                [0,0,0,0]];

  var tetris5 = [[0,0,0,0],
                 [0,5,5,5],
                 [0,0,5,0],
                 [0,0,0,0]];


  var tetris6 = [[0,0,0,0],
                  [0,7,7,0],
                  [7,7,0,0],
                  [0,0,0,0]];


  var tetris7 = [[0,0,0,0],
                    [6,6,0,0],
                    [0,6,6,0],
                    [0,0,0,0]];


  if (c==1)
  return tetris1;

  if (c==2)
  return tetris2;

  if (c==3)
  return tetris3;

  if (c==4)
  return tetris4;

  if (c==5)
  return tetris5;

  if (c==6)
  return tetris6;

  if (c==7)
  return tetris7;




}
