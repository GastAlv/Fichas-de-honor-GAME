import Button from "../js/button.js";

var grupoS =  [];
var grupoV = [];
var start;
var eleccS01;
var eleccV01;
var score = 8700;
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
      /*
      //Boton para comenzar a jugar al combate
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/2, 'Empezar', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("PlayZoom");
    });*/
   
   //camaras para la seleccion 
   /*const cam2 = this.cameras.add(400, 0, 400, 300).setBackgroundColor(0xFFFFFF);
   cam2.ignore([ image1])
   const peon = this.add.image(500, 300, 'zoomPerS01')*/

   //lista de seleccion samurais
   let perS01 = this.add.image(549, 542, 'peonSelecS')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perS01.setTint(0x7353EC)
          perS02.visible = false;
          perS03.visible = false;
          this.listoJS = true;
          //grupoS.push('true')
          this.eleccS01 = 'peonS';
          
          //console.log(grupoS)
        }).setData('peonS', true)
    //.on('pointerover', () => perS01.setTint(0x7353EC))
    //.on('pointerout', () => perS01.setTint(0xFFFFFF));
    //var listoJS1 = false;
    // ----------------------------//

   let perS02 = this.add.image(440, 542, 'caballoSelecS')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perS02.setTint(0x7353EC)
          perS01.visible = false;
          perS03.visible = false;
          //grupoS.push('true')
          this.listoJS = true;

          this.eleccS01 = 'caballoS';
        })
    //.on('pointerover', () => perS02.setTint(0x7353EC))
    //.on('pointerout', () => perS02.setTint(0xFFFFFF));
    //var listoJS2 = false;
    // ----------------------------//

   let perS03 = this.add.image(300, 542, 'reynaSelecS')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perS03.setTint(0x7353EC)
          perS01.visible = false;
          perS02.visible = false;
          //grupoS.push('true')
          this.listoJS = true;

          this.eleccS01 = 'reynaS';
        })
    //.on('pointerover', () => perS03.setTint(0x7353EC))
    //.on('pointerout', () => perS03.setTint(0xFFFFFF));
    //var listoJS3 = false;


    //if(perS01.GAMEOBJECT_POINTER_DOWN || perS02.on(true) || perS03.on(true) && perV01.on(true) || perV02.on(true) || perV03.on(true)){}

   

        

    //lista de seleccion vikinga
    let perV01 = this.add.image(731, 542, 'peonSelecV')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perV01.setTint(0x7353EC)
          perV02.visible = false;
          perV03.visible = false;
          this.listoJV = true;
          //grupoV.push('true')

          //this.eleccV01.setData('peonV')
          this.eleccV01 = 'peonV';

        }).setData('peonV', true)
    //.on('pointerover', () => perV01.setTint(0x7353EC))
    //.on('pointerout', () => perV01.setTint(0xFFFFFF));
    //var listoJV4 = false;
    // ----------------------------//

    let perV02 = this.add.image(840, 542, 'caballoSelecV')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perV02.setTint(0x7353EC)
          perV01.visible = false;
          perV03.visible = false;
          this.listoJV = true;
          //grupoV.push('true')

          this.eleccV01 = this.setData('caballoV')

        })
    //.on('pointerover', () => perV02.setTint(0x7353EC))
    //.on('pointerout', () => perV02.setTint(0xFFFFFF));
    //var listoJV5 = false;
    // ----------------------------//


    let perV03 = this.add.image(975, 542, 'reynaSelecV')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perV03.setTint(0x7353EC)
          perV01.visible = false;
          perV02.visible = false;
          this.listoJV = true;
          //grupoV.push('true')//.setData('reyna', true)


          this.eleccV01 = this.setData('reynaV')
        })
    //.on('pointerover', () => perV03.setTint(0x7353EC))
    //.on('pointerout', () => perV03.setTint(0xFFFFFF));
    //var listoJV6 = false;
    // ----------------------------//
    
    console.log(perS01.getData('peonS'))
    console.log(perV01.getData('peonV'))


  }
  

  update(){
    /*console.log(nose.getData('nose'))

    if (nose.getData('nose') === true){
      console.log(nose)
    };*/

    /*const getResult = function(grupoS, grupoV) {
      var i = grupoS.length;
      
    
      if (grupoS[i] !== grupoV[i]) return start = false;
      while (i --){
        if (grupoS[i] !== grupoV[i]) return false;
    
      };
      return start = true; 

     }

     if (start === true){
      this.scene.start("PlayZoom")
     }

     console.log("Comparing S and V", getResult(grupoS, grupoV));*/



    if (this.listoJS && this.listoJV === true){
        //console.log(this.listoJS1)
        console.log(eleccS01)
        console.log(eleccV01)
        //this.scene.start("PlayZoom", { score: score })
        
        //console.log(perS01.getData('peonS'))
        //console.log(perV01.getData('peonV'))
      
    }

    /*if (grupoS.includes(true, 0) && grupoV.filter(true, 0) === true){
      console.log("hola")
      this.scene.start("PlayZoom")
    }*/
  }

}


