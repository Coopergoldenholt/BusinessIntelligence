import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ChartView from '../components/Charts';
import moment from 'moment';

const BusinessDetail = ({route}) => {
  const {location, name, revenue} = route.params;

  const getValues = (type) => {
    let values = [];
    for (let rev of revenue) {
      if (type === 'date') {
        values.push(moment(rev.date).format('L'));
      } else {
        values.push(rev[type]);
      }
    }
    return values;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{location.address}</Text>
        <Text style={styles.addressText}>
          {location.city}, {location.country}
        </Text>
      </View>
      <View style={styles.chartContainer}>
        <ChartView xValues={getValues('date')} yValues={getValues('value')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    alignSelf: 'center',
    paddingVertical: 20,
  },
  addressContainer: {
    paddingBottom: 25,
    alignSelf: 'center',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 20,
  },
  chartContainer: {
    flex: 0.5,
  },
});

export default BusinessDetail;
