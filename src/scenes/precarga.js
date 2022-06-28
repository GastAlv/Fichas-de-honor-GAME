
export default class Precarga extends Phaser.Scene{
    constructor () {
        super('Precarga');
    }


    preload ()
    {
              this.load.video('preCarga', 'public/assets/images/PRECARGA.mp4', 'loadeddata', false, true);                                          //UNRaf SS/

    }

    create ()
    {

        var vid = this.add.video(640, 360, 'preCarga');{
            vid.play(true);
            vid.setPaused(false);
            this.time.addEvent({
               delay: 10000,
                  callback: () => this.scene.start('MainMenu'),
                   callbackScope: this,
                   loop: true,
                 });
        }

    }
}