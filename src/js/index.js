import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import {SelecPer} from "../scenes/SelecPer.js"
import {Credits} from "../scenes/Credits.js"
import {PlayCombat} from "../scenes/PlayCombat.js"
import {Resultados} from "../scenes/Resultados.js"


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
  scene: [Preloads, MainMenu, SelecPer, Credits, PlayCombat, Resultados]
};

var game = new Phaser.Game(config);
