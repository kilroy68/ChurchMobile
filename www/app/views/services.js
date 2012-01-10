Bowmar.views.Services = Ext.extend(Ext.Panel, {
                                   title: "Services",
                                   iconCls: "home",
                                    initComponent: function() {
                                        //app.stores.contacts.load();
                                        Bowmar.views.Services.superclass.initComponent.apply(this, arguments);
                                    }
                                    });

Ext.reg('services', Bowmar.views.Services);