Bowmar.Viewport = Ext.extend(Ext.TabPanel, {
                                   fullscreen: true,
                                   tabBar:{
                                   dock: 'bottom',
                                   layout:{
                                   pack: 'center'
                                   }
                                   },
                                   type: 'dark',
                                   sortable: true,
                             items: [{ xtype: 'services'},
                                     { xtype: 'calendar'},
                                     { xtype: 'polls'}
                                     ],
                                   
                                   initComponent: function() {
                                        Bowmar.Viewport.superclass.initComponent.apply(this,arguments);
                                   }
                                   });

