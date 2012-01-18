Ext.regApplication({
    name:'Bowmar',

    launch:function () {
        console.log('testing...');
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch:function () {
        console.log('Inside mainLaunch');
        if (!device || !this.launched) {
            return;
        }
        console.log('Creating the viewport...');

        try {
            Bowmar.views.main = new Bowmar.Main();

            Bowmar.views.viewport = new Ext.Panel({
                fullscreen:true,
                layout:'card',
                cardAnimation:'slide',
                items:[
                    Bowmar.views.main,
                    Bowmar.views.calendarDetail
                ]
            });
        } catch (ex) {
            if (ex.message && ex.name) {
                console.log("someMethod caught an exception of type " + ex.name + ": ", ex.message);
                console.log(ex);
            } else {
                console.log("someMethod caught a poorly-typed exception: " + ex);
            }
            console.log(ex.stack);
        }
        //this.viewport = new Bowmar.Viewport();
    }
});

