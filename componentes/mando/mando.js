import {wid} from '../../index.js'
import {heig} from '../../index.js'
export class Mando
{
    constructor(scene, initialLives)
    {
        this.relatedScene = scene;
        this.initialLives = initialLives;
        this.widd;
        this.heigg;
        this.right = {isDown: false};
        this.left = { isDown: false };
        this.up = { isDown: false };
        this.down = { isDown: false };
        this.visibles;
    }

    create()
    {
        this.calc();
        this.calcW();

        this.rightButton = this.relatedScene.add.image(this.widd-150,this.heigg-230,'derecha').setInteractive({ draggable: true });this.rightButton.setOrigin(0,0);this.rightButton.setScale(2);
        this.leftButton = this.relatedScene.add.image(this.widd-330,this.heigg-230,'izquierda').setInteractive({ draggable: true });this.leftButton.setOrigin(0,0);this.leftButton.setScale(2);
        this.upButton = this.relatedScene.add.image(170,this.heigg-320,'izquierda').setInteractive({ draggable: true });this.upButton.angle = 90;this.upButton.setOrigin(0,0);this.upButton.setScale(2);
        this.downButton = this.relatedScene.add.image(170,this.heigg-150,'derecha').setInteractive({ draggable: true });this.downButton.angle = 90;this.downButton.setOrigin(0,0);this.downButton.setScale(2);
    
        this.leftButton.on('pointerdown', () => {
            this.left.isDown = true;
            this.right.isDown = false;
            
          });
          this.leftButton.on('pointerout', () => {
            this.left.isDown = false;
          });
          this.leftButton.on('dragend', () => {
            this.left.isDown = false;
          });
      

          this.rightButton.on('pointerdown', () => {
            this.right.isDown = true;
            this.left.isDown = false;
           
          });
          this.rightButton.on('pointerout', () => {
            this.right.isDown = false;
          });
          this.rightButton.on('dragend', () => {
            this.right.isDown = false;
          });


          this.upButton.on('pointerdown', () => {
            this.down.isDown = false;
            this.up.isDown = true;
          });
          this.upButton.on('pointerout', () => {
            this.up.isDown = false;
          });
          this.upButton.on('dragend', () => {
            this.up.isDown = false;
          });


          this.downButton.on('pointerdown', () => {
            this.down.isDown = true;
            this.up.isDown = false;
          });
          this.downButton.on('pointerout', () => {
            this.down.isDown = false;
          });
          this.downButton.on('dragend', () => {
            this.down.isDown = false;
          });
          if(!this.visibles)
          {
            this.rightButton.visible=false;
            this.leftButton.visible=false;
            this.downButton.visible=false;
            this.upButton.visible=false;
          }
        

    }
    calc()
    {
      if(window.innerWidth>window.innerHeight){
        this.visibles = false;
        console.log('wid grande');
      }else this.visibles = true;

      if(wid>heig)
        {
          if(wid<=600)this.widd = wid;
          else {
            this.widd = 600;
          }
        }else
        {
            if(wid<=600)this.widd = wid;
            else {
              this.widd = 600;
            }
        }
      
    }

    calcW()
    {
        if(heig>wid)
        {
            if(heig<=1200)
            {
                this.heigg = heig;
            }
            else
            {
                this.heigg = 800;
            }
        }
        else
        {
            this.heigg = 800;
        }
    }

}
