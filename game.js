class Ch1 extends AdventureScene {
    constructor() {
        super("ch1", "Two Minds Think Alike:");
    }

    preload() {
        this.load.image("warehouse", "assets/images/backgrounds/warehouseEdit.jpg");
        this.load.image("Ryu", "assets/images/characters/Ryu.png");
        this.load.image("Takumi", "assets/images/characters/Takumi.png");
        this.load.image("lock", "assets/images/sprites/lock.png");
        this.load.image("cabinet", "assets/images/sprites/cabinet.png");
        this.load.image("note", "assets/images/sprites/note.png");
        
    }

    onEnter() {
       let background = this.add.sprite(670, 300, "warehouse");
       background.scaleX = 1.6;
       background.scaleY = 2;

       let ryu = this.add.sprite(180, 800, "Ryu");
       let takumi = this.add.sprite(500, 800, "Takumi");
       takumi.alpha = 0;

       //Textbox; Should cover the character's lower torso
       this.add.rectangle(700, 990, 1500, 300, 0x000000);

       this.label = this.add.text(40, 870, '')
       .setFontFamily("Roboto Serif")
       .setFontSize(30)
       .setWordWrapWidth(1400);
       this.typewriteText("Objective: Locate the passcode.");

       /*this.label = this.add.text(40, 870, '')
       .setFontFamily("Roboto Serif")
       .setFontSize(30)
       .setWordWrapWidth(1400);
       this.typewriteText("(Ryu is in front of the door of the warehouse where the valuable information is located. He manages unlock the lock and enters the into the warehouse)")
       this.input.on('pointerdown', () => {
        this.label.visible = false;

       this.label = this.add.text(40, 870, '')
       .setFontFamily("Roboto Serif")
       .setFontSize(30)
       .setWordWrapWidth(1400);
       this.label.visible = true;
       this.typewriteText("Ryu: Alright… Now… Where would I find that data..?")
       });
       */

       let cabinet = this.add.sprite(this.w * 0.3, this.w * 0.35, "cabinet")
       .setInteractive()
       .on('pointerover', () => this.showMessage("A cabinet. Probably hiding something important in it."))
       .on('pointerdown', () => {
            let note = this.add.sprite(this.w * 0.3, this.w * 0.30, "note")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a note. There seems to be writing on the note. 1-2-3-4.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the note.");
                this.gainItem('note');
                this.tweens.add({
                    targets: note,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => note.destroy()
                });
            })
       })

       let lock = this.add.sprite(this.w * 0.6, this.w * 0.3, "lock")
       .setInteractive()
       .on('pointerover', () => {
        if (this.hasItem("note")) {
            this.showMessage("You've got the code for this lock.");
        } else {
            this.showMessage("The combination for the lock has to be somewhere...");
        }
        })
        .on('pointerdown', () => {
            if (this.hasItem("note")) {
                this.loseItem("note");

                this.showMessage("Ryu: Alright… Now where would I find the information?");
                /*this.input.on('pointerdown', () => {
                    this.showMessage()
                }
                */

                this.time.delayedCall(600, () =>this.showMessage("Takumi: Well you’re most certainly not going to find it here."));
                takumi.alpha = 100;

                this.time.delayedCall(900, () =>this.showMessage("Ryu: Ah! … How long have you been standing here..?"));

                this.time.delayedCall(1200, () =>this.showMessage("Takumi: Long enough. Quite bold of you to hack your way into my warehouse. What do you want?"));

                this.time.delayedCall(1500, () =>this.showMessage("Ryu: I was curious about the person behind these cybernetic limbs. Say… How about we work together instead? With my amazing hacking abilities and your genius mind, we can make some revolutionary stuff."));

                this.time.delayedCall(1700, () =>this.showMessage("Takumi: Hmm… Sure."));

                this.time.delayedCall(2000, () =>this.gotoScene('ch2'));
            }

        })
    }
    /*
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
    */
   /*
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
            */

    }

    class Ch2 extends AdventureScene {
        constructor() {
            super("ch2", "A Bound Beginning to Blossom:");
        }

        preload() {
            this.load.image("warehouse", "assets/images/backgrounds/warehouseEdit.jpg");
            this.load.image("Ryu", "assets/images/characters/Ryu.png");
            this.load.image("Takumi", "assets/images/characters/Takumi.png");
            this.load.image("Arrow", "assets/images/sprites/arrow.png");

        }

        onEnter() {
            let talkWithRyu = false;
            let talkWithTaku = false;

            let background = this.add.sprite(670, 300, "warehouse");
            background.scaleX = 1.6;
            background.scaleY = 2;

            let ryu = this.add.sprite(180, 800, "Ryu")
            .setInteractive()
            .on('pointerover', () => {
                if(talkWithRyu == true)
                {
                    this.showMessage("You already interacted with Ryu");
                }
                else
                {
                    this.showMessage("It seems like Ryu has something to say");
                }


            })
            .on('pointerdown', () => {
                talkWithRyu = true;
                this.time.delayedCall(100, () => this.showMessage("Takumi: Your hacking skills are very impressive, Ryu."))
                this.time.delayedCall(300, () => this.showMessage("Ryu: Haha yeah, well I’ve been practicing, honing my skills."))
                this.time.delayedCall(500, () => this.showMessage("Takumi admires Ryu for his intelligence and adventurous spirit."))
            })
            let takumi = this.add.sprite(1300, 800, "Takumi")
            .setInteractive()
            .on('pointerover', () => {
                if(talkWithTaku == true)
                {
                    this.showMessage("You already interacted with Takumi");
                }
                else
                {
                    this.showMessage("It seems like Takumi has something to say");
                }


            })
            .on('pointerdown', () => {
                talkWithTaku = true;
                this.time.delayedCall(100, () => this.showMessage("Ryu: You know, Takumi, your creations are amazing. They're like works of art. I've never seen such intricate designs."))
                this.time.delayedCall(300, () => this.showMessage("Takumi: Thank you Ryu. I pour my heart and soul into every piece I build."))
                this.time.delayedCall(500, () => this.showMessage("Ryu finds himself drawn to Takumi’s quiet determination and unwavering focus."))
            })

            let arrow = this.add.sprite(750, 600, "Arrow")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Move to the next chapter?");
            })
            .on('pointerdown', () => {
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(900, () => this.gotoScene('ch3'));
            });

            //Textbox; Should cover the character's lower torso
            this.add.rectangle(700, 990, 1500, 300, 0x000000);

            this.label = this.add.text(40, 870, '')
            .setFontFamily("Roboto Serif")
            .setFontSize(30)
            .setWordWrapWidth(1400);
            this.typewriteText("Objective: Interact with the characters or click the arrow to move to the next chapter.");
        }
    }


class Ch3 extends AdventureScene {
    constructor() {
        super("ch3", "Fighting Through:")
    }
    preload() {
        this.load.image("hall", "assets/images/backgrounds/officeHallEdit.jpg");
        this.load.image("drone", "assets/images/sprites/evilDrone.png");
    }
    onEnter() {
        let background = this.add.sprite(670, 300, "hall");
        background.scaleX = 1.6;
        background.scaleY = 2;

        let drone = this.add.sprite(this.w * 0.6, this.w * 0.2, "drone")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*buzz*');
                this.tweens.add({
                    targets: drone,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('ch4'));
        
        //Textbox; Should cover the character's lower torso
        this.add.rectangle(700, 990, 1500, 300, 0x000000);

        this.label = this.add.text(40, 870, '')
        .setFontFamily("Roboto Serif")
        .setFontSize(30)
        .setWordWrapWidth(1400);
        this.typewriteText("Objective: Destroy the drone");
    }
}

class Ch4 extends AdventureScene {
    constructor() {
        super("ch4", "The The Greatest Achievement:")
    }

    preload() {
        this.load.image("townhall", "assets/images/backgrounds/townHallEdit.jpg");
        this.load.image("Ryu", "assets/images/characters/Ryu.png");
        this.load.image("Takumi", "assets/images/characters/Takumi.png");
    }
    onEnter() {
        let background = this.add.sprite(670, 300, "townhall");
            background.scaleX = 1.6;
            background.scaleY = 2;

        let ryu = this.add.sprite(180, 800, "Ryu")
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("That's not Takumi!");
        })

        let takumi = this.add.sprite(1300, 800, "Takumi")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Give him a kiss!");
            })
            .on('pointerdown', () => {
                this.showMessage("*Kiss* AWWW");
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(900, () => this.gotoScene('outro'))
            });


        //Textbox; Should cover the character's lower torso
        this.add.rectangle(700, 990, 1500, 300, 0x000000);

        this.label = this.add.text(40, 870, '')
        .setFontFamily("Roboto Serif")
        .setFontSize(30)
        .setWordWrapWidth(1400);
        this.typewriteText("You did it! You save the city. Now, give Takumi a kiss <3 (Click on Takumi)");
    }
}

/*
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
*/
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
        this.add.text(50,50, "The End:").setFontSize(50)
        .setFontFamily("Roboto Serif");
        this.add.text(50,100, "After defeating the CEO of BioCorp, Ryu and Takumi return back to the city, where they are greeted by everyone and awarded medals for their bravery for saving the city. As they wave to everyone in the city, the two look at each other, knowing that the greatest achievement wasn’t saving the city, but it was their love for each other. Their bond was unbreakable, and they knew that they would always be together, even in the faces of danger.")
        .setFontSize(40)
        .setWordWrapWidth(1000);
        let continueButt = this.add.text(50,750, "Click anywhere to start over")
        .setFontFamily("Roboto Serif")
        .setFontSize(40);
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
    scene: [Title, Intro, Ch1, Ch2, Ch3, Ch4, Outro],
    title: "Cybernetic Love",
});

