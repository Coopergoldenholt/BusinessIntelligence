import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import companyData from '../data.json';
import BusinessCard from '../components/BusinessCard';

const Businesses = () => {
  return (
    <FlatList
      data={companyData}
      renderItem={({item}) => (
        <BusinessCard
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
