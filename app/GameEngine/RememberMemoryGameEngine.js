import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import InputResult from '../Components/InputResult';
import RememberNumber from '../Components/RememberNumber';
import GameResult from '../Components/GameResult';
import {randomIntegerArray, shuffle} from '../Functions/Common';

const ansArray = (numbers) =>
  shuffle([...new Set([...numbers, ...randomIntegerArray(5)])]);

export default class RememberMemoryGameEngine extends Component {
  constructor(props) {
    super(props);
    this.makePettern = randomIntegerArray(props.del);
    this.makeSheet = ansArray(this.makePettern);
    this.state = {
      name: props.name,
      level: props.level,
      del: props.del,
      loop: props.loop,
      initLoop: 0,
      screen: 'remember',
      rememberTime: props.rememberTime,
      answerTime: props.answerTime,
      pettern: this.makePettern,
      answerSheet: this.makeSheet,
      power: props.power,
      pointable:
        parseInt(props.loop) * parseInt(props.del) * parseInt(props.power),
      scores: [],
      results: [],
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  onComplete = (page = '') => {
    this.setState((prevState) => ({
      ...prevState,
      pettern:
        page && page === 'remember'
          ? randomIntegerArray(this.state.del)
          : prevState.pettern,
      screen: page && page === 'remember' ? 'remember' : 'game',
    }));
  };

  onPlayAgain = () => {
    const newPettern = randomIntegerArray(this.state.del);
    const sheet = ansArray(newPettern);
    this.setState((prevState) => ({
      ...prevState,
      pettern: newPettern,
      answerSheet: sheet,
      screen: 'remember',
      initLoop: 0,
      results: [],
      scores: [],
    }));
  };

  onResult = (pettern, answer) => {
    const dispatch = pettern.map((val, i) => {
      return {
        value: val,
        type: parseInt(val) === parseInt(answer[i]) ? true : false,
      };
    });
    const score = dispatch.filter((result) => result.type).length;
    const newPettern = randomIntegerArray(this.state.del);
    const sheet = ansArray(newPettern);

    this.setState((prevState) => ({
      ...prevState,
      initLoop: parseInt(prevState.initLoop) + 1,
      results: [...prevState.results, dispatch],
      scores: [...prevState.scores, score],
      pettern: newPettern,
      answerSheet: sheet,
      screen:
        parseInt(this.state.initLoop) + 1 === parseInt(this.state.loop)
          ? 'result'
          : 'remember',
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {this.props.level}</Text>
        {this.state.screen === 'remember' && (
          <View>
            <RememberNumber
              numbers={this.state.pettern}
              timer={this.state.rememberTime}
              onComplete={this.onComplete}
            />
            {/* <Button title="Play" onPress={this.onComplete.bind(this)} /> */}
          </View>
        )}
        {this.state.screen === 'game' && (
          <View>
            <InputResult
              numbers={this.state.pettern}
              answers={this.state.answerSheet}
              timer={this.state.answerTime}
              onComplete={this.onResult}
            />
          </View>
        )}
        {this.state.screen === 'result' && (
          <View>
            <GameResult
              level={this.state.level}
              results={this.state.results}
              scores={this.state.scores}
              onPlayAgain={this.onPlayAgain}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 22,
    marginTop: 30,
  },
});
