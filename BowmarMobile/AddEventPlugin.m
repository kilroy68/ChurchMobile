//
//  AddEventPlugin.m
//  BowmarMobile
//
//  Created by David Stuart on 1/12/12.
//  Copyright (c) 2012 U.S. Army Corps of Engineers. All rights reserved.
//

#import "AddEventPlugin.h"
#import <EventKit/EventKit.h>

@implementation AddEventPlugin

@synthesize callbackID;

- (void) AddEvent:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options
{

    NSString* title = [options valueForKey:@"title"];
    NSString* description = [options valueForKey:@"description"];
    NSString* startDateS = [options valueForKey:@"startdatetime"];
    NSString* endDateS = [options valueForKey:@"enddatetime"];
    
    EKEventStore *eventStore = [[EKEventStore alloc] init];
    
    EKEvent *event  = [EKEvent eventWithEventStore:eventStore];
    event.calendar = [eventStore defaultCalendarForNewEvents];
    event.title     = title;
    event.location = @"Bowmar Baptist Church";
    
    if(description != nil){
        event.notes = description;
    }
    
    
    NSDateFormatter *parser = [[NSDateFormatter alloc] init];
    [parser setLocale: [[NSLocale alloc] initWithLocaleIdentifier:@"en_US_POSIX"]];
    [parser setDateFormat:@"EEE MMM dd yyyy hh:mm:ss zzz '(CST)'"];
    //[parser setDateFormat:@"yyyy-MM-dd hh:mm:ss.SSS"];
    //[parser setDateFormat:@"EEE, dd MMM yyyy HH:mm:ss '+0000'"];
    
    //NSDate *sdt = [parser dateFromString: @"Tue, 23 Nov 2010 16:14:14 +0000"];
    NSDate *sdt = [parser dateFromString: startDateS];
    event.startDate = sdt;
    event.endDate   = [parser dateFromString: endDateS];
    
    
    EKEventEditViewController* controller = [[EKEventEditViewController alloc] init];
    
    controller.eventStore = eventStore;
    controller.event = event;
    controller.editViewDelegate = self;
    
    [[super appViewController] presentModalViewController: controller animated:YES];
    [controller.view endEditing:TRUE];
    
}

- (void)eventEditViewController:(EKEventEditViewController *)controller didCompleteWithAction:(EKEventEditViewAction)action
{
    
    int webviewResult = 0;
    
    switch (action) {
        case EKEventEditViewActionCanceled:
            webviewResult = 0;
            break;
        case EKEventEditViewActionSaved:
            webviewResult = 1;
            break;
        case EKEventEditViewActionDeleted:
            webviewResult = 0;
            break;
        default:
            webviewResult = 0;
            break;
    }
    
    [[super appViewController] dismissModalViewControllerAnimated:YES];
    
    NSString* jsString = [[NSString alloc] initWithFormat:@"window.plugins.AddEventPlugin._didFinishWithResult(%d)",webviewResult];
    [self writeJavascript:jsString];
    
}

@end
