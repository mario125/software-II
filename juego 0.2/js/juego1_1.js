
            //PRIMEROS DEL CANVAS
             var cielo;
             var fondoDegra;
             var piso1;
             var piso2;
             var cholito1;
             var mochila;
             var basePrimal;
             var cursor;

             //MENU
             var barra_menu;
             var b_atras;
             var b_siguiente;
             var b_home;
             var actualizar;
             var cholito_negro;
             var scroolBar;
             //DESPLAXAR BLOQUES AL CAMPO
             var x1 = 0;
             var x2 = 0;
             var x3 = 0;
             var x4 = 0;
             var x5 = 0;
             var x6 = 0;
             var xpuntero = 90;
             //PARAR  PISO AL   COLICIONAR  CON  BASE
             var parar1 = 0;
             var parar2 = 0;
             var espacio_piso2 = 0;
             var espacio_piso1 = 0;
             //BLOQUES DE JUEGO
             var uno;
             var dos;
             var tres;
             var cuatro;
             var cinco;
             var a = 0 ;
             var b = 0 ;
             var c = 0 ;
             //COLITION  DE  BLOQUES  CON PISO1 PISO2 MENU
             var  uno1;
             var  uno2;
             var  uno3;

             var  dos1;
             var  dos2;
             var  dos3;

             var  tres1;
             var  tres2;
             var  tres3;

             var  cuatro1;
             var  cuatro2;
             var  cuatro3;

             var  cinco1;
             var  cinco2;
             var  cinco3;
             // CHOLITO
             var stop="arriba";
             //SI  CHOCA   CON BASE  PRIMAL
             var baseprimal_secundario_uno=false;
             var baseprimal_secundario_dos=false;
             var baseprimal_secundario_tres=false;
             var baseprimal_secundario_cuatro=false;
             var baseprimal_secundario_cinco=false;
             //TXT PUNTOS
             var txtPunto1;
             var txtPunto2;
             //CHOCAR CON mochila
             var mochilaPuntero=0;


var Juego1_1 = {
    preload:function()
    {
               juego.load.image('cielo','img/degra.png');
               juego.load.image('nuve','img/nuves.png');
               juego.load.image('bar_menu','img/barra_menu.png');
               juego.load.image('piso','img/piso2.png');

               juego.load.spritesheet('cholito1','img/sprite_comple2.png',70,185);
               juego.load.spritesheet('mochila','img/mochila.png',60,60);

               juego.load.image('cinco','img/cinco.png');
               juego.load.image('cuatro','img/cuatro.png');
               juego.load.image('tres','img/tres.png');
               juego.load.image('dos','img/dos.png');
               juego.load.image('uno','img/uno.png');

    },
    create:function()
    {
               juego.physics.startSystem(Phaser.Physics.ARCADE);
               fondoDegra = new Phaser.Rectangle(0, 0,largo, altura);
               cielo = juego.add.tileSprite(0,0,juego.width,juego.height,'cielo');

               piso1=juego.add.sprite(-700,juego.height-250,'piso');
               piso2=juego.add.sprite(juego.width-100,juego.height-250,'piso');

               cholito1=juego.add.sprite(50,100,'cholito1');
               mochila=juego.add.sprite(50,juego.height/2-200,'mochila')



               cholito1.animations.add('izquierda', [0, 1, 2, 3], 8, true);
               cholito1.animations.add('stop', [4], 20, true);
               cholito1.animations.add('derecha', [5, 6, 7, 8], 8, true);
               cholito1.animations.add('llora', [9], 10, true);

               mochila.animations.add('aniMochila',[0,1,2],6,true);
               mochila.animations.add('stop',[2],20,true);



               barra_menu=juego.add.tileSprite(0,juego.height-100,juego.width,100,'bar_menu');
               var ye = (barra_menu.position.y)+4;
               var ex =(barra_menu.position.x)+4;
               b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
               b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
               b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
               b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
               cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
               scroolBar=juego.add.tileSprite(cholito_negro.position.x+50,ye+20,300,40,'scroolBar');

                var base = Math.floor((Math.random() * 2) + 2);



               if (base==2)
                {
                 basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'dos');
           uno=juego.add.sprite(50,juego.height/2-200,'uno');
           juego.physics.arcade.enable([uno]);
           uno.body.allowGravity=false;
           uno.body.inmovable=true;
           uno.body.bounce.y=0;
           uno.inputEnabled = true;
           uno.anchor.set(0.5);

           uno.input.enableDrag();
           uno.input.boundsRect = fondoDegra;

           dos=juego.add.sprite(25,juego.height/2-200,'uno');
           juego.physics.arcade.enable([dos]);
           dos.body.allowGravity=false;
           dos.body.inmovable=true;

           dos.inputEnabled = true;
           dos.anchor.set(0.5);

           dos.input.enableDrag();
           dos.input.boundsRect = fondoDegra;

         for (var i = 1; i <=2; i++) {
                   var ran= Math.floor(Math.random()*4)+1;

                   if (ran==4&& b==0) {
           cuatro=juego.add.sprite(25,juego.height/2-200,'cuatro');
           juego.physics.arcade.enable([cuatro]);
           cuatro.body.allowGravity=false;
           cuatro.body.inmovable=true;

           cuatro.inputEnabled = true;
           cuatro.anchor.set(0.5);

           cuatro.input.enableDrag();
           cuatro.input.boundsRect = fondoDegra;

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
               else if (base==3)
               {
                   basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'tres');



           uno=juego.add.sprite(50,juego.height/2-200,'uno');
           juego.physics.arcade.enable([uno]);
           uno.body.allowGravity=false;
           uno.body.inmovable=true;

           uno.body.bounce.y=0;

           uno.inputEnabled = true;
           uno.anchor.set(0.5);

           uno.input.enableDrag();
           uno.input.boundsRect = fondoDegra;

           dos=juego.add.sprite(25,juego.height/2-200,'dos');
           juego.physics.arcade.enable([dos]);
           dos.body.allowGravity=false;
           dos.body.inmovable=true;

           dos.inputEnabled = true;
           dos.anchor.set(0.5);

           dos.input.enableDrag();
           dos.input.boundsRect = fondoDegra;

           for (var i = 1; i <=2; i++) {
           var ran= Math.floor(Math.random()*4)+1;

           if (ran==4&& b==0) {
           cuatro=juego.add.sprite(25,juego.height/2-200,'cuatro');
           juego.physics.arcade.enable([cuatro]);
           cuatro.body.allowGravity=false;
           cuatro.body.inmovable=true;

           cuatro.inputEnabled = true;
           cuatro.anchor.set(0.5);

           cuatro.input.enableDrag();
           cuatro.input.boundsRect = fondoDegra;

           b=1;
           }
          if (ran==3&& c==0) {
          cinco=juego.add.sprite(0,juego.height/2-200,'cinco');
          juego.physics.arcade.enable([cinco]);
          cinco.body.allowGravity=false;
          cinco.body.inmovable=true;

          cinco.inputEnabled = true;
          cinco.anchor.set(0.5);

          cinco.input.enableDrag();
          cinco.input.boundsRect = fondoDegra;


          c=1;
          }

                 }



               }


               juego.physics.arcade.enable([piso1,piso2,basePrimal,cholito1,barra_menu,mochila]);
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
               mochila.body.allowGravity=false;
               mochila.body.inmovable=true;

               txtPunto1 = juego.add.text(200, 20, "0", {font: "30px Arial", fill: "#FFF"});
               txtPunto2 = juego.add.text(500, 20, "0", {font: "30px Arial", fill: "#FFF"});
               cholito1.animations.play('stop');
             cursor = juego.input.keyboard.createCursorKeys();


    },
    update:function()
    {

             time = juego.time.events.loop(0, this.choqueIzquierda, this);
             time = juego.time.events.loop(0, this.choqueDerecha, this);
             time = juego.time.events.loop(1000, this.pasarBloques, this);
             time = juego.time.events.loop(2000, this.PasarNivel, this);

             juego.physics.arcade.collide(cholito1,piso1);
             juego.physics.arcade.collide(cholito1,piso2);
             juego.physics.arcade.collide(cholito1,uno);
             juego.physics.arcade.collide(cholito1,dos);
             juego.physics.arcade.collide(cholito1,tres);
             juego.physics.arcade.collide(cholito1,cuatro);
             juego.physics.arcade.collide(cholito1,cinco);
             var jas=juego.physics.arcade.collide(cholito1,mochila);


             time=juego.time.events.loop(0,this.chocoUno,this);
             time=juego.time.events.loop(0,this.chocoDos,this);
             time=juego.time.events.loop(0,this.chocoTres,this);
             time=juego.time.events.loop(0,this.chocoCuatro,this);
             time=juego.time.events.loop(0,this.chocoCinco,this);

             cholito1.body.velocity.x= 0;


             juego.physics.arcade.overlap(cholito1, dos, this.choco_uno_cholito, null, this);
             juego.physics.arcade.overlap(cholito1, uno, this.choco_dos_cholito, null, this);
             juego.physics.arcade.overlap(cholito1, tres, this.choco_tres_cholito, null, this);
             juego.physics.arcade.overlap(cholito1, cuatro, this.choco_cuatro_cholito, null, this);
             juego.physics.arcade.overlap(cholito1, cinco, this.choco_cinco_cholito, null, this);
             juego.physics.arcade.overlap(cholito1, mochila, this.choco_mochila_cholito, null, this);

             juego.physics.arcade.overlap(basePrimal, uno, this.choco_uno_basePrimal, null, this);
             juego.physics.arcade.overlap(basePrimal, dos, this.choco_dos_basePrimal, null, this);


             juego.physics.arcade.overlap(uno, dos, this.choco_uno_dos, null, this);






             if(uno!=null && uno.position.y!=536)
                 {
                     baseprimal_secundario_uno=false;
                     uno.inputEnabled = true;
                     dos.inputEnabled = true;

                 }
             if(dos!=null && dos.position.y!=536)
                     {
                         baseprimal_secundario_dos=false;
                         uno.inputEnabled = true;
                         dos.inputEnabled = true;

                     }
            if(mochila.position.y!=30)
            {
              mochila.animations.play('aniMochila');
            }
            if (mochila.position.y==30) {
              mochila.animations.play('stop')
            }
            if(baseprimal_secundario_uno&&baseprimal_secundario_dos==true&&mochilaPuntero==0)
            {
              uno.inputEnabled = false;
              dos.inputEnabled = false;
              cholito1.body.velocity.x= +200;
              cholito1.animations.play('derecha');
              if (jas==true) {

                cholito1.body.velocity.x= 0;
                cholito1.animations.play('stop');

                mochila.position.y=30;
                mochila.anchor.setTo(0.5);
                mochila.position.x=700;
                mochilaPuntero=1;


              }
            }
                     txtPunto1.text=" NIVEL 1 PUNTOS:";
                     txtPunto2.text=0;






    },

    PasarNivel:function(){
    if (mochila.position.y==30) {
      this.state.start('Juego1_2');


    }
  },

    choco_uno_dos:function(){


      if(baseprimal_secundario_uno==true &&dos.position.y>=450 )
        {


           dos.position.y=300;

        }
        if(baseprimal_secundario_dos==true &&uno.position.y>=450 )
          {

             uno.position.y=300;

          }
    },



    choco_uno_basePrimal:function(){uno.position.y=basePrimal.position.y-75; baseprimal_secundario_uno=true;},
    choco_dos_basePrimal:function(){dos.position.y=basePrimal.position.y-75; baseprimal_secundario_dos=true;},




    choco_uno_cholito:function(){uno.body.allowGravity=false; uno.body.immovable=true;},
    choco_dos_cholito:function(){dos.body.allowGravity=false; dos.body.immovable=true;},
    choco_tres_cholito:function(){tres.body.allowGravity=false; tres.body.immovable=true;},
    choco_cuatro_cholito:function(){cuatro.body.allowGravity=false; cuatro.body.immovable=true;},
    choco_cinco_cholito:function(){cinco.body.allowGravity=false; cinco.body.immovable=true;},
    choco_mochila_cholito:function(){ mochila.body.allowGravity=false; mochila.body.immovable=true;},


    chocoUno:function(){

        var uno1=juego.physics.arcade.overlap(piso1, uno, null, null, this);
        var uno2=juego.physics.arcade.overlap(piso2, uno, null, null, this);
        var uno3=juego.physics.arcade.overlap(barra_menu, uno, null, null, this);



       if(uno1==true ||uno2==true||uno3==true)  {
            var pos_barraMenu_y=piso2.position.y;
             if (uno.position.y>=pos_barraMenu_y) { uno.position.y=piso2.position.y-38;  }

        }
     },
    chocoDos:function(){
        var dos1=juego.physics.arcade.overlap(piso1, dos, null, null, this);
        var dos2=juego.physics.arcade.overlap(piso2, dos, null, null, this);
        var dos3=juego.physics.arcade.overlap(barra_menu, dos, null, null, this);



       if(dos1==true ||dos2==true||dos3==true)  {
            var pos_barraMenu_y=piso2.position.y;
             if (dos.position.y>=pos_barraMenu_y) { dos.position.y=piso2.position.y-38;  }

        }
    },
    chocoTres:function(){
        var tres1=juego.physics.arcade.overlap(piso1, tres, null, null, this);
        var tres2=juego.physics.arcade.overlap(piso2, tres, null, null, this);
        var tres3=juego.physics.arcade.overlap(barra_menu, tres, null, null, this);



       if(tres1==true ||tres2==true||tres3==true)  {
            var pos_barraMenu_y=piso2.position.y;
             if (tres.position.y>=pos_barraMenu_y) { tres.position.y=piso2.position.y-38;  }

        }
    },
    chocoCuatro:function(){
        var cuatro1=juego.physics.arcade.overlap(piso1, cuatro, null, null, this);
        var cuatro2=juego.physics.arcade.overlap(piso2, cuatro, null, null, this);
        var cuatro3=juego.physics.arcade.overlap(barra_menu, cuatro, null, null, this);



       if(cuatro1==true ||cuatro2==true||cuatro3==true)  {
            var pos_barraMenu_y=piso2.position.y;
             if (cuatro.position.y>=pos_barraMenu_y) { cuatro.position.y=piso2.position.y-38;  }

        }
    },
    chocoCinco:function(){
        var cinco1=juego.physics.arcade.overlap(piso1, cinco, null, null, this);
        var cinco2=juego.physics.arcade.overlap(piso2, cinco, null, null, this);
        var cinco3=juego.physics.arcade.overlap(barra_menu, cinco, null, null, this);



       if(cinco1==true ||cinco2==true||cinco3==true)  {
            var pos_barraMenu_y=piso2.position.y;
             if (cinco.position.y>=pos_barraMenu_y) { cinco.position.y=piso2.position.y-38;  }

        }
    },

    choqueIzquierda:function()   {
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
          tocoUno:function()     {
            if(piso1.alive == false) { return; }
                parar1=1;
          },
    choqueDerecha:function()     {
         juego.physics.arcade.overlap(piso2,basePrimal, this.tocoDos, null, this);
         if(parar2==0) { piso2.body.velocity.x=-250; }
         else if (parar2==1) {
             if(espacio_piso1==0){
                                   piso2.body.velocity.x=0;
                                   var m =piso2.position.x;
                                   piso2.position.x=m+5;
                                   espacio_piso1=1;

                               }

                             }
         },
          tocoDos:function()     {
           if(piso2.alive == false) { return; }
               parar2=1;
         },
    pasarBloques:function()      {
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
        if(cuatro!=null)

            {
                 if(x4==0) {
                         if(cuatro.position.x<=xpuntero  ) {
                                                         cuatro.body.velocity.x=+250;
                                                         }
                         if(cuatro.position.x>=xpuntero ){
                                                         cuatro.body.velocity.x=0;
                                                         xpuntero=cuatro.position.x+400;
                                                         x4=1;
                                            }

                     }


            }
            if(cinco!=null)

            {
                 if(x5==0) {
                         if(cinco.position.x<=xpuntero  ) {
                                                         cinco.body.velocity.x=+250;
                                                         }
                         if(cinco.position.x>=xpuntero ){
                                                         cinco.body.velocity.x=0;
                                                         xpuntero=cinco.position.x+400;
                                                         x5=1;
                                            }

                     }


            }
            if (mochila!=null) {

              if (x6==0) {
                if (mochila.position.x<=juego.width-250) {
                  mochila.body.velocity.x=+400;

                }
                if (mochila.position.x>=juego.width-250) {
                  mochila.body.velocity.x=0;
                  mochila.position.y=piso1.position.y-55;
                  x6=1;

                }


              }




            }

            },



};
