import React, {Component} from 'react';
import {requireNativeComponent} from 'react-native';

const MODULE_NAME = 'RNBarChartView';
const Chart = requireNativeComponent(MODULE_NAME, null);

class ChartView extends Component {
  render() {
    const {xValues, yValues} = this.props;

    return <Chart xValues={xValues} yValues={yValues} style={{flex: 1}} />;
  }
}

export default ChartView;
