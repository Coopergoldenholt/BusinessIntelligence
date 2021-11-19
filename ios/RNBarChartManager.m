//
//  RNLineChartManager.m
//  BusinessIntelligence
//
//  Created by Cooper Holt on 11/18/21.
//

#import <React/RCTViewManager.h>
#import "BusinessIntelligence-Swift.h"

@interface RNBarChartManager: RCTViewManager
@end

@implementation RNBarChartManager
RCT_EXPORT_MODULE(RNBarChartView)

- (UIView *) view {
  RNBarChartView *view = [[RNBarChartView alloc] init];
  return view;
}

RCT_EXPORT_VIEW_PROPERTY(xValues, NSArray)
RCT_EXPORT_VIEW_PROPERTY(yValues, NSArray)

@end
