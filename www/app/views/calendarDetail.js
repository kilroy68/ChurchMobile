/**
 * Created by JetBrains WebStorm.
 * User: davidstuart
 * Date: 1/12/12
 * Time: 11:20 PM
 * To change this template use File | Settings | File Templates.
 */

Bowmar.views.calendarDetailTopToolbar = new Ext.Toolbar({
    title:'Calendar Event',
    items:[
        {
            text:'Back',
            ui:'back',
            handler:function () {
                Bowmar.views.viewport.setActiveItem('main', { type:'slide', direction:'right' });
            }
        },
        { xtype:'spacer' }
    ]
});

var detailsPanel = new Ext.Panel({
    id:'detailsSubPanel',

    tpl: '<div class="calendar-detail-title"><h2>{eventTitle}</h2></div>'+
        '<div class="calendar-detail-date"><p>{eventDate}</p></div>' +
        '<div class="calendar-detail-date"><p>Start Time: {eventStart}</p></div>' +
        '<div class="calendar-detail-date"><p>End Time: {eventEnd}</p></div>' +
        '<div class="calendar-detail-desc"><p>Details: <br><br>{eventDesc}</p></div>',


    data:
    {
        eventTitle: 'unknown',
        eventDesc: 'unknown',
        eventDate: 'unknown',
        eventStart: 'unknown',
        eventEnd: 'unknown'
    },

    setEvent: function(calendarItem)
    {
        var vals = {};
        vals.eventTitle = calendarItem.get('title');
        vals.eventDesc = calendarItem.get('details');
        var whenStore = calendarItem.get('when');
        vals.eventDate = calendarItem.get('when')[0].formattedDate;
        vals.eventStart = calendarItem.get('when')[0].formattedTime;
        vals.eventEnd = calendarItem.get('when')[0].formattedEndTime;;

        this.update(vals);
    }

});

Bowmar.views.calendarDetail = new Ext.Panel({

    id:'calendarDetail',

    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },

    details: detailsPanel,
    eventItem: null,

    items:[
        detailsPanel,
        {
            xtype:'button',
            text:'Add to your Calendar',
            style: {marginTop: '20px'},
            handler: function(){

                var d = this.up().eventItem;

                //var t = d.get('title');
                //var det = d.get('details');
                //var st = d.get('when')[0];
//                var parameters = [
//                    d.get('title'),
//                    d.get('details'),
//                    d.get('when')[0].start,
//                    d.get('when')[0].end
//                ];
           
           var title = d.get('title');
           var details = d.get('details');
           var start = d.get('when')[0].start;
           var end = d.get('when')[0].end;

                window.plugins.AddEventPlugin.AddEvent(title,details,start,end);
           
//                AddEventPlugin.nativeFunction(
//                    parameters,
//                    function(result){
//                        alert("Success");
//                    },
//                    function(error){
//                        alert("Error");
//                    }
                    //Ext.util.createDelegate(this.addEventSuccess, this),
                    //Ext.util.createDelegate(this.addEventFailure,this)
//                );
            }
        }
    ],
    dockedItems: [
        Bowmar.views.calendarDetailTopToolbar
    ],

    data:
    {
        eventTitle: 'unknown',
        eventDesc: 'unknown',
        eventDate: 'unknown',
        eventStart: 'unknown',
        eventEnd: 'unknown'
    },

    setEvent: function(calendarItem)
    {
        this.eventItem = calendarItem;
        return this.details.setEvent(calendarItem);
    },

    addEventSuccess: function()
    {
        Bowmar.views.viewport.setActiveItem('main', { type:'slide', direction:'right' });
    },

    addEventFailure: function()
    {
        Bowmar.views.viewport.setActiveItem('main', { type:'slide', direction:'right' });
    }
});
