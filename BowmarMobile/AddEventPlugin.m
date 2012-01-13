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

- (void) AddEvent:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;
{
    @try{
        EKEventStore *eventStore = [[EKEventStore alloc] init];
    
        EKEvent *event  = [EKEvent eventWithEventStore:eventStore];
        event.calendar = [eventStore defaultCalendarForNewEvents];
        event.title     = @"EVENT TITLE";
        event.startDate = [[NSDate alloc] init];
        event.endDate   = [[NSDate alloc] initWithTimeInterval:600 sinceDate:event.startDate];
    
        NSError *err;
        [eventStore saveEvent:event span:EKSpanThisEvent error:&err]; 
    }
    @catch (NSException *ex) {
        return;
    }
}

@end
