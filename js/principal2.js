var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'lienzo');

var plataforma1;
var bloque;
var tiempo;
var fondoDegra;
var parar=0;
var time;

var estadoPrincipal =
{
preload:function()
{
  game.load.image('plataforma1','img/platform.png');
  game.load.image('bloque','img/rojo.png');

},

create :function()
{
  game.physics.startSystem(Phaser.Physics.ARCADE);
  fondoDegra = new Phaser.Rectangle(0, 0, 800, 600);
    var graphics = game.add.graphics(fondoDegra.x, fondoDegra.y);

  game.stage.backgroundColor = '#124888';
  plataforma1=game.add.sprite(300,500,'plataforma1');
   bloque=game.add.sprite(100,100,'bloque');
    game.physics.arcade.enable([bloque,plataforma1]);
    bloque.body.gravity.y=0;
      



    bloque.inputEnabled = true;
    bloque.anchor.set(0.5);

    bloque.input.enableDrag();
    bloque.input.boundsRect = fondoDegra;
    
  plataforma1.allowGravity=false;
  plataforma1.body.immovable=true;
 

  
  
  




 /*time = game.time.events.loop(0, this.toco, this);
game.physics.arcade.overlap(plataforma1, bloque, this.choco, null, this);
*/
},
crearColumna:function()
{
var pos=  bloque.body.position.x;
var pos2=  bloque.body.position.y;
var txtPuntosNumero="";
var txtPuntosNumero2="";

},

choco:function()
{
    alert("chocamos");
  if(bloque.alive == false)
      return;
      parar=1;
    bloque.alive = false;
},
toco:function()
{
  //alert("choco");
  
  if (parar==1) {
    
  }
},
update:function()
{
  //time = game.time.events.loop(0, this.crearColumna, this);
    game.physics.arcade.collide(bloque,plataforma1);
    
var me= game.physics.arcade.overlap(plataforma1, bloque, this.choco, null, this);
 




}

};

game.state.add('principal2',estadoPrincipal);
game.state.start('principal2');
