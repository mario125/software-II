

var Juego_1_1 =
{
  preload:function()
  {

  },
  create:function()
  {



  },
  //*******************************BOTENES   D EMENU********************
  Actualizar:function()  {
    alert("boton actializar");
  },
  Home:function()  {
    alert("boton Home");
  },

  Siguiente:function()  {
    alert('boton Siguiente');

  },
  Atras:function()  {
    alert("boton  Atras");
  },
//*******************CHOQUES  DE  BLOQUES  PISO  base*********************
  choqueIzquierda:function()  {
  juego.physics.arcade.overlap(piso1,basePrimal, this.tocoUno, null, this);
  if(parar1==0) { piso1.body.velocity.x=+250; }
  else if (parar1==1) {  piso1.body.velocity.x=0; }
  },
  tocoUno:function()  {
    if(piso1.alive == false) { return; }
        parar1=1;
  },

  choqueDerecha:function()  {
  juego.physics.arcade.overlap(piso2,basePrimal, this.tocoDos, null, this);
  if(parar2==0) { piso2.body.velocity.x=-250; }
  else if (parar2==1) {  piso2.body.velocity.x=0; }
  },
  tocoDos:function()  {
    if(piso2.alive == false) { return; }
        parar2=1;
  },

  update:function()
  {
    time = juego.time.events.loop(0, this.choqueIzquierda, this);
    time = juego.time.events.loop(0, this.choqueDerecha, this);

  }

};
