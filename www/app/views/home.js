Bowmar.views.Home = Ext.extend(Ext.Panel, {
                                   title: "Home",
                                   iconCls: "home",
                                    initComponent: function() {
                                        //app.stores.contacts.load();
                                        Bowmar.views.Home.superclass.initComponent.apply(this, arguments);
                                    }
                                    });

Ext.reg('home', Bowmar.views.Home);