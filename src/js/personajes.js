/*export default class Personajes extends Phaser.Physics.Arcade.Sprite{ 
    constructor (scene, x, y, dañoPersonaje, vidaPersonaje, escudoPersonaje, texture)
    {
        super(scene, x, y, dañoPersonaje, vidaPersonaje, escudoPersonaje, texture)
        this.x = x;
        this.y = y;
        this.dañoPersonaje = dañoPersonaje;
        this.vidaPersonaje = vidaPersonaje;
        this.escudoPersonaje = escudoPersonaje;
        this.scene.add.existing(this);

        
        /*ubiPer(scene, x, y, texture)
        {
            Phaser.GameObjects.Image.call(this, scene);

            this.setTexture(texture);
            this.setPosition(x, y);
            this.setScale();
        }
    }
    
    
}*/
    /*ubiPer (scene, x, y, texture)
{
        Phaser.GameObjects.Image.call(this, scene);

        this.setTexture(texture);
        this.setPosition(x, y);
        this.setScale(2);
    }*/
/*const vikingoPeon = new Personajes(this, 750, 270, 20, 100, 50);
        vikingoPeon.vidaPersonaje 
        console.log(vikingoPeon.vidaPersonaje)
        console.log(vikingoPeon.dañoPersonaje)*/

        /*var Personajes = new Phaser.Class({

            Extends: Phaser.GameObjects.Image,
        
            initialize:
        
            function EnemyRobot (scene, x, y)
            {
                Phaser.GameObjects.Image.call(this, scene);
        
                this.setTexture('peonS');
                this.setPosition(x, y);
                this.setScale(2);
            }
        
        });*/


        export default class Personajes extends Phaser.Physics.Arcade.Sprite {
            constructor(scene, x, y, texture, scale, dañoPersonaje, vidaPersonaje, per, ) {
                //super(scene, x, y, texture, frame);
                super(scene, x, y, texture);
                this.scene = scene;
                //this.animacion = frame;
                this.scene.add.existing(this);
                this.setScale(scale);
                this.dañoPersonaje = dañoPersonaje;
                this.vidaPersonaje = vidaPersonaje;
                //this.escudoPersonaje = escudoPersonaje;
                //this.scene.physics.add.existing(this);
                //this.body.allowGravity = false;
                //this.setTint(color);

                //this.per_anim = this.cache.json.get()
        
                //this.timeTurn = timeTurn;
                //this.isTurn = false;
                //this.canThrowDice = false;
                //this.canPlay = true;
                //this.canMove = true;
                //this.wallet = 0;
                //this.canBuy = true;
                /*this.invetory = {
                    slotOne: null,
                    slotTwo: null,
                };*/
                //this.name = name;
                //this.posJugador = posJugador;
                //this.map = map;
                // this.nextTurn = false;
                //this.countTurn = 0;
                //this.afectarContricante = false;
                // this.setScale(0.5)
                // this.anims.play(`${this.animacion}-idle`, false)
            }

            get recibirDaño(){
                return texture.setTint(color)
            }
        }


        