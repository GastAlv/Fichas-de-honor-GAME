// Clase Boton, para no repetir tanto codigo
class popUp {
    constructor(x, y, label, scene, callback) {
        const popUp = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ 
                backgroundColor: '#fff',
                fill: '#000'
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => popUp.setStyle({ fill: '#0000ff' }))
            .on('pointerout', () => popUp.setStyle({ fill: '#000' }));
    }
}

export default popUp;