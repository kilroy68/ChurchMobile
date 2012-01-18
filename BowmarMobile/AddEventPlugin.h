//
//  AddEventPlugin.h
//  BowmarMobile
//
//  Created by David Stuart on 1/12/12.
//  Copyright (c) 2012 U.S. Army Corps of Engineers. All rights reserved.
//

#import <Foundation/Foundation.h>
#ifdef PHONEGAP_FRAMEWORK
#import <PhoneGap/PGPlugin.h>
#else
#import "PGPlugin.h"
#endif

#import <EventKit/EventKit.h>
#import <EventKitUI/EventKitUI.h>

@interface AddEventPlugin : PGPlugin <EKEventEditViewDelegate>
{
    
   // NSString* callbackID;
}

@property (nonatomic, copy) NSString* callbackID;

- (void) AddEvent:(NSArray*)arguments withDict:(NSMutableDictionary*)options;


@end
