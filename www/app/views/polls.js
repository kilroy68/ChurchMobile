var button1 = {
    xtype: 'button',
    text: "click me"
}

Bowmar.myToolBar = Ext.extend(Ext.Panel,{
    html: 'test'
});

Ext.reg('testPanel',Bowmar.myToolBar);

Bowmar.views.Polls = Ext.extend(Ext.Panel, {
                                   title: "Poll",
                                   iconCls: "reply",


                                    items:[
                                        button1,
                                        {
                                            xtype: 'testPanel'
                                        },
                                        {
                                            xtype: 'button',
                                            text: 'Poll Button'
                                        }
                                    ],
                                    initComponent: function() {
                                        //app.stores.contacts.load();




                                        Bowmar.views.Polls.superclass.initComponent.apply(this, arguments);
                                    }
                                    });

Ext.reg('polls', Bowmar.views.Polls);