Bowmar.views.Calendar = Ext.extend(Ext.List, {
    title:"Calendar",
    iconCls:"organize",
    id: 'calendar',
    //emptyText : '<p class="no-searches">No Events in Calendar</p>',


    initComponent:function () {


        Ext.regModel('Contact', {
            fields: ['firstName', 'lastName']
        });


        var groupingBase = {
            itemTpl: '<div class="calendar-list-header"><h2>{title}</h2></div>'+
                '<div class="calendar-list-date"><tpl for="when">{formattedDate}<br>{formattedTime}</tpl></div>' +
                '<div class="calendar-list-details"><p>{details}</p></div>',
                //'<br>' +
                //'<div id="ext-comp-1011" class=" x-button x-button-small"><span class="x-button-label" id="ext-gen1031">Add to Calendar</span></div>',

            selModel: {
                mode: 'SINGLE',
                allowDeselect: true
            },
            disableSelection:true,
            //grouped: true,
            //indexBar: true,
            //sorters: 'when[0].sortableDate',



            onItemDisclosure: {
                scope: 'test',
                handler: function(record, btn, index) {

                    Bowmar.views.calendarDetail.setEvent(record);
                    Bowmar.views.viewport.setActiveItem('calendarDetail', {type: 'slide', direction: 'left'});

                    //alert('Disclose more info for ' + record.get('firstName'));
                }
            },

            store: new Ext.data.Store({
                model : 'Calendar',

//                getGroupString : function(record) {
//                    var x = record.get('when');
//                    if(x == null) return 'Monday';
//                    var r = record.get('when')[0].dayOfWeek;
//                    return r;
//                    //return record.get('when')[0].dayOfWeek;
//                },

                //sorters: 'when[0].sortableDate',

                proxy: new Ext.data.ScriptTagProxy({
                    url: 'https://www.google.com/calendar/feeds/ikv2s8iq4f8d7enmqlpsahi6tk@group.calendar.google.com/public/full?v=1.0&num=-1&max-results=10&alt=jsonc&orderby=starttime&sortorder=ascending&singleevents=true&start-min=2012-01-01&start-max=2013-01-01',
                    //url: 'https://www.google.com/calendar/feeds/ikv2s8iq4f8d7enmqlpsahi6tk@group.calendar.google.com/public/composite?v=1.0&num=-1&alt=jsonc&orderby=starttime&sortorder=ascending&singleevents=true&recurrence-expansion-start=2012-1-1&recurrence-expansion-stop=2013-1-1',
                    //url: 'https://www.google.com/calendar/feeds/ikv2s8iq4f8d7enmqlpsahi6tk@group.calendar.google.com/public/composite&recurrence-expansion-start:2012-1-1&recurrence-expansion-stop=2013-1-1',
                    extraParams: {
                        //q: 'https://www.google.com/calendar/feeds/ikv2s8iq4f8d7enmqlpsahi6tk@group.calendar.google.com/public/full',
                        v: '1.0',
                        num: '-1',
                        alt: 'jsonc',
                        orderby: 'starttime',
                        sortorder: 'ascending',
                        singleevents: 'true'

                    },
                    reader: new Ext.data.JsonReader({
                        root: 'data.items',
                        //totalProperty: 'totalCount',
                        fields: [
                            {name: 'title'},
                            {name: 'content'}
                        ]
                    })
                    //reader: 'object'
                    //callbackParam: callSuccess
                }),

                autoLoad: true
            })

//            store: new Ext.data.Store({
//                model: 'Contact',
//                sorters: 'firstName',
//
//                getGroupString : function(record) {
//                    return record.get('firstName')[0];
//                },

//                data: [
//                    {firstName: 'Tommy', lastName: 'Maintz'},
//                    {firstName: 'Ed', lastName: 'Spencer'},
//                    {firstName: 'Jamie', lastName: 'Avins'},
//                    {firstName: 'Aaron', lastName: 'Conran'},
//                    {firstName: 'Zed', lastName: 'Zacharias'}
//                ]
//
//
//            })
        };

        Ext.apply(this, groupingBase);

//        if (!Ext.is.Phone) {
//            new Ext.List(Ext.apply(groupingBase, {
//                floating: true,
//                width: 350,
//                height: 370,
//                centered: true,
//                modal: true,
//                hideOnMaskTap: false
//            })).show();
//        }
//        else {
//            new Ext.List(Ext.apply(groupingBase, {
//                fullscreen: true
//            }));
//        }

        //this.store.load();

        Bowmar.views.Calendar.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('calendar', Bowmar.views.Calendar);

function callSuccess(recBlock, arg, success) {
    alert(recBlock);
}


