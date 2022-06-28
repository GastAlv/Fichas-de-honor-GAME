import Button from "../js/button.js";

var grupoS =  [];
var grupoV = [];
var start;

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


    var eleccS01;
    var eleccV01;
   //lista de seleccion samurais
   let perS01 = this.add.image(549, 542, 'peonSelecS')
   .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          perS01.setTint(0x7353EC)
          perS02.visible = false;
          perS03.visible = false;
          this.listoJS = true;
          //grupoS.push('true')
          eleccS01 = 'peonS';
          console.log(eleccS01)
          
          //console.log(grupoS)
        })//.setData('peonS', true)
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

          eleccS01 = 'caballoS';
          console.log(eleccS01)
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

          eleccS01 = 'reynaS'
          console.log(eleccS01)
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
          eleccV01 = 'peonV';
          console.log(eleccV01)

        })//.setData('peonV', true)
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

          eleccV01 = 'caballoV';
          console.log(eleccV01)

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


          eleccV01 = "reynaV";
          console.log(eleccV01)
        })
    //.on('pointerover', () => perV03.setTint(0x7353EC))
    //.on('pointerout', () => perV03.setTint(0xFFFFFF));
    //var listoJV6 = false;
    // ----------------------------//
    
    //peonS y v las comente
    //console.log(perS01.getData('peonS'))
    //console.log(perV01.getData('peonV'))
    //console.log(eleccS01)
    //console.log(eleccV01)
    
    perS01.setDataEnabled()
    perS01.data.set('name', 'peonS');
    perS01.data.set('vida', 150)
    perS01.data.set('daño', 10)
    perS01.data.set('name', 'peonS');
    //console.log(perS01.data.getAll());
    
    this.registry.events.on('combate1', () => {
      console.log(perS01.data.getAll())

    });

    this.registry.events.emit('combate1')


    /*var auto;
    auto.setDataEnabled()
    auto.data.set('vida', 100)
    auto.data.set('color', "red")
    auto.data.set('daño', 20)

    console.log(this.auto.getAll())*/


  }
  

  update(){
    //console.log(eleccS01)
    //console.log(eleccV01)
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
        //console.log(eleccS01)
        //console.log(eleccV01)
        this.scene.start("PlayZoom")
        
        //console.log(perS01.getData('peonS'))
        //console.log(perV01.getData('peonV'))
      
    }

    /*if (grupoS.includes(true, 0) && grupoV.filter(true, 0) === true){
      console.log("hola")
      this.scene.start("PlayZoom")
    }*/
  }

}


