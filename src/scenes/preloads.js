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

    //fONDOS DE pANTALLA
    this.load.image("mainMenu", "public/assets/images/menu1.png");
    this.load.image("creditos", "public/assets/images/creditos.png");

    this.load.image("selecPJBack", "public/assets/images/SeleccionPjback.png");

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
    this.load.image("backPuente1", "public/assets/images/escenario_central.png");
    this.load.image("backPuente2", "public/assets/images/escenario_central_palos.png")

    //botones
    this.load.image("boton", "public/assets/images/bottonV.png")
    this.load.image('botonM', "public/assets/images/botonTrans.png")
    this.load.image('confiM', "public/assets/images/opcionesM.png")
    this.load.image('volverM', "public/assets/images/volverM.png")
    this.load.image("botonV", "public/assets/images/interfaz.png");


    //amnimaciones samurais
    this.load.spritesheet('peonS', "public/assets/images/peonS.png", {
      frameWidth: 1280,
      frameHeight: 720,
    });
    this.load.spritesheet('caballoS', "public/assets/images/caballoS.png", {
      frameWidth: 1280,
      frameHeight: 1280,
    });
    this.load.spritesheet('reynaS', "public/assets/images/reynaS.png", {
      frameWidth: 1280,
      frameHeight: 720,
    });

    //amnimaciones vikingas
    this.load.spritesheet('reynaV', "public/assets/images/reynaV.png", {
      frameWidth: 1080,
      frameHeight: 720,
    });
    this.load.spritesheet('peonV', "public/assets/images/peonV.png", {
      frameWidth: 1920,
      frameHeight: 1080,
    });
    this.load.spritesheet('caballoS', "public/assets/images/caballoV.png", {
      frameWidth: 1280,
      frameHeight: 720,
    });


    //PERSONAJE SAMURAIS
    this.load.image("peonSelecS", "public/assets/images/selecPerS01.png")
    this.load.image("caballoSelecS", "public/assets/images/selecPerS02.png")
    this.load.image("reynaSelecS", "public/assets/images/selecPerS03.png")

    this.load.image("zoomPerS01", "public/assets/images/zoomPerS01.png")
    //PERSONAJE VIKINGOS
    this.load.image("peonSelecV", "public/assets/images/selecPerV01.png")
    this.load.image("caballoSelecV", "public/assets/images/selecPerV02.png")
    this.load.image("reynaSelecV", "public/assets/images/selecPerV03.png")

    // barra de vida
    this.load.image("barraVida", "public/assets/images/vida.png")
    this.load.image("barraVBack", "public/assets/images/vidaBack.png")
    

  }

  create() {
    // Pasa directamente a la escena del menú principal
    this.scene.start("SelecPer");
  }
}
