Bowmar.views.Calendar = Ext.extend(Ext.Panel, {
                                   title: "Calendar",
                                   iconCls: "organize",
                                    initComponent: function() {
                                        //app.stores.contacts.load();
                                        Bowmar.views.Calendar.superclass.initComponent.apply(this, arguments);
                                    }
                                    });

Ext.reg('calendar', Bowmar.views.Calendar);