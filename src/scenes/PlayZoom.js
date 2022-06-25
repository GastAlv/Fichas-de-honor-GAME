import Button from "../js/button.js";
var bAtaque;
export class PlayZoom extends Phaser.Scene {
    constructor(){
        super("PlayZoom")
    }

    preload(){
        this.load.image("botonV", "public/assets/images/interfaz.png");
    }
    create(){

        //this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "combatZoom")
        //.setScale()

        //personaje
        //this.add.sprite(310, 310, 'sCaballo').setScale(.37);

        //escena canvas (w:1280 h:490)
        this.image = this.add.image(640, 150, 'canva');

        //escena interface (w:1280 h:230)
        this.image = this.add.image(640, 245, 'interface');

        const button2 = this.add.image(this.cameras.main.centerX, 570, 'botonV', )
        /*.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            console.log("yata")
        })
        .setScale();*/
        
        

        /*MenuPersonaje1*/{
            //Boton para seguir a resultados
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'Seguir', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("Resultados");
        });

        /*const bAtaque = new Button(150, 541, 'ATACAR', this, () => {
            //this.bAtaque.setVisible(false)
                    // Instrucción para pasar a la escena PlayCombat
                    //.setInteractive()
                    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
                        console.log("yata")
                    });
                   this.setInteractive()
                    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
                        console.log("yata")
                        this.bObEstats.setVisible(false)

                    });
                });*/

        const bAtaque = new Button(150, 541, 'ATACAR', this, ()=>Borrar);

        function Borrar(bAtaque){
            bAtaque.visible = true;
            /*bObEstats.visible = false;
            bObjeto.visible = false;*/

            if(bAtaque.visible === true){
                bAtaque.visible = false;
            };
            //bAtaque.visible=false
        };
                

        const bObjeto = new Button(150, 620, 'OBJETO', this, () => {
             // Instrucción para pasar a la escena PlayCombat
            ;
            });
            
        const bObEstats = new Button(350, 541, 'ESTADISTICAS', this, () => {
                // Instrucción para pasar a la escena PlayCombat
               ;
            });
        }
        /*MenuPersonaje2*/{
            //Boton para seguir a resultados
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'Seguir', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("Resultados");
        });

        const bAtaque = new Button(1130, 541, 'ATACAR', this, () => {
            // Instrucción para pasar a la escena PlayCombat
            ;
            });

        const bObjeto = new Button(1130, 620, 'OBJETO', this, () => {
             // Instrucción para pasar a la escena PlayCombat
            ;
            });
            
        const bObEstats = new Button(930, 541, 'ESTADISTICAS', this, () => {
                // Instrucción para pasar a la escena PlayCombat
               ;
            });
        }
        /*menuataque*/


        


    }


    update(){}

}