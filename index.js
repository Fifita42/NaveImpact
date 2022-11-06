export let heig = window.innerHeight;
export let wid = window.innerWidth;
console.log(window.innerWidth);
console.log(window.innerHeight);
function calc()
{
  if(heig>wid)
  {
    if((heig*1.5)<=1200)
    {
      heig = heig*1.5;
      return heig;
    }else
    {
      return 800;
    }
  }else
  {
    heig = 800;
    return 800;
  }
 // return heig = 791*1.5;
}
function calcW()
{
 // return wid = 412*1.5;
  if(wid>heig)
  {
    if(wid<=600)return wid;
    else {
      wid = 600;
      return 600;
    }
  }else
  {
    if((wid*1.5)<=700)
    {
      wid = wid*1.5;
      return wid;
    }else return 600;

  }
}
import { Game } from './game.js';//trae la clase Game dentro del archivo especificado
import { Congratulations  } from './escenas/congratulations.js';
import { Gameover } from './escenas/game-over.js';

const config = {
  pixelArt: true,//remarca los pixeles de las imagenes
  type: Phaser.CANVAS,//indica si usar canvas o WebGl depende de ordenador
  // width: 600,//tamaño de canvas
  // height: 800,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: calcW(),
    height: calc(),
},
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
  input:{
    activePointers:4,
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
