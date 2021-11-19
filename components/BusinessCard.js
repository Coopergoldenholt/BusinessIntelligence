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
      cardStyles={styles.cardStyles}>
      <Text style={styles.text}>{name}</Text>
      <ArrowIcon />
    </Card>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  cardStyles: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default BusinessCard;
