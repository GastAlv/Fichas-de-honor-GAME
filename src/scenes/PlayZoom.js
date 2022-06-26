import Button from "../js/button.js";
export class PlayZoom extends Phaser.Scene {
    constructor(){
        super("PlayZoom")
    }

    preload(){
        this.load.image("botonV", "public/assets/images/interfaz.png");
        //this.load.image('B', "public/assets/images/boton2.png");
        this.load.image('b2', "public/assets/images/boton2.png");
        this.load.image('B', "public/assets/images/bBack.png");

    }
    create(){

        //this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "combatZoom")
        //.setScale()

        //personaje
        //this.add.sprite(310, 310, 'sCaballo').setScale(.37);

        //escena canvas (w:1280 h:490)
        //this.image = this.add.image(640, 150, 'canva');

        //escena interface (w:1280 h:230)
        this.image = this.add.image(640, 245, 'interface');
        this.add.image(this.cameras.main.centerX, 570, 'botonV')
        this.A = this.add.image(180, 541, 'B')
        .setInteractive({ useHandCursor: true })
        .on('pointerover', () => this.A.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => this.A.setStyle({ fill: '#7D8E69' }));
        
        
        this.At = this.add.text(120, 520, 'ATAQUES')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            this.A.visible = false;
            this.At.visible = false;
        })
        .on('pointerover', () => this.At.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => this.At.setStyle({ fill: '#7D8E69' }));

        function loadFont(name, url) {
            var newFont = new FontFace(name, `url(${url})`);
            newFont.load().then(function (loaded) {
                document.fonts.add(loaded);
            }).catch(function (error) {
                return error;
            });
        }


        loadFont("asian", "public/assets/fuentes/OPTIAsian.otf");
        


        /*{
        //const button2 = this.add.image(this.cameras.main.centerX, 570, 'botonV')
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            console.log("yata")
        })
        .setScale();

        //this.button2.visible = false;
        
        
        
        MenuPersonaje1{
            //Boton para seguir a resultados
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'Seguir', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("Resultados");
        });

        const bAtaque = new Button(150, 541, 'ATACAR', this, () => {
            //this.bAtaque.setVisible(false)
                    // Instrucción para pasar a la escena PlayCombat
                    //.setInteractive()
                    on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
                        console.log("yata")
                    });
                   this.setInteractive()
                    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
                        console.log("yata")
                        this.bObEstats.setVisible(false)

                    });
        });
        const bAtaque = new Button(150, 541, 'ATACAR', this, ()=>Borrar());

        //this.bAtaque.visible = false;
                

        const bObjeto = new Button(150, 620, 'OBJETO', this, () =>Borrar());
            
        const bObEstats = new Button(350, 541, 'ESTADISTICAS', this, () =>Borrar());
        }
        
        MenuPersonaje2{
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
     }*/
        
        

        


    }

Borrar(){
    bAtaque.visible = false;
    bObEstats.visible = false;
    bObjeto.visible = false;
    
    if(bAtaque.visible === true){
    bAtaque.visible = false;;
    };
};


    update(){}

}