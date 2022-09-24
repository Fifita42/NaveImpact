import{Scoreboard} from './componentes/scoreboard/Scoreboard.js';
import{LiveCounter} from './componentes/live/LiveCounter.js';
import{Nave} from './componentes/nave/nave.js';
import{Meteor, record} from './componentes/asteroides/asteroid.js';
export let tiempo = 700;//cada cuamto caen asteroides
export let caida = 222;//velocidad de caida
export class Game extends Phaser.Scene {//permitimos enviar esta clase a quien lo pida
//Phaser.Scene contiene una escena básica y nosotros la extendemos para darle la funcionalidad que requiere nuestro juego.
    constructor() {
      super({ key: 'game' });//nombre clave de esta escena
    }
    init()
    {
      this.naveP = new Nave(this);
      this.meteoros = new Meteor(this);
      this.score = new Scoreboard(this);
      this.lives = new LiveCounter(this,3);
    }
    preload() 
    {
      this.load.image('bg','imagenes/background.jpg');
      this.load.image('cuerpo','imagenes/cuerpo.png');
      this.load.image('asteroide','imagenes/asteroid.png');
      this.load.atlas('navecita','imagenes/cohete.png','sprite.json');
      this.load.image('gameover', 'imagenes/gameover.png');
      this.load.spritesheet('button','imagenes/restart.png',
      {
          frameWidth:190,
          frameHeight:49
      });

    }
    create() {
      this.physics.world.setBoundsCollision(true, true, true, true);
      this.bg = this.add.image(0,0,'bg').setOrigin(0,0);
      this.bg.setScale(1,1.1);
      this.score.create();
      this.lives.create();
      this.anims.create(
        {
          key:'mov',
          frames: this.anims.generateFrameNames('navecita',
          {
            prefix:'Sprite',
            end: 6, 
            zeroPad:4
          }),
          frameRate: 10,
          repeat: -1,
          yoyo: true
        });

        this.naveP.create();
        this.imagen = this.add.sprite(this.naveP.get().x,this.naveP.get().y,'navecita');

        this.meteoros.create();
        this.meteoros.setAsteroidCollicion();

      var timer = this.time.addEvent(//lanzar meteoros cada tiempo
        {
          delay:tiempo,
          callback: this.lanzarMeteor,
          callbackScope: this,
          loop: true
        })
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    update() 
    {
      this.imagen.x = this.naveP.get().x;
      this.imagen.y = this.naveP.get().y-20;
      this.imagen.anims.play('mov',true);
      this.naveP.mover(this.cursors);
    }

    lanzarMeteor()
    {
        let met1 = this.meteoros.get().get(Phaser.Math.Between(0,200),Phaser.Math.Between(-50,-200),'asteroide').setScale(0.3);
        
        let met2 = this.meteoros.get().get(Phaser.Math.Between(220,400),Phaser.Math.Between(-100,-150),'asteroide').setScale(0.3);
        
        let met3 = this.meteoros.get().get(Phaser.Math.Between(420,600),Phaser.Math.Between(-200,-250),'asteroide').setScale(0.3);
    
        if(met1&&met2&&met3)
        {
        met1.setActive(true);
        met1.body.velocity.y = caida;
  
        met2.setActive(true);
        met2.body.velocity.y = caida;
  
        met3.setActive(true);
        met3.body.velocity.y = caida;
      }
      met1.outOfBoundsKill = true;
      met2.outOfBoundsKill = true;
      met3.outOfBoundsKill = true;
      caida+=2;
      this.score.incrementPoints(30);
    }

    impact(aster)
    {
      this.score.incrementPoints(-30);
      caida+=10;
      if(aster.y>this.naveP.get().y-30)
      {
        if(aster.x<this.naveP.get().x)
          {

          }
          else if(aster.x>this.naveP.get().x)
          {

          }
    }else
      {
        this.lives.liveLost();
      }
    }

    
  endGame(completed)
  {
      if(completed)
      {
          caida = 222;
          this.scene.start('gameover');
      }
  }
    
}
