Bowmar.Main = Ext.extend(Ext.TabPanel, {
    id:'main',
    fullscreen:true,
    tabBar:{
        dock:'bottom',
        layout:{
            pack:'center'
        }
    },
    type:'dark',
    sortable:true,
    items:[
        { xtype:'home'},
        { xtype:'services'},
        { xtype:'calendar'},
        { xtype:'polls'}
    ],

    initComponent:function () {
        Bowmar.Main.superclass.initComponent.apply(this, arguments);
    }
});

