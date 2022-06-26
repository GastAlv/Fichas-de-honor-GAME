import Button from "../js/button.js";
export class SelecPer extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("SelecPer");
    }
  
    
    /*preload() {
      this.load.image("phaser_logo", "public/assets/images/phaser_logo.png");
      this.load.image(
        "mainmenu_bg",
        "public/assets/images/main_menu_background.png"
      );
    }*/
    
    create() {


      const image1 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "selecPersonajes")
      
      //Boton para comenzar a jugar al combate
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/2, 'Empezar', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("PlayZoom");
    });
   
   //camaras para la seleccion 
   const cam2 = this.cameras.add(400, 0, 400, 300).setBackgroundColor(0xFFFFFF);
   cam2.ignore([ image1])
   const peon = this.add.image(500, 300, 'zoomPerS01')

   //lista de seleccion samurais
   let perS01 = this.add.image(548, 542, 'sPerS01')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
        })
    .on('pointerover', () => perS01.setTint(0x7353EC))
    .on('pointerout', () => perS01.setTint(0xFFFFFF))



    //lista de seleccion vikinga
    let perV02 = this.add.image(840, 536, 'sPerV02')
   .setScale(.63)
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {

        })
    .on('pointerover', () => perV02.setTint(0x7353EC))
    .on('pointerout', () => perV02.setTint(0xFFFFFF))

  }

  update(){}
}