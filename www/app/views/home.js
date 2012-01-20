    Bowmar.views.Home = Ext.extend(Ext.Panel, {
                               title: "Home",
                               iconCls: "home",
                                   id: 'home',
                                   styleHtmlContent: true,
                                   layout:'vbox',
                                   
                               initComponent: function() {
                                    Ext.apply(this, {
                                              defaults : {
                                                xtype:'panel',
                                                flex:1
                                              },
                                              items: [
                                                      {flex:3,
                                                        layout:'vbox',
                                                      width:'100%',
                                                      defaults: {xtype:'panel', flex:1, style:{marginBottom:'15px'}},
                                                      items: [{},{html:'<h2>Bowmar Baptist Church</h2>'},{}]
                                                      },
                                                      {items:[{xtype:'button', text: "Mission Statement", width:'200'}]},
                                                      {items:[{xtype:'button', text: "Staff", width:'200'}]},
                                                      {items:[{xtype:'button', text: "Announcements", width:'200'}], style:{marginTop: '50px'}}
                                              ],
                                              cls: 'home-panel'
                                     });
                                   
                                   //below should be able to change backgrounds but doesn't for some reason
                                   /*this.setProfile = function (profile) {
                                   if (profile=='portraitPhone') {
                                   this.cls='home-panel-phone-port';
                                   } else if (profile=='landscapePhone') {
                                   this.cls='home-panel-phone-land';
                                   } else if (profile=='portraitTablet') {
                                   this.cls='home-panel-tab-port';
                                   } else if (profile=='landscapeTablet') {
                                   Bowmar.views.viewport.items.getAt(0).items.getAt(0).cls = 'home-panel-phone-land';
                                   }
                                   };*/
                                   
                                   Bowmar.views.Home.superclass.initComponent.apply(this, arguments);
                                    }
                               });

    Ext.reg('home', Bowmar.views.Home);
