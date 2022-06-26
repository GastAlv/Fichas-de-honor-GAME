// Clase Preloads, para separar los preloads y tener mejor orden

// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Preloads extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    this.load.image("phaser_logo", "public/assets/images/phaser_logo.png");
    this.load.image(
      "mainmenu_bg",
      "public/assets/images/main_menu_background.png"
    );
    this.load.image("mainMenu", "public/assets/images/menu1.png");
    this.load.image("creditos", "public/assets/images/creditos.png");
    this.load.image("selecPersonajes", "public/assets/images/selecPer.png");
    this.load.image("opciones", "public/assets/images/opciones.png");
    this.load.image("samuraisSelec", "public/assets/images/seleccion_luchadores.png");
    this.load.image("vikingSelec", "public/assets/images/seleccion-vikinga.png");
    this.load.image("combatZoomOut", "public/assets/images/comZoomOut.png");  
    this.load.image("combatZoom", "public/assets/images/combatZoom.png");

    this.load.image("ayuda01", "public/assets/images/ayuda01.png")

    this.load.image("elegirFacc", "public/assets/images/elegirFacc.png")

    //personajes
    this.load.image("sCaballo", "public/assets/images/personajes/caballo.png");

    //animaciones

    //camaras
    //this.load.image("canva", "public/assets/images/canva.png")
    this.load.image("interface", "public/assets/images/escenario_central.png");

    //botones
    this.load.image("boton", "public/assets/images/bottonV.png")
    this.load.image('botonM', "public/assets/images/botonTrans.png")
    this.load.image('confiM', "public/assets/images/opcionesM.png")
    this.load.image('volverM', "public/assets/images/volverM.png")
    this.load.image("botonV", "public/assets/images/interfaz.png");


    //amnimaciones
    this.load.spritesheet('peon', "public/assets/images/peon.png", {
      frameWidth: 1920,
      frameHeight: 1080,
    });

    //PERSONAJE SAMURAIS
    this.load.image("sPerS01", "public/assets/images/selecPerS01.png")
    this.load.image("zoomPerS01", "public/assets/images/zoomPerS01.png")
    //PERSONAJE VIKINGOS
    this.load.image("sPerV02", "public/assets/images/selecPerV02.png")
    

  }

  create() {
    // Pasa directamente a la escena del menú principal
    this.scene.start("MainMenu");
  }
}
