/**
 * Phonegap AddEvent Instance plugin
 * Copyright (c) Nimish Nayak 2011
 *
 */

console.log("loaded addeventplugin.js");

function AddEventPlugin()
{
    this.resultCallback = null;
}

AddEventPlugin.EventResultType =
{
    Failed:0,
    Success:1
};

AddEventPlugin.prototype.AddEvent = function(title, description, startdatetime, enddatetime)
{
    var args = {};

    args.title = title;
    args.description = description;
    args.startdatetime = startdatetime.toString();
    args.enddatetime = enddatetime.toString();

    PhoneGap.exec("AddEventPlugin.AddEvent", args);

    //PhoneGap.exec(success, fail, "AddEventPlugin", "AddEvent", fields);

    return;
};

AddEventPlugin.prototype.AddEventWithCB= function(cbfunction, title, description, startdatetime, enddatetime)
{
    this.resultCallback = cbFunction;
    this.AddEvent.apply(this,[title,description, startdatetime, enddatetime]);
};

AddEventPlugin.prototype._didFinishWithResult = function(res)
{
    this.resultCallback(res);
};

console.log("Calling PhoneGap.addConstructor...");

PhoneGap.addConstructor(function()
{
    console.log("Inside AddEventPlugin - addConstructor")
    if(!window.plugins){
        window.plugins = {};
    }
    window.plugins.AddEventPlugin = new AddEventPlugin();
});
