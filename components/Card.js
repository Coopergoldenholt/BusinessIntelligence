import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const Card = ({children, cardStyles, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.card, cardStyles]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 15,
  },
});

export default Card;
