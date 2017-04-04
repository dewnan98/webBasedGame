function soundCheck()
{
  if(bounceSound.currentTime()>0.3){
    bounceSound.stop();
  }
  if(basketsound.currentTime()>0.5){
    basketsound.stop();
  }
  if(netSound.currentTime()>1.1)
  {
    netSound.stop();
  }
  if(backBoardSound.currentTime()>0.5)
  {
    backBoardSound.stop();
  }
}
