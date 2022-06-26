
export class SelecFacc extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("SelecFacc");
    }
  
    
    /*preload() {
      this.load.image("phaser_logo", "public/assets/images/phaser_logo.png");
      this.load.image(
        "mainmenu_bg",
        "public/assets/images/main_menu_background.png"
      );
    }*/
    
    create() {


      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "elegirFacc");

      let volverM = this.add.image(70, 60, 'volverM')
        .setScale(.7)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          this.scene.start("MainMenu")
        })
        .on('pointerover', () => volverM.setTint(0x728C55))
        .on('pointerout', () => volverM.setTint(0xDBE5D0));


        //listo j1 y j2
        let listoJ1 = this.add.image(370, 660, 'boton')
        .setScale(.16)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
        })
        .on('pointerover', () => listoJ1.setTint(0x728C55))
        .on('pointerout', () => listoJ1.setTint(0xDBE5D0));;;
        
        let listoJ01 = this.add.text(330, 638, 'LISTO')
        .setStyle({
            fontFamily: "asian",
            fontSize: '56px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          this.listo1 = true;
        })
        .on('pointerover', () => listoJ01.setTint(0x728C55))
        .on('pointerout', () => listoJ01.setTint(0xDBE5D0))
        let listo1 = false;


        let listoJ2 = this.add.image(980, 660, 'boton')
        .setScale(.16)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
        })
        .on('pointerover', () => listoJ2.setTint(0x728C55))
        .on('pointerout', () => listoJ2.setTint(0xDBE5D0));;
        let listoJ02 = this.add.text(944, 638, 'LISTO')
        .setStyle({
            fontFamily: "asian",
            fontSize: '56px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          this.listo2 = true;
        })
        .on('pointerover', () => listoJ02.setTint(0x728C55))
        .on('pointerout', () => listoJ02.setTint(0xDBE5D0))
        let listo2 = false;

        


       //Boton para comenzar a jugar al combate
      /*const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/2, 'Empezar', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("selecSamurai");
        
    });*/
  }

  update(){
    
    
    if (this.listo1 && this.listo2 === true){
      this.scene.start("SelecPer")
    }
  }
}