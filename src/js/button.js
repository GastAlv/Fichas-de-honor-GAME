// Clase Boton, para no repetir tanto codigo
class Button {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ 
                backgroundColor: '#404040', 
                fontSize: '50px', 
                fill: '#000', 
                fontFamily: "asian"
            })
            .setInteractive({ useHandCursor: true })
            //.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() =>Borrar);
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#B9B9B9' }))
            .on('pointerout', () => button.setStyle({ fill: '#000' }))
    }
}
function loadFont(name, url) {
    var newFont = new FontFace(name, `url(${url})`);
    newFont.load().then(function (loaded) {
        document.fonts.add(loaded);
    }).catch(function (error) {
        return error;
    });
}

function Borrar(bAtaque){
    bAtaque.visible = false;
    /*bObEstats.visible = false;
    bObjeto.visible = false;*/

    if(bAtaque.visible === true){
    bAtaque.visible = false;;
    };
};

loadFont("asian", "../public/assets/fuentes/OPTIAsian.otf");

export default Button;