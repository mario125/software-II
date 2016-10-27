var game = new Phaser.Game(800, 600, Phaser.CANVAS, '');

          var personaje;
          var cursors;
          var fondo;
          var plataforma1;
          var plataforma2;
          var plataforma3;
          var cursor;
          var stop="arriba";
          var time;
          var parar =0;//para  parar las plataformas  1  y  2  cuando colicionen
          var parar2 =0;
          var pararojo =0;
          var punteroBasePrimal = 0; // verificador  que  se cre solo una  base primal
          var fondoDegra; // limite para los  cubos a seleccionar

          // para los   boquecillos
          var rojo;
          var mora;
          var amar;
          var com;

var estadoPrincipal={

  preload:function()
  {

      game.load.image('plataforma','img/platform.png');
      game.load.spritesheet('personaje','img/dude.png',32,48);
      game.load.image('fondo','img/fondo.png');
      game.load.image('rojo','img/rojo.png');
      game.load.image('mora','img/mora.png');
      game.load.image('amar','img/amar.png');
      game.load.image('com','img/com.png');





  },

  create:function()
  {
      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.stage.backgroundColor = '#124184';

	  //fonde de cubos
	    fondoDegra = new Phaser.Rectangle(0, 0, 800, 600);
	      var graphics = game.add.graphics(fondoDegra.x, fondoDegra.y);
    graphics.beginFill(0x011000);
    graphics.drawRect(0, 0, fondoDegra.width, fondoDegra.height);





      plataforma1=game.add.sprite(-200,450,'plataforma');
      plataforma2=game.add.sprite(600,450,'plataforma');
	  plataforma3=game.add.sprite(250,550,'mora');

      personaje=game.add.sprite(100,100,'personaje');


      personaje.animations.add('izquierda', [0, 1, 2, 3], 10, true);
      personaje.animations.add('stop', [4], 20, true);
      personaje.animations.add('derecha', [5, 6, 7, 8], 10, true);


      game.physics.arcade.enable([plataforma1,plataforma2,personaje,plataforma3]);
      game.physics.arcade.gravity.y=200;


      personaje.body.bounce.y=0.5;

      //limitar al personaje
      //personaje.body.collideWorldBounds=true;


      plataforma1.body.allowGravity=false;
      plataforma1.body.immovable=true;

      plataforma2.body.allowGravity=false;
      plataforma2.body.immovable=true;
	   plataforma3.body.allowGravity=false;
       plataforma3.body.immovable=true;






      cursor = game.input.keyboard.createCursorKeys();

	  time = game.time.events.loop(0, this.crearBase, this);















  },
  crearBase:function()
  {


    if (punteroBasePrimal==0)
    {
       var hueco = 4;//Math.floor(Math.random()*5)+2;
       //alert(hueco);
       if(hueco==4)
       {
         alert("rojo");
           rojo = game.add.sprite(0, 0, 'rojo');
		   game.physics.arcade.enable([rojo]);
            rojo.body.allowGravity=false;
       rojo.body.immovable=true;



    rojo.inputEnabled = true;
    rojo.anchor.set(0.5);

    rojo.input.enableDrag();
    rojo.input.boundsRect = fondoDegra;

       }
       else if (hueco==5)
       {
         alert("mora");
         mora= game.add.sprite(400,250,'mora');
		 mora.inputEnabled=true;

       }


       punteroBasePrimal=2;
    }







  },

  crearColumna:function()
  {

  // personaje.body.velocity.x= +150;
  game.physics.arcade.overlap(plataforma1, plataforma3, this.tocoTubo, null, this);

  if(parar==0)
  {
    plataforma1.body.velocity.x=+150;


  }
  else if (parar==1) {
    plataforma1.body.velocity.x=0;
   // plataforma2.body.velocity.x=0;
  }








  },

	 crearColumna2:function()
  {

  // personaje.body.velocity.x= +150;

  game.physics.arcade.overlap(plataforma2, plataforma3, this.tocoTubo2, null, this);


	  if(parar2==0)
  {

    plataforma2.body.velocity.x=-150;

  }
  else if (parar2==1) {
    plataforma2.body.velocity.x=0;
   // plataforma2.body.velocity.x=0;
  }






  },

	 crearColumna3:function()
  {

  // personaje.body.velocity.x= +150;

  game.physics.arcade.overlap(plataforma1, rojo, this.tocoPlataforma, null, this);


	  if(pararojo==0)
  {



  }
  else if (pararojo==1) {
     alert("toco");

	  rojo.body.collideCallback();

  }






  },


  update:function()
  {
      //animacion del   juego
      //fondoJuego.tilePosition.x -=1;

      time = game.time.events.loop(0, this.crearColumna, this);
	  time = game.time.events.loop(0, this.crearColumna2, this);
	  time = game.time.events.loop(0, this.crearColumna3, this);

	  time = game.time.events.loop(0, this.tocoPlataforma, this);

      game.physics.arcade.collide(personaje,plataforma1);



      personaje.body.velocity.x= 0;


      if( cursor.left.isDown)
          {
              personaje.body.velocity.x= -150;
              personaje.animations.play('izquierda');

                if(stop!="izquierda")
                  {
                      stop="izquierda";

                  }

          }
      else if(cursor.right.isDown)
          {
              personaje.body.velocity.x= +150;
              personaje.animations.play('derecha');

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
                      personaje.animations.play('stop');
                  }
              stop="espera";
          }

  },
  tocoTubo: function(){
	 // alert("parar"+parar);

    if(plataforma1.alive == false)
        return;
        parar=1;
    plataforma1.alive = false;


    //plataforma1.forEachAlive(function(t){ //plataforma1.body.velocity.x = 500;  }, this);

},
		  tocoPlataforma: function(){
	 // alert("parar"+parar);

        if( rojo.position.y >460)
        {
            rojo.position.y =0;
        }



    //plataforma1.forEachAlive(function(t){ //plataforma1.body.velocity.x = 500;  }, this);

},
	  tocoTubo2: function(){
	 // alert("parar"+parar);

    if(plataforma2.alive == false)
        return;
        parar2=1;
    plataforma2.alive = false;


    //plataforma1.forEachAlive(function(t){ //plataforma1.body.velocity.x = 500;  }, this);

}

};
game.state.add('principal',estadoPrincipal);
game.state.start('principal');
