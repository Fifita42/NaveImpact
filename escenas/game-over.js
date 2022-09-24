import { RestartButton } from '../componentes/restart-buton.js'
export class Gameover extends Phaser.Scene//exporto una escena
{
    constructor() {
        super({ key: 'gameover' });//nombre clave de esta escena
        this.restartButton = new RestartButton(this);
    }
    preload()
    {
        this.load.image('gameover', '../imagenes/gameover.png');
        this.restartButton.preload();
    }
    create()
    {
        this.add.image(350,305,'bg').setScale(2);//como ya se preload el background en game, no hace falta repetir
        this.restartButton.create();
        this.gameoverImage = this.add.image(300,250,'gameover');
    }

}