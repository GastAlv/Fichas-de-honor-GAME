
export class Ayuda extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Ayuda");
    }
  
    preload() {
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "ayuda01")
    .setScale(1);
    }
  
    create() {
      // Pasa directamente a la escena del menú principal
      //this.scene.start("MainMenu");

      //volver al menu

        
      let volverM = this.add.image(70, 60, 'volverM')
        .setScale(.64)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          this.scene.start("MainMenu")
        })
        .on('pointerover', () => volverM.setTint(0x728C55))
        .on('pointerout', () => volverM.setTint(0xDBE5D0));

        

      //Boton para volver al menu principal
      /*const botonVolverMenu = new Button(this.cameras.main.centerX, this.cameras.main.centerY + 260, 'Volver al Menu', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("MainMenu");
        });*/

    }
    
}