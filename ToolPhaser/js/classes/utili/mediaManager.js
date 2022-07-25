class MediaManager
{
    constructor(config)
    {
        this.scene=config.scene;
        emitter.on(G.PlAY_SOUND,this.playSound,this);
        emitter.on(G.MUSIC_CHANGED,this.musicChanged,this);
    }
    musicChanged(){
        if(this.background)
        {
            this.background.stop();
        }
    }
    playSound(key)
    {
        if (model.soundOn==true)
        {
        var sound = this.scene.sound.add(key);
        sound.play();
        }
    }
    setBackgroudMusic(key){
        if (model.musicOn==true)
        {
        /*var*/ this.background = this.scene.sound.add(key,{volume:.5,loop:true});
        this.background.play();
        }
    }
}