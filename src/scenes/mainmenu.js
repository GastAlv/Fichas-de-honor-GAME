import Button from "../js/button.js";
// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  //preload(){}

  create() {
    // Fondo del menú principal
    /*this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "mainmenu_bg"
      )
      .setScale(1.1);

    // Logo de Phaser
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY / 1.5,
      "phaser_logo"
    );*/
    let backMenu = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "mainMenu")
    .setScale(.67);

    // Boton para comenzar a jugar
    let botonJgar = this.add.image(750, 195, 'botonM')
    .setScale(.67);
        let botonJgarM = this.add.text(656, 152, 'JUGAR')
        .setStyle({
            fontFamily: "asian",
            fontSize: '100px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          this.scene.start("SelecFacc")
        })
        .on('pointerover', () => botonJgarM.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => botonJgarM.setStyle({ fill: '#7D8E69' }));


        //boton Ayuda
        let botonAyda = this.add.image(756, 348, 'botonM')
    .setScale(.54);
        let botonAydaM = this.add.text(680, 315, 'AYUDA')
        .setStyle({
            fontFamily: "asian",
            fontSize: '80px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          this.scene.start("Ayuda")
        })
        .on('pointerover', () => botonAydaM.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => botonAydaM.setStyle({ fill: '#7D8E69' }));
        
        
        //boton Creditos
        let botonCre = this.add.image(760, 478, 'botonM')
    .setScale(.43);
        let botonCreM = this.add.text(676, 452, 'CREDITOS')
        .setStyle({
            fontFamily: "asian",
            fontSize: '68px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          this.scene.start("Creditos")
        })
        .on('pointerover', () => botonCreM.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => botonCreM.setStyle({ fill: '#7D8E69' }));
        
        //Configuracion
        let opciones = this.add.image(1230, 50,'confiM')
        .setScale(.55)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          opciones.setTint(0x728C55)
          this.scene.start("Opciones");
        })
        .on('pointerover', () => opciones.setTint(0x728C55))
        .on('pointerout', () => opciones.setTint(0xDBE5D0));
        /*const botonJgar = new Button(this.cameras.main.centerX + 100, this.cameras.main.centerY- 160, 'JUGAR', this, () => {
            // Instrucción para pasar a la escena Play
            this.scene.start("SelecPer");
        });

        // Boton para comenzar a jugar
        const botonCred = new Button(this.cameras.main.centerX + 100, this.cameras.main.centerY -70, 'AYUDA', this, () => {
          // Instrucción para pasar a la escena Play
          this.scene.start("Ayuda");
      });*/

      /*// Boton para comenzar a jugar
      const botonSlir = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'Salir', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("");
    });*/

    /*/ Boton para comenzar a jugar
    const boton = new Button(this.cameras.main.centerX + 100, this.cameras.main.centerY+20, 'CREDITOS', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Creditos");
  });*/
  }
  update(){
    
  }
}
