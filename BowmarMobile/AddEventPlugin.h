//
//  AddEventPlugin.h
//  BowmarMobile
//
//  Created by David Stuart on 1/12/12.
//  Copyright (c) 2012 U.S. Army Corps of Engineers. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <PhoneGap/PGPlugin.h>

@interface AddEventPlugin : PGPlugin{
    
    NSString* callbackID;
}

@property (nonatomic, copy) NSString* callbackID;

- (void) AddEvent:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;


@end
