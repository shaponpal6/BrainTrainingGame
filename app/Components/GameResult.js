import React from 'react';
import {StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';

export default function GameResult({level, results, scores, onPlayAgain}) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{level} Result</Text> */}
      <View style={styles.containerText}>
        {results &&
          results.length &&
          results.map((result, index) => {
            return (
              <View key={'number' + index} style={styles.row}>
                {result &&
                  result.length &&
                  result.map((row, index) => {
                    return (
                      <Text
                        key={'number' + index}
                        style={{
                          ...styles.textInput,
                          color: row['type'] ? 'green' : 'red',
                        }}>
                        {row['value']}
                      </Text>
                    );
                  })}
                <Text
                  style={{
                    ...styles.textInput,
                    backgroundColor: '#423',
                    color: '#fff',
                  }}>
                  {scores[index]}
                </Text>
              </View>
            );
          })}
      </View>

      {/* <View style={{margin: 40}}></View> */}
      <TouchableHighlight
        style={{
          height: 40,
          width: 160,
          borderRadius: 10,
          marginBottom: 50,
          marginTop: 20,
        }}>
        <Button
          title="Play Again"
          color="#423"
          accessibilityLabel="Tap to Play Again"
          onPress={onPlayAgain}
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 44,
    marginBottom: 22,
  },
  containerText: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  textInput: {
    margin: 4,
    padding: 10,
    fontSize: 34,
    borderRadius: 10,
    // width: 20,
    // height: 20,
    borderColor: '#7a42f2',
    backgroundColor: '#ccc',
    borderWidth: 1,
  },
});
