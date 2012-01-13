/**
 * Phonegap MyPlugin Instance plugin
 * Copyright (c) Nimish Nayak 2011
 *
 */
var AddEventPlugin = {
    
    nativeFunction: function(fields, success, fail) {
        PhoneGap.exec(success, fail, "mil.army.usace.erdc.addevent", "AddEvent", fields);
        return;
    }
};
