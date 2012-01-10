Bowmar.views.Polls = Ext.extend(Ext.Panel, {
                                   title: "Poll",
                                   iconCls: "reply",
                                    initComponent: function() {
                                        //app.stores.contacts.load();
                                        Bowmar.views.Polls.superclass.initComponent.apply(this, arguments);
                                    }
                                    });

Ext.reg('polls', Bowmar.views.Polls);