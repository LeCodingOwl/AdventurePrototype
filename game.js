class Ch1 extends AdventureScene {
    constructor() {
        super("ch1", "Two Minds Think Alike:");
    }

    preload() {
        this.load.image("warehouse", "assets/images/backgrounds/warehouseEdit.jpg");
        
    }

    onEnter() {
       let background = this.add.sprite(720, 545, "warehouse");
       background.scaleX = 1.5;
       background.scaleY = 2;

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

//preload() {
    
//}

class Title extends Phaser.Scene {
    constructor() {
        super('title')
    }
    create() {
        let background = this.add.sprite(0, 0, )

        let titleText = this.add.text(530,200, "Cybernetic Love");
        titleText.setFontFamily("Roboto Serif");
        titleText.setAlign("center");
        titleText.setFontSize(120);
        titleText.setColor("Blue");

        let playText = this.add.text(880, 600, "Play");
        playText.setFontFamily("Roboto Serif");
        playText.setAlign("center");
        playText.setFontSize(80);
        playText.setColor("Blue");
        playText.setInteractive();
        playText.on(Phaser.Input.Events.POINTER_OVER, function() {
            playText.setColor("White");
        })
        playText.on(Phaser.Input.Events.POINTER_OUT, function() {
            playText.setColor("Blue");
        })
        playText.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('intro')); 
        })
    }
}

//Intro
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Introduction:").setFontSize(50)
        .setFontFamily("Roboto Serif");
        this.add.text(50,100, "In a futuristic city, there were two boys named Ryu and Takumi. They lived in a world where technology had advanced so much that people could augment their bodies with cybernetic enhancements. Ryu was a skilled hacker, while Takumi was a genius engineer who built advanced cybernetic limbs.")
        .setFontFamily("Roboto Serif")
        .setFontSize(40)
        .setWordWrapWidth(1000);

        this.add.text(50, 400, "Our Story begins with Ryu, a skilled hacker, who overhears rumors of a genius engineer named Takumi, renowned for his advanced cybernetic limbs. Eager to learn more, Ryu decides to hack into Takumi’s system to steal the valuable information.")
        .setFontFamily("Roboto Serif")
        .setFontSize(40)
        .setWordWrapWidth(1000);

        let continueButt = this.add.text(50,750, "Click anywhere to continue.")
        .setFontFamily("Roboto Serif")
        .setFontSize(40);
        
        this.tweens.add({
            targets: continueButt,
            alpha: 0.1,
            yoyo: true,
            duration: 1200,
            repeat: -1
        });

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('ch1'));
        });
    }
}
//Outro
class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    //scene: [Title, Intro, Ch1, Demo2, Outro],
    scene: [Ch1],
    title: "Adventure Game",
});

