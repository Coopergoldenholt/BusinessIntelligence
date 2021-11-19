//
//  RNMapManager.m
//  BusinessIntelligence
//
//  Created by Cooper Holt on 11/17/21.
//


#import <MapKit/MapKit.h>
#import <React/RCTViewManager.h>

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE(RNMap)

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
