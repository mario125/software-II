
var boton;
var nuve;
var fondo;
var nino;

var Menu = {
  preload:function()
  {
    //cargamos  las  imagenes y  sprites
    juego.stage.backgroundColor = '#FFF';
    juego.load.spritesheet('nino','img/sprite1.png',100,200);
    juego.load.image('fond', 'img/menu.png');
    juego.load.image('nueve','img/nuves.png');
    juego.load.image('boton','img/btn.png');
  },

  create:function()
  {
    // mostramos en  el  CANVAS todo  lo  cargado

    // codigo para  poder dar fullcreen  y responsi  vertical  y orizantal (APLICANDO AL JUEGO)
    juego.scale.pageAlignHorizontally = true;
		juego.scale.pageAlignVertically = true;
    juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;


    //mostramos  nuestro  fondo
    fondo = juego.add.tileSprite(0,0,juego.width,juego.height,'fond');
    //mostrando la nuve
    nuve = juego.add.tileSprite(0,0,juego.width,juego.height,'nueve');
    //mostrando el  boton JUGAR y asignando " iniciarJuego"
    boton = this.add.button(juego.width/2, (juego.height/2)+260, 'boton', this.iniciarNivel, this);
    boton.anchor.setTo(0.5);
    //mostrando el  niño   y  dando  animacion  por  cada  sprite  0,1,2,3  en tiempo de 4
    nino =juego.add.sprite((juego.width/2)-25,(juego.height/2)-45,'nino');
    nino.animations.add('nino', [0, 1, 2, 3]);
    nino.animations.play('nino', 4, true);






  },

  update: function(){
    //dando animacion a  nuestra nueve, que s e mueva en eje  X
      nuve.tilePosition.x -= 0.7;
  },
  iniciarNivel:function()
  {
    this.state.start('Nivel');
  },


};
