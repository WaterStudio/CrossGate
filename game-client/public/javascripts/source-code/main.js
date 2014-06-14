cc.game.onStart = function(){
    var designSize = cc.size(1024, 768);
    var screenSize = cc.view.getFrameSize();

    if(!cc.sys.isNative && screenSize.height < 768){
        designSize = cc.size(960, 480);
        cc.loader.resPath = "images/Normal";
    }else{
        cc.loader.resPath = "images/HD";
    }
    cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.SHOW_ALL);

    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MyScene());
    }, this);
};
cc.game.run();