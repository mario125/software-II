var barra_menu;
var cielo;
var cholito1;
var cholito_negro;
var piso1;
var piso2;
var NombresUno=["1","2","3"];
 var a=0,b=0,c=0,des=0,puntero1=0;
 var x1=0,x2=0,x3=0,xpuntero=90;
 var txtPuntos;
 var txtPuntos2;
 var txtPuntos3;

 var choc_uno_base;
 var choc_uno_dos;


//BOTONES
var b_atras;
var b_siguiente;
var b_actualizar;
var b_home;
var b_avanzado;
var b_basico;
//NUEMEROS
var cinco;
var uno =null;
var dos=null;
var tres=null;
var cuatro=null;
var basePrimal;
var baseprimal_secundario_uno=false;
var baseprimal_secundario_dos=false;
var baseprimal_secundario_tres=false;
// fullcreen
var largo = screen.width;
var altura = screen.height;
var fondoDegra;
// variable de  colitions
var parar1=0;
var parar2=0;
var stop="arriba";
var espacio_piso1=0;
var espacio_piso2=0;

var time;
var cursor;

var Juego_1_1 =
{
  preload:function()
  {
    //cargamos  nuestras imagenes y sprites
    juego.load.image('cielo','img/degra.png');
    juego.load.image('nuve','img/nuves.png');
    juego.load.image('bar_menu','img/barra_menu.png');
    juego.load.image('piso','img/piso2.png');

    juego.load.spritesheet('cholito1','img/sprite_comple2.png',70,185);

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
      //______________________________ GRAVEDAD  AL  JUEGO____________________________
    juego.physics.startSystem(Phaser.Physics.ARCADE);
      // _____________________________ DELIMITAR   AMBIENTE PA LOS  SPRITES ____________
    fondoDegra = new Phaser.Rectangle(0, 0,largo, altura);
      //______________________________CIELO PAL JUEGO__________________________________
    cielo = juego.add.tileSprite(0,0,juego.width,juego.height,'cielo');
//************************** BLOQUES  PISO***************************************************

    piso1=juego.add.sprite(-600,juego.height-250,'piso');
    piso2=juego.add.sprite(juego.width-100,juego.height-250,'piso');

//****************************************CHOLITO**********************************************
    cholito1=juego.add.sprite(50,100,'cholito1');


    cholito1.animations.add('izquierda', [0, 1, 2, 3], 8, true);
    cholito1.animations.add('stop', [4], 20, true);
    cholito1.animations.add('derecha', [5, 6, 7, 8], 8, true);
    cholito1.animations.add('llora', [9], 10, true);


// ************************* MOSTRAR  BLOQUES  MEDIANTE random ALEATORIO_______________________

    var base = Math.floor(Math.random()*5)+2;
    var distancia=250;
      //_________________________________________________________________________________________________

      base=1;

     if (base==1)     {
       basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'dos');


         var name="";



       for (var i = 1; i <=3; i++) {

         var ran= Math.floor(Math.random()*3)+1;




         if (ran==1&& a==0) {
           uno=juego.add.sprite(50,juego.height/2-200,'uno');


           juego.physics.arcade.enable([uno]);
           uno.body.allowGravity=false;
           uno.body.inmovable=true;

           uno.body.bounce.y=0;

           uno.inputEnabled = true;
           uno.anchor.set(0.5);

           uno.input.enableDrag();
           uno.input.boundsRect = fondoDegra;


           a=1;
         }
         if (ran==2&& b==0) {
           dos=juego.add.sprite(25,juego.height/2-200,'uno');
           juego.physics.arcade.enable([dos]);
           dos.body.allowGravity=false;
           dos.body.inmovable=true;

           dos.inputEnabled = true;
           dos.anchor.set(0.5);

           dos.input.enableDrag();
           dos.input.boundsRect = fondoDegra;

           b=1;
         }
         if (ran==3&& c==0) {
          tres=juego.add.sprite(0,juego.height/2-200,'tres');
          juego.physics.arcade.enable([tres]);
          tres.body.allowGravity=false;
          tres.body.inmovable=true;

          tres.inputEnabled = true;
          tres.anchor.set(0.5);

          tres.input.enableDrag();
          tres.input.boundsRect = fondoDegra;


          c=1;
         }

       }


     }
     else if (base==2) { basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'dos');}
     else if (base==3) { basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'tres');}
     else if (base==4) { basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'cuatro');}
     else if (base==5) { basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'cinco'); }



     //********************************* BARRA  MENU **********************************************
         barra_menu=juego.add.tileSprite(0,juego.height-100,juego.width,100,'bar_menu');
         var ye = (barra_menu.position.y)+4;
         var ex =(barra_menu.position.x)+4;
         b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
         b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
         b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
         b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
         cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
    //********************* APLICAMOS GRAVEDAD__________________________________________________


    juego.physics.arcade.enable([piso1,piso2,basePrimal,cholito1,barra_menu]);
    juego.physics.arcade.gravity.y=250;
    cholito1.body.bounce.y=0.3;
    barra_menu.body.allowGravity=false;
    barra_menu.body.immovable=true;

    piso1.body.allowGravity=false;
    piso1.body.immovable=true;
    piso2.body.allowGravity=false;
    piso2.body.immovable=true;
    basePrimal.body.allowGravity=false;
    basePrimal.body.immovable=true;
    basePrimal.anchor.setTo(0.5);

    txtPuntos = juego.add.text(20, 20, "0", {font: "30px Arial", fill: "#FFF"});
    txtPuntos2 = juego.add.text(400, 20, "0", {font: "30px Arial", fill: "#FFF"});
    txtPuntos3 = juego.add.text(800, 20, "0", {font: "30px Arial", fill: "#FFF"});

    //_________________________-CAPTURAR PULSACION DE  TECLAS___________________________________

     cursor = juego.input.keyboard.createCursorKeys();






  },

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

       //this.state.start('Nivel');
  },
//*******************CHOQUES  DE  BLOQUES  PISO  base*********************
  choqueIzquierda:function()  {
  juego.physics.arcade.overlap(piso1,basePrimal, this.tocoUno, null, this);
  if(parar1==0) { piso1.body.velocity.x=+250; }
  else if (parar1==1)
  {
      if(espacio_piso2==0)
          {
                       piso1.body.velocity.x=0;
                       var m =piso1.position.x;
                       piso1.position.x=m-5;
                       espacio_piso2=1;

          }
  }
  },
  tocoUno:function()  {
    if(piso1.alive == false) { return; }
        parar1=1;
  },

  choqueDerecha:function()  {
  juego.physics.arcade.overlap(piso2,basePrimal, this.tocoDos, null, this);
  if(parar2==0) { piso2.body.velocity.x=-250; }
  else if (parar2==1) {
      if(espacio_piso1==0)
          {
                       piso2.body.velocity.x=0;
                       var m =piso2.position.x;
                       piso2.position.x=m+5;
                       espacio_piso1=1;

          }

                      }
  },
  tocoDos:function()  {
    if(piso2.alive == false) { return; }
        parar2=1;
  },
    pasarBloques:function()
    {
        if(uno!=null)

            {
                 if(x1==0) {
                         if(uno.position.x<=xpuntero  ) {
                                                         uno.body.velocity.x=+500;
                                                         }
                         if(uno.position.x>=xpuntero ){
                                                         uno.body.velocity.x=0;
                                                         xpuntero=uno.position.x+400;
                                                         x1=1;
                                            }

                     }


            }
        if(dos!=null)

            {
                 if(x2==0) {
                         if(dos.position.x<=xpuntero  ) {
                                                         dos.body.velocity.x=+500;
                                                         }
                         if(dos.position.x>=xpuntero ){
                                                         dos.body.velocity.x=0;
                                                         xpuntero=dos.position.x+400;
                                                         x2=1;
                                            }

                     }


            }
        if(tres!=null)

            {
                 if(x3==0) {
                         if(tres.position.x<=xpuntero  ) {
                                                         tres.body.velocity.x=+250;
                                                         }
                         if(tres.position.x>=xpuntero ){
                                                         tres.body.velocity.x=0;
                                                         xpuntero=tres.position.x+400;
                                                         x3=1;
                                            }

                     }


            }







    },

//********************************************************************************************
//**************************************** UPDATE       **************************************
//********************************************************************************************
//********************************************************************************************
  update:function()
  {


  //_________________________-BLOQUES  DERECHA IZQUIERDA_____________________
    time = juego.time.events.loop(0, this.choqueIzquierda, this);
    time = juego.time.events.loop(0, this.choqueDerecha, this);
     // time = juego.time.events.loop(0, this.moverBloques, this);

      //________________________ CHOLITO Y POSIBLES  COLITIONS_____________

    juego.physics.arcade.collide(cholito1,piso1);
    juego.physics.arcade.collide(cholito1,piso2);
    juego.physics.arcade.collide(cholito1,uno);
    juego.physics.arcade.collide(cholito1,dos);
    juego.physics.arcade.collide(cholito1,tres);



    //_____________________PARA MOVIMIENTO DEL CHOLITO ___________________________

    cholito1.body.velocity.x= 0;

    if( cursor.left.isDown)
          {
              cholito1.body.velocity.x= -80;
              cholito1.animations.play('izquierda');

                if(stop!="izquierda")
                  {
                      stop="izquierda";

                  }

          }
      else if(cursor.right.isDown)
          {
              cholito1.body.velocity.x= +80;
              cholito1.animations.play('derecha');

              if(stop!="derecha")
                  {
                      stop="derecha";

                  }

          }
      else
          {
              if(stop !="espera")
                  {
                      //personaje.animations.stop();
                      cholito1.animations.play('stop');

                  }
              stop="espera";
          }
     //____________________________PARA   BASE 1 __________________________________
      time = juego.time.events.loop(1000, this.pasarBloques, this);

     time=juego.time.events.loop(0,this.chocoUno,this);
     time=juego.time.events.loop(0,this.chocoDos,this);
     time=juego.time.events.loop(0,this.chocoTres,this);



      juego.physics.arcade.overlap(basePrimal, uno, this.choco_uno_basePrimal, null, this);
      juego.physics.arcade.overlap(basePrimal, dos, this.choco_dos_basePrimal, null, this);
      juego.physics.arcade.overlap(basePrimal, tres, this.choco_tres_basePrimal, null, this);


      juego.physics.arcade.overlap(cholito1, dos, this.choco_dos_cholito, null, this);
      juego.physics.arcade.overlap(cholito1, uno, this.choco_uno_cholito, null, this);
      juego.physics.arcade.overlap(cholito1, tres, this.choco_tres_cholito, null, this);
      //UNO
      juego.physics.arcade.overlap(uno, dos, this.choco_uno_dos, null, this);
      juego.physics.arcade.overlap(uno, tres, this.choco_uno_tres, null, this);




      if(uno!=null && uno.position.y!=555)
          {
              baseprimal_secundario_uno=false;

          }
      if(dos!=null && dos.position.y!=556)
              {
                  baseprimal_secundario_dos=false;

              }
      if(tres!=null && dos.position.y!=556)
              {
                  baseprimal_secundario_dos=false;

              }

    txtPuntos.text = uno.position.y+" --"+baseprimal_secundario_uno;
    txtPuntos2.text = dos.position.y+" --"+baseprimal_secundario_dos;



    // time=juego.time.events.loop(0,this.);
  },

  choco_dos_tres:function()
  {



  },
  choco_uno_tres:function()
  {
    //  if(baseprimal_secundario_uno==true )
      //  {

          //  alert("uno tres"+baseprimal_secundario_uno);


        //  }
  },
    choco_uno_dos:function()
    {
        if(baseprimal_secundario_uno==true &&dos.position.y>=450 )
          {

             dos.position.y=300;

          }
          if(baseprimal_secundario_dos==true &&uno.position.y>=450 )
            {

               uno.position.y=300;

            }
    },
     choco_tres_cholito:function()
    {
        tres.body.allowGravity=false;
        tres.body.immovable=true;

    },
    choco_dos_cholito:function()
    {



        dos.body.allowGravity=false;
        dos.body.immovable=true;



    },
    choco_uno_cholito:function()
    {
       uno.body.allowGravity=false;
        uno.body.immovable=true;


    },

    choco_uno_basePrimal:function() {uno.position.y=basePrimal.position.y-75; baseprimal_secundario_uno=true;},
    choco_dos_basePrimal:function() {dos.position.y=basePrimal.position.y-75; baseprimal_secundario_dos=true; },
    choco_tres_basePrimal:function() {dos.position.y=basePrimal.position.y-76; baseprimal_secundario_dos=true; },


chocoUno:function()
{
  var uno1=juego.physics.arcade.overlap(piso1, uno, null, null, this);
  var uno2=juego.physics.arcade.overlap(piso2, uno, null, null, this);
  var uno3=juego.physics.arcade.overlap(barra_menu, uno, null, null, this);



    if(uno1==true ||uno2==true||uno3==true)
        {
            var pos_barraMenu_y=piso2.position.y;

             if (uno.position.y>=pos_barraMenu_y) { uno.position.y=piso2.position.y-38;  }

        }

},
    chocoDos:function()
{


  var dos1=juego.physics.arcade.overlap(piso1, dos, null, null, this);
  var dos2=juego.physics.arcade.overlap(piso2, dos, null, null, this);
  var dos3=juego.physics.arcade.overlap(barra_menu, dos, null, null, this);

    if(dos1==true||dos2==true||dos3==true)
        {
            var pos_barraMenu_y=piso2.position.y;


             if (dos.position.y>=pos_barraMenu_y) { dos.position.y=piso2.position.y-38;  }
        }

},
        chocoTres:function()
{


  var tres1=juego.physics.arcade.overlap(piso1, tres, null, null, this);
  var tres2=juego.physics.arcade.overlap(piso2, tres, null, null, this);
  var tres3=juego.physics.arcade.overlap(barra_menu, tres, null, null, this);

    if(tres1==true||tres2==true||tres3==true)
        {
            var pos_barraMenu_y=piso2.position.y;


             if (tres.position.y>=pos_barraMenu_y) { tres.position.y=piso2.position.y-38;  }
        }

}

};
