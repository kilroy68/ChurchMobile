/**
 * @author David Stuart
 */
Ext.regModel('CalendarTimes', {
   fields: [
       {name: 'start', type:'date'},
       {name: 'end', type:'date'},
       {
           name: 'startMonth',
           convert: function(value, record){
               var fullDate = record.get('start');
               if(fullDate == null) return '';
               var month = fullDate.format('F');
               return month;
           }
       },
       {
           name: 'dayOfWeek',
           convert: function(value, record){
               var fullDate = record.get('start');
               if(fullDate == null) return '';
               var day = fullDate.format('l');
               return day;
           }
       },
       {
           name: 'formattedDate',
           convert: function(value, record){
               var fullDate = record.get('start');
               if(fullDate == null) return '';
               var day = fullDate.format('l, F j, Y');
               return day;
           }
       },
       {
           name: 'formattedTime',
           convert: function(value, record){
               var fullDate = record.get('start');
               if(fullDate == null) return '';
               var day = fullDate.format('g:i a');
               return day;
           }
       },
       {
           name: 'formattedEndTime',
           convert: function(value, record){
               var fullDate = record.get('end');
               if(fullDate == null) return '';
               var day = fullDate.format('g:i a');
               return day;
           }
       }
   ]
});

Ext.regModel('Calendar', {
    hasMany: [
        {model: 'CalendarTimes', name: 'when'}
    ],

    fields: [
		{name: 'title', type: 'string'},
		{name: 'details', type: 'string'},
		{name: 'link', type: 'string'},
		{name: 'publishedDate', type: 'date'},
		{name: 'contentSnippet', type: 'string'}
	]
});