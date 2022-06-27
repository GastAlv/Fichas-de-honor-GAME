export class UI extends Phaser.Scene{
    graphics: Phaser.GameObjects.Graphics;
    life_bar: Phaser.Geom.Rectangle;
    actual_life: number;

    constructor() {
        super({
            key: 'UI'
        });
    }

    init() {
        console.log('UI');
    }

    create(): void {
        const life_width = 350;
        this.actual_life = life_width;

        this.graphics = this.add.graphics({
            fillStyle: {color: 0x34495e}
        });
        this.life_bar = new Phaser.Geom.Rectangle(20, 20, life_width, 50);


        this.registry.events.on('vida', (life) => {
            // Recibe la vida actual en el argumento life.
           this.actual_life = this.reglaTres(life, life_width);
        });
    }

    private reglaTres(life: any, life_width: number): number {
        return life * life_width / 100;
    }

    update(): void {
        this.graphics.clear();
        this.life_bar.width = Math.round(
            (Phaser.Math.Interpolation.CatmullRom([this.life_bar.width, this.actual_life], 0.05))
        );
        this.graphics.fillRectShape(this.life_bar);
    }
}
