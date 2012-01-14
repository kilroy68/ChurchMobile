//  var name = {
//            xtype: 'panel',
//                       html: '<h1>Bowmar Baptist Church</h1>',
//                       flex:3
//                           };

    Bowmar.views.Home = Ext.extend(Ext.Panel, {
                               title: "Home",
                               iconCls: "home",
                                   styleHtmlContent: true,
                                   layout:'vbox',
                                   
                               initComponent: function() {
                                    Ext.apply(this, {
                                              defaults : {
                                                xtype:'button',
                                                width:'250',
                                                text:"Text Missing",
                                                flex:1,
                                                style:{marginBottom:'15px'}
                                              },
                                              items: [
                                                //name, missionStatementButton, staffButton, announcementsButton
                                                      {xtype: 'panel', 
//                                                        html:'<h2>Bowmar Baptist Church</h2>',
                                                        flex:3,
                                                        layout:'vbox',
                                                      width:'100%',
                                                      defaults: {xtype:'panel', flex:1},
                                                      items: [{},{html:'<h2>Bowmar Baptist Church</h2>',},{}]
                                                      },
                                                      {text: "Mission Statement"}, {text: "Staff"},
                                                      {text: "Announcements", style:{marginTop: '50px'}}
                                              ]
                                     });
                                   
                                   Bowmar.views.Home.superclass.initComponent.apply(this, arguments);
                                    }
                               });

    Ext.reg('home', Bowmar.views.Home);
