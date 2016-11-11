
var cielo;
var piso;
var nuve;
var cholito1;
var cholito_negro;
var piramide;
var piramide2;
var puntoNiveles=[0,0,0,0,0];
var puntoDB=4;
var barra_menu;
var pasto;

//BOTONES
var b_atras;
var b_siguiente;
var b_actualizar;
var b_home;
var b_avanzado;
var b_basico;

// fullcreen
var largo = screen.width;
var altura = screen.height;

var Nivel =
{
  preload:function()
  {
    //cargamos  nuestras imagenes y sprites
    juego.load.image('cielo','img/degra.png');

    juego.load.image('nuve','img/nuves.png');
    juego.load.image('bar_menu','img/barra_menu.png');
    juego.load.image('pasto','img/piso.png');

    juego.load.image('b_atras','img/atras.png');
    juego.load.image('b_siguiente','img/sig.png');
    juego.load.image('b_actualizar','img/reanudar.png');
    juego.load.image('b_home','img/home.png');
    juego.load.image('b_avanzado','img/b_avanzado.png');
    juego.load.image('b_basico','img/b_basico.png');
    juego.load.image('cholito_negro','img/cholito_negro.png');

    juego.load.spritesheet('cholito1','img/sprite_comple.png',100,200);
    juego.load.spritesheet('piramide','img/n_sprite2.png',500,500);
    juego.load.spritesheet('piramide2','img/n_sprite2.png',98,500);
  //para poder tner  mejor  rendimiento
    juego.forceSingleUpdate = true;

  },
  create:function()
  {

    juego.scale.pageAlignHorizontally = true;
    juego.scale.pageAlignVertically = true;
    juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;


    cielo = juego.add.tileSprite(0,0,juego.width,juego.height,'cielo');

    nuve  = juego.add.tileSprite(0,0,juego.width,juego.height,'nuve');



    pasto=juego.add.tileSprite(0,juego.height-200,juego.width,150,'pasto');

    cholito1 =juego.add.sprite((juego.width/2)-300,(juego.height/2)+75,'cholito1');
    cholito1.animations.add('cholito1', [5,6, 7, 8]);
    cholito1.animations.play('cholito1', 4, true);
    cholito1.scale.setTo(0.8,0.8);
    piramide =juego.add.sprite((juego.width/2)-200,(juego.height/2)-274,'piramide');
    piramide.animations.add('piramide', [1]);
    piramide.animations.play('piramide', 4, true);

    barra_menu=juego.add.tileSprite(0,juego.height-100,juego.width,100,'bar_menu');
    var ye = (barra_menu.position.y)+4;
    var ex =(barra_menu.position.x)+4;

    b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
    b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
    b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
    b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
    cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');

    b_avanzado=this.add.button(ex,ye-450,'b_avanzado',this.Avanzado,this);
    b_basico=this.add.button(ex,ye-320,'b_basico',this.Basico,this);



    if (largo>=768&&largo<=1024) {

       if (largo>=altura) {
         barra_menu.position.y=juego.height-80;
         var but_baj=barra_menu.position.y+20;
         b_atras.position.y=but_baj;
         b_siguiente.position.y=but_baj;
         b_home.position.y=but_baj;
         b_actualizar.position.y=but_baj;
         cholito_negro.position.y=but_baj;
         pasto.position.y=but_baj-125;
         b_avanzado.position.y=(juego.height/2)-70;
         b_basico.position.y=b_avanzado.position.y-70;
         cholito1.position.y=juego.height-250;
         piramide.position.y=juego.height-606;




         b_siguiente.position.x=50;
         b_home.position.x=96;
         b_actualizar.position.x=142;
         cholito_negro.position.x=(juego.width)-300;
         cholito1.position.x=(juego.width/2)-170;
         piramide.position.x=(juego.width/2)-100;



         piramide.scale.setTo(0.9,0.9);
         pasto.scale.setTo(1,0.7);

         b_atras.scale.setTo(0.7,0.7);
         b_siguiente.scale.setTo(0.7,0.7);
         b_home.scale.setTo(0.7,0.7);
         b_actualizar.scale.setTo(0.7,0.7);
         cholito_negro.scale.setTo(0.7,0.7);
         b_basico.scale.setTo(0.7,0.5);
         b_avanzado.scale.setTo(0.7,0.5);
         cholito1.scale.setTo(0.5,0.5);


       }
       else if (largo<=altura) {
         barra_menu.position.y=juego.height-80;
         var but_baj=barra_menu.position.y+20;
         b_atras.position.y=but_baj;
         b_siguiente.position.y=but_baj;
         b_home.position.y=but_baj;
         b_actualizar.position.y=but_baj;
         cholito_negro.position.y=but_baj;
         pasto.position.y=but_baj-125;
         b_avanzado.position.y=(juego.height/2)-70;
         b_basico.position.y=b_avanzado.position.y-70;
         cholito1.position.y=juego.height-250;
         piramide.position.y=juego.height-606;




         b_siguiente.position.x=50;
         b_home.position.x=96;
         b_actualizar.position.x=142;
         cholito_negro.position.x=(juego.width)-300;
         cholito1.position.x=(juego.width/2)-170;
         piramide.position.x=(juego.width/2)-100;



         piramide.scale.setTo(0.9,0.9);
         pasto.scale.setTo(1,0.7);

         b_atras.scale.setTo(0.7,0.7);
         b_siguiente.scale.setTo(0.7,0.7);
         b_home.scale.setTo(0.7,0.7);
         b_actualizar.scale.setTo(0.7,0.7);
         cholito_negro.scale.setTo(0.7,0.7);
         b_basico.scale.setTo(0.7,0.5);
         b_avanzado.scale.setTo(0.7,0.5);
         cholito1.scale.setTo(0.5,0.5);



       }

    }
    //********************* CELULAR********************
     else if(largo>=319&&largo<=650)
         {
           if (largo>=altura)
           {
             barra_menu.position.y=juego.height-50;
             var but_baj=barra_menu.position.y+7;
             b_atras.position.y=but_baj;
             b_siguiente.position.y=but_baj;
             b_home.position.y=but_baj;
             b_actualizar.position.y=but_baj;
             cholito_negro.position.y=but_baj;
             pasto.position.y=but_baj-80;
             b_avanzado.position.y=(juego.height/2)-70;
             b_basico.position.y=b_avanzado.position.y-50;
             cholito1.position.y=juego.height-178;
             piramide.position.y=juego.height-302;




             b_siguiente.position.x=35;
             b_home.position.x=67;
             b_actualizar.position.x=99;
             cholito_negro.position.x=(juego.width)-190;
             cholito1.position.x=(juego.width/2)-170;
             piramide.position.x=(juego.width/2)-100;



             piramide.scale.setTo(0.5,0.4);
             pasto.scale.setTo(1,0.5);

             b_atras.scale.setTo(0.5,0.5);
             b_siguiente.scale.setTo(0.5,0.5);
             b_home.scale.setTo(0.5,0.5);
             b_actualizar.scale.setTo(0.5,0.5);
             cholito_negro.scale.setTo(0.5,0.5);
             b_basico.scale.setTo(0.5,0.4);
             b_avanzado.scale.setTo(0.5,0.4);
             cholito1.scale.setTo(0.4,0.4);


           }
           else if (altura>=largo) {
            // barra_menu=juego.add.tileSprite(0,juego.height-100,juego.width,100,'bar_menu');

             barra_menu.position.y=juego.height-50;
             var but_baj=barra_menu.position.y+7;
             b_atras.position.y=but_baj;
             b_siguiente.position.y=but_baj;
             b_home.position.y=but_baj;
             b_actualizar.position.y=but_baj;
             cholito_negro.position.y=but_baj;
             pasto.position.y=but_baj-80;
             b_avanzado.position.y=(b_basico.position.y)-50;
             cholito1.position.y=juego.height-198;
             piramide.position.y=juego.height-503;




             b_siguiente.position.x=35;
             b_home.position.x=67;
             b_actualizar.position.x=99;
             cholito_negro.position.x=(juego.width)-190;
             cholito1.position.x=(juego.width/2)-170;
             piramide.position.x=(juego.width/2)-100;



             piramide.scale.setTo(0.5,0.8);
             pasto.scale.setTo(1,0.5);

             b_atras.scale.setTo(0.5,0.5);
             b_siguiente.scale.setTo(0.5,0.5);
             b_home.scale.setTo(0.5,0.5);
             b_actualizar.scale.setTo(0.5,0.5);
             cholito_negro.scale.setTo(0.5,0.5);
             b_basico.scale.setTo(0.5,0.4);
             b_avanzado.scale.setTo(0.5,0.4);
             cholito1.scale.setTo(0.5,0.5);


           }


         }






  },
  Basico:function()
  {
    alert("Basico");

  },
  Avanzado:function()
  {
    alert("Abanzado");
  },
  Actualizar:function()
  {
    alert("boton actializar");
  },
  Home:function()
  {
    alert("boton Home");
  },

  Siguiente:function()
  {
    alert('boton Siguiente');

  },
  Atras:function()
  {
    alert("boton  Atras");
  },
  iniciarJuego:function()
  {

  },
  update: function(){
    //dando animacion a  nuestra nueve, que s e mueva en eje  X
      nuve.tilePosition.x -= 0.7;






  }


};
