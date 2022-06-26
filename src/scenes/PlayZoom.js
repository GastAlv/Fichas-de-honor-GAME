import Button from "../js/button.js";
export class PlayZoom extends Phaser.Scene {
    constructor(){+
        super("PlayZoom")
    }

    preload(){
        //this.load.image('B', "public/assets/images/boton2.png");
        this.load.image('b2', "public/assets/images/boton2.png");
        this.load.image('B', "public/assets/images/bBack.png");
        //vida
        this.load.image("vida", "public/assets/images/vida.png")
        this.load.image("vidaBack", "public/assets/images/vidaBack.png")

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
        
        
        //botonAtaques
        this.backBoton = this.add.image(180, 541, 'B');
        this.botonAt = this.add.text(120, 520, 'ATAQUES')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAt.visible = false;
            this.botonOb.visible = false;
            ataque1.visible = true;
            ataque2.visible = true;
            ataque3.visible = true;
            backBotonAt3.visible = true;
            backBoton1.visible = false;
            backBoton2.visible = true;

        })
        .on('pointerover', () => this.botonAt.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => this.botonAt.setStyle({ fill: '#7D8E69' }));
        

        //botonObjetos
        this.backBoton = this.add.image(180, 620, 'B');
        this.botonOb = this.add.text(120, 600, 'OBJETOS')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAt.visible = false;
            //this.A1.visible = true;
            //A1a.visible = false;
            botonOb.visible = true;
        })
        .on('pointerover', () => this.botonOb.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => this.botonOb.setStyle({ fill: '#7D8E69' }));
        
        
        //botonEstadisticas
        let backBoton1 = this.add.image(405, 580, 'B')
        .setScale(1, 2+0.08);
        let backBoton2 = this.add.image(405, 542, 'B')
        backBoton2.visible = false;

        this.botonEst = this.add.text(320, 520, 'ESTADISTICAS')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonEst.visible = false;
            //this.A1.visible = true;
            //A1a.visible = false;
            botonOb.visible = true;
        })
        .on('pointerover', () => this.botonEst.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => this.botonEst.setStyle({ fill: '#7D8E69' }));



          //textoAtaque1
        let ataque1 = this.add.text(120, 520, 'ATAQUE 1')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAt.visible = true;
            this.botonOb.visible = true;
            ataque1.visible = false;
            ataque2.visible = false;
            ataque3.visible = false;
            backBotonAt3.visible = false;
            backBoton1.visible = true;
            backBoton2.visible = false;
            peonS.play({key: 'peonAt', repeat: 0});

        })
        .on('pointerover', () => ataque1.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => ataque1.setStyle({ fill: '#7D8E69' }));
        ataque1.visible = false;

        //ataque2
        let ataque2 = this.add.text(120, 600, 'ATAQUE 2')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAt.visible = true;
            this.botonOb.visible = true;
            ataque1.visible = false;
            ataque2.visible = false;
            ataque3.visible = false;
            backBotonAt3.visible = false;
            backBoton1.visible = true;
            backBoton2.visible = false;
        })
        .on('pointerover', () => ataque2.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => ataque2.setStyle({ fill: '#7D8E69' }));
        ataque2.visible = false;

        //ataque3
        let backBotonAt3 = this.add.image(405, 620, 'B')
        backBotonAt3.visible = false;
        let ataque3 = this.add.text(320, 600, 'ATAQUE 3')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAt.visible = true;
            this.botonOb.visible = true;
            ataque1.visible =false;
            ataque2.visible = false;
            ataque3.visible = false;
            backBotonAt3.visible = false;
            backBoton1.visible = true;
            backBoton2.visible = false;
        })
        .on('pointerover', () => ataque3.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => ataque3.setStyle({ fill: '#7D8E69' }));
        ataque3.visible = false;

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




     //vida
     let vidaBj1 = this.add.image(555, 572, 'vidaBack')
     let vidaj1 = this.add.image(555, 572, 'vida')
        
     //Animaciones
     const peonAnim = this.anims.create({
        key: "peonAt",
        frames: this.anims.generateFrameNumbers('peon', {start: 0, end: 5}),
        frameRate: 10
     })
     const peonS = this.add.sprite(750, 270, 'peon').setScale(.2)
     //peonS.play({key: 'peonAt', repeat: -1})


        

        


    }

/*Borrar(){
    bAtaque.visible = false;
    bObEstats.visible = false;
    bObjeto.visible = false;
    
    if(bAtaque.visible === true){
    bAtaque.visible = false;;
    };
};*/


    update(){
    }

}