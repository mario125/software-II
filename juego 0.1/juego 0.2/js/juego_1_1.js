var barra_menu;
var cielo;
var cholito1;
var cholito_negro;
var piso1;
var piso2;

//BOTONES
var b_atras;
var b_siguiente;
var b_actualizar;
var b_home;
var b_avanzado;
var b_basico;
//NUEMEROS
var cinco;
var uno;
var dos;
var tres;
var cuatro;
var basePrimal;
// fullcreen
var largo = screen.width;
var altura = screen.height;
// variable de  colitions
var parar1=0;
var parar2=0;

var time;

var Juego_1_1 =
{
  preload:function()
  {
    //cargamos  nuestras imagenes y sprites
    juego.load.image('cielo','img/degra.png');
    juego.load.image('nuve','img/nuves.png');
    juego.load.image('bar_menu','img/barra_menu.png');
    juego.load.image('piso','img/piso2.png');

    juego.load.image('b_atras','img/atras.png');
    juego.load.image('b_siguiente','img/sig.png');
    juego.load.image('b_actualizar','img/reanudar.png');
    juego.load.image('b_home','img/home.png');

    juego.load.image('cholito_negro','img/cholito_negro.png');
    juego.load.spritesheet('cholito1','img/sprite_comple.png',100,200);


    juego.load.image('cinco','img/cinco.png');
    juego.load.image('cuatro','img/cuatro.png');
    juego.load.image('tres','img/tres.png');
    juego.load.image('dos','img/dos.png');
    juego.load.image('uno','img/uno.png');


  //para poder tner  mejor  rendimiento
    juego.forceSingleUpdate = true;

  },
  create:function()
  {
    juego.scale.pageAlignHorizontally = true;
    juego.scale.pageAlignVertically = true;
    juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    juego.physics.startSystem(Phaser.Physics.ARCADE);

    cielo = juego.add.tileSprite(0,0,juego.width,juego.height,'cielo');
//************************** BLOQUES  PISO***************************************************
//plataforma1=game.add.sprite(-200,450,'plataforma');
    piso1=juego.add.sprite(-600,juego.height-250,'piso');
    piso2=juego.add.sprite(juego.width-400,juego.height-250,'piso');

//*****************************NUEMEROS****************



//********************************* BARRA  MENU **********************************************
    barra_menu=juego.add.tileSprite(0,juego.height-100,juego.width,100,'bar_menu');
    var ye = (barra_menu.position.y)+4;
    var ex =(barra_menu.position.x)+4;
    b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
    b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
    b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
    b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
    cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
//****************************************CHOLITO**********************************************
    cholito1=juego.add.sprite(100,100,'cholito1');


    cholito1.animations.add('izquierda', [0, 1, 2, 3], 10, true);
    cholito1.animations.add('stop', [4], 20, true);
    cholito1.animations.add('derecha', [5, 6, 7, 8], 10, true);
    cholito1.animations.add('llora', [9], 10, true);
    // ************************* MOSTRAR  BLOQUES  MEDIANTE random ALEATORIO

    var base = Math.floor(Math.random()*5)+1;
    var distancia=250;
    base=1;






     if (base==1)
     {
       basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'uno');


       var a=0,b=0,c=0,des=0,puntero1=50;

       for (var i = 0; i <=3; i++) {

         var ran= Math.floor(Math.random()*3)+1;


         if (ran==1&& a==0) {

           uno=juego.add.sprite(puntero1,juego.height/2-200,'uno');

           puntero1=uno.position.x+400;

           a=1;

         }
         if (ran==2&& b==0) {

           dos=juego.add.sprite(puntero1,juego.height/2-200,'dos');

           puntero1=dos.position.x+400;

           b=1;

         }
         if (ran==3&& c==0) {

           tres=juego.add.sprite(puntero1,juego.height/2-200,'tres');

           puntero1=tres.position.x+400;

           c=1;

         }







       }




      }
     else if (base==2) { basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'dos');}
     else if (base==3) { basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'tres');}
     else if (base==4) { basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'cuatro');}
     else if (base==5) { basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'cinco'); }



    //********************* APLICAMOS GRAVEDAD
    juego.physics.arcade.enable([piso1,piso2,basePrimal,uno,dos,tres]);
    //juego.physics.arcade.gravity.y=200;
    //********************* PUNTO DE  ANCLAJE  MEDIO y input A  LOS  CUADRADOS*******************
    uno.inputEnabled = true;
    dos.inputEnabled =true;
    tres.inputEnabled =true;

    uno.anchor.set(0.5);
    dos.anchor.setTo(0.5);
    tres.anchor.setTo(0.5);

    uno.input.enableDrag();
    dos.input.enableDrag();
    tres.input.enableDrag();

    basePrimal.anchor.setTo(0.5);
    //***************** INMOVILIZAR ALGUNOS  BLOQUES*******************
    piso1.body.allowGravity=false;
    piso1.body.immovable=true;
    piso2.body.allowGravity=false;
    piso2.body.immovable=true
    basePrimal.body.allowGravity=false;
    basePrimal.body.inmovable=true;

    uno.body.allowGravity=false;
    uno.body.inmovable=true;

    dos.body.allowGravity=false;
    dos.body.inmovable=true;

    tres.body.allowGravity=false;
    tres.body.inmovable=true;


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
