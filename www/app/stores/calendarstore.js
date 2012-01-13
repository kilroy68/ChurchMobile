/**
 * @author David Stuart
 */

/*
Ext.regStore('CalendarStore', {
    model: 'Calendar',
    //sorters: { property: 'title', direction: 'ASC'},
    storeId: 'calendarstore',
    proxy: {
             type: 'ajax',
             url: '',
             reader: {
                type: 'xml',
                root: 'feed'
             }
            }
});
 */


/*
var calendarStore = new Ext.data.Store({
                               proxy: new Ext.data.ScriptTagProxy({
                                                                  url: 'http://ajax.googleapis.com/ajax/services/feed/load',
                                                                  extraParams: {
                                                                    q: 'https://www.google.com/calendar/feeds/ikv2s8iq4f8d7enmqlpsahi6tk@group.calendar.google.com/public/basic',
                                                                    v: '1.0'
                                                                  }
                                                                  }),
                               reader: new Ext.data.JsonReader({
                                                               root: 'responseData.feed.entries',
                                                               fields: [
                                                                        {name: 'title'}
                                                                        ]
                                                               }),
                               autoLoad: true
                               });*/
