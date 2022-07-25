class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("button1","images/ui/buttons/2/1.png");
        this.load.image("button2","images/ui/buttons/2/5.png");
        this.load.audio('cat',["audio/meow.mp3","audio/meow.ogg"]);
        this.load.audio('backgroundMusic',["audio/background.mp3","audio/backgroud.ogg"]);
        
        this.load.image("toggleBack","images/ui/toggles/1.png");
        this.load.image("sfxOff","images/ui/icons/sfx_off.png");
        this.load.image("sfxON","images/ui/icons/sfx_on.png");
        this.load.image("musicOn","images/ui/icons/music_on.png");
        this.load.image("musicOff","images/ui/icons/music_off.png");



    }
    create() 
    {
      emitter= new Phaser.Events.EventEmitter();
      controller= new Controller();
      var mediaManager = new MediaManager({scene:this});

      var sb=new SoundButtons({scene:this});



      
    }
      /*
      mediaManager.setBackgroudMusic('backgroundMusic');
      
      
      //UI BUTTON
      var fireText={color:'black',fontSize:30};
      var flatButton = new FlatButton  ({scene:this,key:'button1',text:'Fire!',x:240,y:100,event:'button_pressed',params:'fire_lasers',textConfig:fireText});
      var flatButton2 = new FlatButton  ({scene:this,key:'button2',text:'Destruct!',x:240,y:300,event:'button_pressed',params:'self_distruct'});
      
      var toggleButton =new ToggleButton ({scene:this,backKey:'toggleBack',onIcon:'musicOn',offIcon:'musicOff',event:G.TOGGLED_MUSIC,x:240,y:450});
      emitter.on('button_pressed',this.buttonPressed,this);
   
    }
    buttonPressed(params)
    {
        console.log(params);
        model.musicOn=false;
       // this.scene.start("SceneOver");
        //emitter.emit(G.PLAY_SOUND,'cat');
    }
    */
    update() 
    {
    }
}