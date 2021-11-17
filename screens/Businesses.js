import * as React from 'react';
import {FlatList, Text} from 'react-native';
import companyData from '../data.json';
import BusinessDetail from './BusinessDetail';

const Businesses = () => {
  console.log(companyData);
  return (
    <FlatList
      data={companyData}
      renderItem={({item}) => (
        <BusinessDetail
          key={item.id}
          name={item.name}
          location={item.location}
          revenue={item.revenue}
        />
      )}
    />
  );
};

export default Businesses;
