import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ArrowIcon from './ArrowIcon';
import Card from './Card';

const BusinessCard = ({name, location, revenue}) => {
  const navigation = useNavigation();

  return (
    <Card
      onPress={() =>
        navigation.navigate('Profile', {
          name,
          location,
          revenue,
        })
      }
      cardStyles={{paddingVertical: 20, paddingHorizontal: 15}}>
      <Text style={styles.text}>{name}</Text>
      <ArrowIcon />
    </Card>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default BusinessCard;
