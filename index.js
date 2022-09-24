import { Game } from './game.js';//trae la clase Game dentro del archivo especificado
import { Congratulations  } from './escenas/congratulations.js';
import { Gameover } from './escenas/game-over.js';
const config = {
  pixelArt: true,//remarca los pixeles de las imagenes
  type: Phaser.AUTO,//indica si usar canvas o WebGl depende de ordenador
  width: 600,//tamaño de canvas
  height: 600,
  parent: 'container',//id del contenedor
  backgroundColor: '#34495E',//fondo del lienzo
  banner:
  {
    hidePhaser: true,//oculta texto de phaser en la consola
    text:'#000000',//cambia color del titulo del juego enn la consola
    background:[
      'red',
      'yellow',
      'red',
      'transparent'
    ]
  },
  scene: [Game, Congratulations, Gameover],//que escenas va a haber en mi juego [Game,GameOver,Win,etc]
  physics: {//fisiacas
    default: 'arcade',//las basicas de 2d
    arcade: {
      gravity: { y: 0},//solo gravedad en eje y
      debug: false
    }
  }
}

var game = new Phaser.Game(config);//inicia la clase Game con las configuraciones dadas