import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import AnswerSheet from './AnswerSheet';
import CountdownCircle from './CountdownCircle';
// import {randomIntegerArray, shuffle} from '../Functions/Common';

const InputResult = ({numbers, answers, timer, onComplete}) => {
  const emptyArray = Array(numbers.length).fill('  ');

  const buttonWidth = emptyArray.length > 5 ? 24 : 40;
  const [result, setResult] = React.useState({...emptyArray});
  const [refAns, setRefAns] = React.useState(0);

  // const nums = Object.entries(numbers);
  const onChanged = (key) => {
    console.log('key :>> ', key);
    console.log('refAns :>> ', refAns);
    setRefAns(key);
  };
  const saveResult = () => {
    onComplete(numbers, result);
  };
  const setAnswer = (val) => {
    setResult({...result, [refAns]: val});
    setRefAns(refAns + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        {numbers &&
          numbers.length &&
          numbers.map((number, index) => {
            return (
              <TouchableOpacity
                key={'number' + index}
                onPress={() => onChanged(index)}
                style={{
                  ...styles.submitButton,
                }}>
                <Text
                  style={{
                    ...styles.textInput,
                    borderColor: refAns === index ? 'green' : '#423',
                  }}>
                  {result[index].toString()}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>

      <CountdownCircle timer={parseInt(timer)} onComplete={saveResult} />
      <AnswerSheet answers={answers} onPress={setAnswer} />
      <TouchableHighlight
        style={{
          height: 40,
          width: '90%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          borderRadius: 10,
          // backgroundColor: 'yellow',
          // marginLeft: 50,
          marginRight: 200,
          marginTop: 70,
        }}>
        <Button
          onPress={saveResult}
          title="Next"
          color="#423"
          accessibilityLabel="Go Next"
        />
      </TouchableHighlight>
    </View>
  );
};

export default InputResult;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 44,
    backgroundColor: '#423',
    margin: 11,
    color: '#fff',
    padding: 11,
    borderRadius: 4,
    borderWidth: 3,
  },
  submitButton: {},
});
