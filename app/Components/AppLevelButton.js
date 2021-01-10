import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

export default ({text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  button: {
    elevation: 1,
    backgroundColor: '#423',
    borderRadius: 10,
    paddingVertical: 18,
    // paddingHorizontal: 12,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
