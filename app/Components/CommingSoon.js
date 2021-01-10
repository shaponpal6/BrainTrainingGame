import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CommingSoon = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Comming Soon..</Text>
      </View>
    </View>
  );
};

export default CommingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#423',
    padding: 22,
    margin: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
});
