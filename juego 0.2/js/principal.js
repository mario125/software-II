//var largo=500;
var lar = screen.width;
var alt = screen.height;
var juego = new Phaser.Game(lar,alt,Phaser.CANVAS,'bloque_juego');
juego.state.add('Menu',Menu);
juego.state.add('Nivel',Nivel);
juego.state.add('Juego_1_1',Juego_1_1);
//juego.state.add('Game_Over',Game_Over);
juego.state.start('Menu');
