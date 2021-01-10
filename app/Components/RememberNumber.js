import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';
import CountdownCircle from './CountdownCircle';

const RememberNumber = ({numbers, timer, onComplete}) => {
  // const nums = Object.entries(numbers);
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        {numbers &&
          numbers.length &&
          numbers.map((number, index) => {
            return (
              <Text style={styles.box} key={'number' + index}>
                {number}
              </Text>
            );
          })}
      </View>
      <CountdownCircle timer={parseInt(timer)} onComplete={onComplete} />

      <TouchableHighlight
        style={{
          height: 40,
          width: '90%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          borderRadius: 10,
          marginRight: 200,
          marginTop: 70,
        }}>
        <Button
          onPress={onComplete}
          title="Play Now"
          color="#423"
          accessibilityLabel="Go Next"
        />
      </TouchableHighlight>
    </View>
  );
};

export default RememberNumber;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    fontSize: 44,
    backgroundColor: '#423',
    margin: 11,
    color: '#fff',
    padding: 11,
    borderRadius: 4,
  },
});
