class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //pwede dito audio and picture
        //para sa image this.load.image("key","path")
    	 this.load.image("face", "image/face.png");
        //for animation naman
       // this.load.spritesheet('boy', 'image/boy.png', { frameWidth: 120, frameHeight:200 });
       //for adding sound
       //  this.load.audio('cat',['audio/meow.mp3','audio/meow.ogg']);
       this.load.image("toggleBack","images/ui/toggles/1.png");
       this.load.image("sfxOff","images/ui/icons/sfx_off.png");
       this.load.image("sfxON","images/ui/icons/sfx_on.png");
       this.load.image("musicOn","images/ui/icons/music_on.png");
       this.load.image("musicOff","images/ui/icons/music_off.png");
    }
    create() {
      //creating a sound
      //this.catSound=this.catSound.add('cat');
      //this.catSound.play();

      //creating an graphics 
      this.graphics=this.add.graphics();
      this.graphics.lineStyle(8,0xff0000);
      this.graphics.fillStyle(0xff00ff,.5);
      //this.strokeCircle(s,s,s) .strokeRect (l,t,r,b)
      this.graphics.strokeCircle(100,200,60);
      this.graphics.fillCircle(100,200,60)
      
      //clicking sprite for the face image
      // this.face = this.add.image(game.config.width/2,game.config.height/2, "face");
       //this.face.setInteractive();
       //this.face.on('pointerdown',this.onDown,this);

        //create text naman
        //this.text1 = this.add.text(200,300,"Hello!");
        //centering the text and styling
        //this.text1 = this.add.text(game.config.width/2,game.config.height/2,"Johndel Siriban!",{fontFamily:'Anton',color:"#ff0000"});
        //this.text1.setOrigin(0.5,0.5);
        
        //set-up the animation object op1:
       // this.char=this.add.sprite(game.config.width/2,game.config.height/2,"boy");
        //set-up the animation object op2:
       //this.char=this.add.sprite(0,game.config.height/2,"boy");
        //option 1 para sa animation
       // var frameNames= this.anims.generateFrameNumbers('boy');
       //this.anims.create({
        //   key: 'walk',
        //option 1: for animation
        //frames:frameNames,
        //option 2: for animation
          /*  frames: [
              { key: 'boy',frame:0 },
                { key: 'boy',frame:1 },
                { key: 'boy',frame:2 },
                { key: 'boy',frame:3 },
                { key: 'boy',frame:4 },
                { key: 'boy',frame:5 },
            ], */
           
        //speed ng walk
        //    frameRate: 8,
        //    repeat: -1
        //});
        //this.char.play('walk');
    
        //define the object
        //this.face = this.add.image(x,y, "key");
        //this.face = this.add.image(100,200, "face");
        // angle of the face
        //this.face.angle=45;
        // scale of the face
        // this.face.scaleX=.5;
        //this.face.scaleY=.5;
        //sizing of image by width and height
        //this.face.displayWidth=100;
        //this.face.displayHeight=50;
        //ito namn for proportion of the size sa width size
        // this.face.scaleY=this.face.scaleX;

        //for centering the image
       this.face = this.add.image(0,0, "face");
        this.face.setOrigin(0.5,0.5);
        this.face.x=game.config.width/2;
        this.face.y=game.config.height/2;

        //determine the movement op2:
        //this.tweens.add({targets:this.char,duration: 5000,x:game.config.width,y:0,alpha:0});

        //detecting when comple na yung movement op3
       // this.doWalk();
    }

    //onDown(){

   //   this.face.alpha=.5;
    //}
    /*
    //detecting when complete na yung movement op3 + parameter
     doWalk(){
        this.tweens.add({
            targets:this.char,
            duration: 5000,
            x:game.config.width,
            y:0,
            alpha:0,
            /*pwede ito kaso mahaba for parameter1
            onComplete:this.onCompleteHandler,
            onCompleteParams:[this] */
            //onComplete:this.onCompleteHandler.bind(this)
      //  });
     //}

    //detecting when complete na yung movement op3
    //onCompleteHandler(tween,targets, custom /* paramater1= scope*/){
    //    var char= targets[0];
    //    char.x=0;
    //    char.y= game.config.height/2;
    //    char.alpha=1;
      //scope.doWalk();
    //    this.doWalk();
    //}
    
    update()  {
      //determine the movement op1:
      //this.char.x++;
      //speed + movement +loop
      //this.char.x+=2;
      //if(this.char.x>game.config.width){
       // this.char.x=0;
      //}
      
    
    }
}