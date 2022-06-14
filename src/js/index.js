import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import {SelecPer} from "../scenes/SelecPer.js"
import {Credits} from "../scenes/Credits.js"
import {PlayCombat} from "../scenes/PlayCombat.js"
import {Resultados} from "../scenes/Resultados.js"
import {Opciones} from "../scenes/opciones.js"
import {selecSamurai} from "../scenes/samuraiSel.js"
import {selecViking} from "../scenes/vikingSel.js"
import {PlayZoom} from "../scenes/PlayZoom.js"


var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
  scene: [Preloads, MainMenu, SelecPer, Credits, Opciones, selecSamurai, selecViking, PlayCombat, PlayZoom, Resultados]
};

var game = new Phaser.Game(config);
