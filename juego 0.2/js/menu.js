
var boton;
var nuve;
var fondo;
var nino;
//tomamos  el tamaño de pantalla dela Pc,Tablet,Movil para   hacer dinamico el tamaño
var largo = screen.width;
var altura = screen.height;



var Menu = {
  preload:function()
  {
    //************cargamos  las  imagenes y  sprites************
    //color de   fondo  color  blanco
    juego.stage.backgroundColor = '#FFF';
    //sprite de  niño para  el escenario
    juego.load.spritesheet('nino','img/sprite1.png',100,200);
    //cargamos  como  esprite el  fondo para  poder   hacer responsi
    juego.load.spritesheet('fondo','img/m.png',1400,980);
    // cargamos  la  nueve  y  el  boton como  imagenes normales
    juego.load.image('nueve','img/nuves.png');
    juego.load.image('boton','img/btn.png');
  },

  create:function()
  {
    // ************** mostramos en  el  CANVAS todo  lo  cargado**************

    // codigo para  poder dar fullcreen  y responsi  vertical  y orizantal (APLICANDO AL JUEGO-canvas)
    juego.scale.pageAlignHorizontally = true;
    juego.scale.pageAlignVertically = true;
    juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //mostramos  el  fondo  en  el deterninado  punto  del escenario  el  sprite 0
    fondo =juego.add.sprite((juego.width/2),(juego.height/2),'fondo');
    fondo.anchor.setTo(0.5);
    fondo.animations.add('fondo', [0]);
    fondo.animations.play('fondo', 4, true);

    //mostramos la  nueve   que mas luego se le animara en el update
    nuve = juego.add.tileSprite(0,0,juego.width,juego.height,'nueve');
    //mostrando el  boton JUGAR y asignando la  function " iniciarJuego"
    boton = this.add.button(juego.width/2, (juego.height/2)+250, 'boton', this.iniciarNivel, this);
    boton.scale.setTo(0.8,0.8);
    //mostrando el  niño   y  dando  animacion  por  cada  sprite  0,1,2,3  en tiempo de 4
    nino =juego.add.sprite((juego.width/2)-5,(juego.height/2)+59,'nino');
    nino.animations.add('nino', [0, 1, 2, 3]);
    nino.animations.play('nino', 4, true);

    //  asignando  punto de anclaje
      fondo.anchor.setTo(0.5);
      nino.anchor.setTo(0.5);
      boton.anchor.setTo(0.5);

   // las posibles dimenciones para poder  hacer  responsi   y  su   dimencionamiento TABLET Y  CELULAR
   //*************TABLET*********************
     if (largo>=768&&largo<=1024) {

        if (largo>=altura) {
              fondo.scale.setTo(1,1.4);
              nuve. scale.setTo(1,1.4);
              nino.scale.setTo(0.8,0.8);
              nino.position.y=(juego.height/2)+140;
              boton.position.y=(juego.height/2)+300;
        }
        else if (largo<=altura) {
              fondo.scale.setTo(0.9,1.4);
              nuve. scale.setTo(1,1.4);
              nino.scale.setTo(0.8,0.8);
              boton.scale.setTo(0.8,0.8);
              nino.position.y=(juego.height/2)+145;
              boton.position.y=(juego.height/2)+350;

        }

     }
     //********************* CELULAR********************
      else if(largo>=319&&largo<=650)
          {
            if (largo>=altura)
            {
              fondo.scale.setTo(0.5,0.4);
              nuve. scale.setTo(1,0.5);
              nino.scale.setTo(0.5,0.5);
              boton.scale.setTo(0.5,0.5);
              nino.position.y=(juego.height/2)+13;
              boton.position.y=(juego.height/2)+120;

            }
            else if (altura>=largo) {

              fondo.scale.setTo(0.4,0.7);
              nuve. scale.setTo(1,0.7);
              nino.scale.setTo(0.5,0.5);
              boton.scale.setTo(0.5,0.5);
              nino.position.y=(juego.height/2)+60;
              boton.position.y=(juego.height/2)+150;
            }


          }


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
