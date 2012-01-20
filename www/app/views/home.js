//  var name = {
//            xtype: 'panel',
//                       html: '<h1>Bowmar Baptist Church</h1>',
//                       flex:3
//                           };

    Bowmar.views.Home = Ext.extend(Ext.Panel, {
                               title: "Home",
                               iconCls: "home",
                                   id: 'home',
                                   styleHtmlContent: true,
                                   layout:'vbox',
                                   
                               initComponent: function() {
                                    Ext.apply(this, {
                                              defaults : {
//                                                xtype:'button',
                                                xtype:'panel',
//                                                width:'200',
//                                                text:"Text Missing",
                                                flex:1
//                                                style:{marginBottom:'15px'}
                                              },
                                              items: [
                                                //name, missionStatementButton, staffButton, announcementsButton
                                                      {//xtype: 'panel', 
//                                                        html:'<h2>Bowmar Baptist Church</h2>',
                                                        flex:3,
                                                        layout:'vbox',
                                                      width:'100%',
                                                      defaults: {xtype:'panel', flex:1, style:{marginBottom:'15px'}},
                                                      items: [{},{html:'<h2>Bowmar Baptist Church</h2>'},{}]
                                                      },
                                                      {items:[{xtype:'button', /*style: 'font-family: \'CalligraffitiRegular\', Arial, sans-serif;',*/text: "Mission Statement", width:'200'}]},
                                                      {items:[{xtype:'button', text: "Staff", width:'200'}]},
                                                      {items:[{xtype:'button', text: "Announcements", width:'200'}], style:{marginTop: '50px'}}
                                              ],
                                              //style: 'background: url(\'./app/images/blue_vines.png\');background-size:100% 100%;'
                                              //style: 'background: url(\'./app/images/blue_vines.png\');background-size:contain;background-repeat:no-repeat;background-position:center center;'
                                              cls: 'home-panel'
                                     });
                                   
                                   //this.cls = 'home-panel';
                                   
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
