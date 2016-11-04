
var cielo;
var piso;
var nuve;
var cholito1;
var piramide;
var piramide2;
var puntoNiveles=[0,0,0,0,0];
var puntoDB=2;

var Nivel =
{
  preload:function()
  {
    //cargamos  nuestras imagenes y sprites
    juego.load.image('cielo','img/degra.png');
    juego.load.image('piso','img/n_piso.png');
    juego.load.image('nuve','img/nuves.png');
    juego.load.spritesheet('cholito1','img/sprite_comple.png',100,200);
    juego.load.spritesheet('piramide','img/n_sprite2.png',500,500);
    juego.load.spritesheet('piramide2','img/n_sprite2.png',98,500);
  //para poder tner  mejor  rendimiento
    juego.forceSingleUpdate = true;

  },
  create:function()
  {
    //mostramos scenario cielo piso y  nueve
    cielo = juego.add.tileSprite(0,0,juego.width,juego.height,'cielo');
    piso  = juego.add.tileSprite(0,0,juego.width,juego.height,'piso');
    nuve  = juego.add.tileSprite(0,0,juego.width,juego.height,'nuve');
    //cargamso  el niño y le  damos animacion
    cholito1 =juego.add.sprite((juego.width/2)-400,(juego.height/2)+58,'cholito1');
    cholito1.animations.add('cholito1', [5,6, 7, 8]);
    cholito1.animations.play('cholito1', 4, true);
    //cargamos nuestra sprite ne  niveles  fotograma 1 de 500X500
    piramide =juego.add.sprite((juego.width/2)-200,(juego.height/2)-258,'piramide');
    piramide.animations.add('piramide', [1]);
    piramide.animations.play('piramide', 4, true);



  //remplazando cada nivel 0  por  1
   for (var x=0;x<puntoDB;x++)
   {
     puntoNiveles.splice(x, 0, 1);


   }



  },

  iniciarJuego:function()
  {

  },
  update: function(){
    //dando animacion a  nuestra nueve, que s e mueva en eje  X
      nuve.tilePosition.x -= 0.7;
      //variables  de posicion de sprites de nivel
      var j = 0;
      var a=198;

      //segun avance de punto  cambiamos de sprite  de nivel
      for (var i = 0; i < puntoDB; i++)
      {
      
        if (puntoNiveles[i]==1&& puntoDB !=5) {

          piramide2 =juego.add.sprite((juego.width/2)-a,(juego.height/2)-258,'piramide2');
          piramide2.animations.add('piramide', [j]);
          piramide2.animations.play('piramide', 4, true);

          j++;
          a=a-98;

        }
        else if (puntoDB==5) {
          piramide =juego.add.sprite((juego.width/2)-200,(juego.height/2)-258,'piramide');
          piramide.animations.add('piramide', [0]);
          piramide.animations.play('piramide', 4, true);
        }

      }



  }


};
