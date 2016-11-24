             //PRIMEROS DEL CANVAS
             var cielo;
             var fondoDegra;
             var piso1;
             var piso2;
             var cholito1;
             var basePrimal;
             var cursor;
             //MENU
             var barra_menu;
             var b_atras;
             var b_siguiente;
             var b_home;
             var actualizar;
             var cholito_negro;
             //DESPLAXAR BLOQUES AL CAMPO
             var x1 = 0;
             var x2 = 0;
             var x3 = 0;
             var x4 = 0;
             var x5 = 0;
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

var Juego1_2 =
     {
         preload:function()
         {



         },
         create:function()
         {
           juego.physics.startSystem(Phaser.Physics.ARCADE);
           fondoDegra = new Phaser.Rectangle(0, 0,largo, altura);
           cielo = juego.add.tileSprite(0,0,juego.width,juego.height,'cielo');

           piso1=juego.add.sprite(-700,juego.height-250,'piso');
           piso2=juego.add.sprite(juego.width-100,juego.height-250,'piso');

           cholito1=juego.add.sprite(50,100,'cholito1');
           mochila=juego.add.sprite(700,30,'mochila')
           mochila.animations.add('stop',[2],20,true);
           mochila.animations.play('stop');
           mochila.anchor.setTo(0.5);




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
           scroolBar=juego.add.tileSprite(cholito_negro.position.x+50,ye+20,300,40,'scroolBar2');

          var base = Math.floor((Math.random() * 2) + 4);

           base=4;

           if (base==4)      {
             basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'cuatro');

             uno=juego.add.sprite(50,juego.height/2-200,'uno');
             juego.physics.arcade.enable([uno]);
             uno.body.allowGravity=false;
             uno.body.inmovable=true;
             uno.body.bounce.y=0;
             uno.inputEnabled = true;
             uno.anchor.set(0.5);

             uno.input.enableDrag();
             uno.input.boundsRect = fondoDegra;

             tres=juego.add.sprite(0,juego.height/2-200,'tres');
             juego.physics.arcade.enable([tres]);
             tres.body.allowGravity=false;
             tres.body.inmovable=true;

             tres.inputEnabled = true;
             tres.anchor.set(0.5);

             tres.input.enableDrag();
             tres.input.boundsRect = fondoDegra;

             for (var i = 0; i < 2; i++)
              {
                var ran= Math.floor(Math.random()*4)+1;

                if (ran==2&& b==0) {
                  dos=juego.add.sprite(25,juego.height/2-200,'dos');
                  juego.physics.arcade.enable([dos]);
                  dos.body.allowGravity=false;
                  dos.body.inmovable=true;

                  dos.inputEnabled = true;
                  dos.anchor.set(0.5);

                  dos.input.enableDrag();
                  dos.input.boundsRect = fondoDegra;

                  b=1;
                     }
                if (ran==3&& c==0)
                 {
                   cuatro=juego.add.sprite(0,juego.height/2-200,'dos');
                   juego.physics.arcade.enable([cuatro]);
                   cuatro.body.allowGravity=false;
                   cuatro.body.inmovable=true;

                   cuatro.inputEnabled = true;
                   cuatro.anchor.set(0.5);

                   cuatro.input.enableDrag();
                   cuatro.input.boundsRect = fondoDegra;


                   c=1;

                    }





            }



          }
          else if (base==5)  {basePrimal=juego.add.sprite(juego.width/2,juego.height-137,'cinco');   }






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
           juego.physics.arcade.collide(cholito1,piso1);
           juego.physics.arcade.collide(cholito1,piso2);


         }

     };
