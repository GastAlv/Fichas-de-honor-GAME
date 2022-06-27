import Button from "../js/button.js";
export class SelecPer extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("SelecPer");
    }
  
    
    preload() {
      /*this.load.image("phaser_logo", "public/assets/images/phaser_logo.png");
      this.load.image(
        "mainmenu_bg",
        "public/assets/images/main_menu_background.png"
      );*/
    }
    
    create() {


      this.image = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selecPJBack')
      .setScale(1.138);
      
      //Boton para comenzar a jugar al combate
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/2, 'Empezar', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("PlayZoom");
    });
   
   //camaras para la seleccion 
   /*const cam2 = this.cameras.add(400, 0, 400, 300).setBackgroundColor(0xFFFFFF);
   cam2.ignore([ image1])
   const peon = this.add.image(500, 300, 'zoomPerS01')*/

   //lista de seleccion samurais
   let perS01 = this.add.image(549, 542, 'peonSelecS')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perS01.setTint(0x7353EC)
        })
    //.on('pointerover', () => perS01.setTint(0x7353EC))
    //.on('pointerout', () => perS01.setTint(0xFFFFFF));

   let perS02 = this.add.image(440, 542, 'caballoSelecS')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perS02.setTint(0x7353EC)
        })
    //.on('pointerover', () => perS02.setTint(0x7353EC))
    //.on('pointerout', () => perS02.setTint(0xFFFFFF));

   let perS03 = this.add.image(300, 542, 'reynaSelecS')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perS03.setTint(0x7353EC)
        })
    //.on('pointerover', () => perS03.setTint(0x7353EC))
    //.on('pointerout', () => perS03.setTint(0xFFFFFF));


    //if(perS01.GAMEOBJECT_POINTER_DOWN || perS02.on(true) || perS03.on(true) && perV01.on(true) || perV02.on(true) || perV03.on(true)){}

   



    //lista de seleccion vikinga
    let perV01 = this.add.image(731, 542, 'peonSelecV')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perV01.setTint(0x7353EC)
        })
    //.on('pointerover', () => perV01.setTint(0x7353EC))
    //.on('pointerout', () => perV01.setTint(0xFFFFFF));
    // ----------------------------//

    let perV02 = this.add.image(840, 542, 'caballoSelecV')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perV02.setTint(0x7353EC)
        })
    //.on('pointerover', () => perV02.setTint(0x7353EC))
    //.on('pointerout', () => perV02.setTint(0xFFFFFF));
    // ----------------------------//


    let perV03 = this.add.image(975, 542, 'reynaSelecV')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perV03.setTint(0x7353EC)
        })
    //.on('pointerover', () => perV03.setTint(0x7353EC))
    //.on('pointerout', () => perV03.setTint(0xFFFFFF));
    // ----------------------------//


  }

  update(){}
}