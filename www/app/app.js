Ext.regApplication({
    name:'Bowmar',

    launch:function () {
        console.log('testing...');
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch:function () {
        console.log('Inside mainLaunch');
        if (!device || !this.launched) {return;}
        console.log('Creating the viewport...');

        Bowmar.views.main = new Bowmar.Viewport();

        Bowmar.views.viewport = new Ext.Panel({
           fullscreen : true,
            layout : 'card',
            cardAnimation : 'slide',
            items: [
                Bowmar.views.main,
                Bowmar.views.calendarDetail
            ]
        });

        //this.viewport = new Bowmar.Viewport();
    }
});

