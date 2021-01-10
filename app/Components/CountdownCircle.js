import * as React from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import LinearTimer from 'react-native-linear-timer';

const CountdownCircle = ({timer, onComplete}) => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <LinearTimer
        min={timer}
        onTimeElapsed={() => {
          onComplete();
        }}
      />
    </View>
  );
};

export default CountdownCircle;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 40,
    // backgroundColor: "#ecf0f1",
    padding: 2,
  },
  remainingTime: {
    fontSize: 46,
  },
});
