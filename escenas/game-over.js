import { RestartButton } from '../componentes/restart-buton.js'
export class Gameover extends Phaser.Scene//exporto una escena
{
    constructor() {
        super({ key: 'gameover' });//nombre clave de esta escena
        this.restartButton = new RestartButton(this);
    }
    create()
    {
        this.bg = this.add.image(599,0,'bg').setOrigin(0,0).setScale(1.1);
        this.bg.angle = 90;
        this.restartButton.create();
        this.gameoverImage = this.add.image(300,250,'gameover');
    }

}
