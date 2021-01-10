import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 5;

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

export default ({answers, onPress}) => {
  return (
    <View style={styles.container}>
      {answers &&
        answers.length &&
        answers.map((val, i) => {
          return (
            <View style={styles.box} key={'key' + i}>
              <TouchableOpacity
                onPress={() => onPress(val)}
                style={styles.button}
                activeOpacity={0.8}>
                <Text style={styles.text}>{val}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    // width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  box: {
    backgroundColor: '#253b59',
    // flex: 1,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 5,
  },
  button: {
    backgroundColor: '#253b59',
    // flex: 1,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 5,
  },
});
