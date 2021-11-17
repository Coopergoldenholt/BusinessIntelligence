import * as React from 'react';
import {Text, View} from 'react-native';

const BusinessDetail = ({name, location, city, country, revenue}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default BusinessDetail;
