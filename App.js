import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  BackHandler,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppLevelButton from './app/Components/AppLevelButton';
import CommingSoon from './app/Components/CommingSoon';

import RememberMemoryGameEngine from './app/GameEngine/RememberMemoryGameEngine';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'menuPage',
      title: 'Freelancing Categories',
      catPage: {},
      listPage: {},
      content: {},
      pageContext: {},
      isConnected: true,
      unsubscribe: '',
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }
  handleBackButtonClick(e) {
    this.onBackButtonClick();
    return true;
  }
  onBackButtonClick() {
    this.setState((previousState, currentProps) => {
      // condition here
      let targetPage = '';
      if (previousState.page === 'menuPage') {
        targetPage = 'menuPage';
        BackHandler.exitApp();
      }
      if (previousState.page !== 'menuPage') {
        targetPage = 'menuPage';
      }
      if (targetPage !== '') {
        return {
          ...previousState,
          page: targetPage,
        };
      }
    });
  }

  doNavigation(page, title = '') {
    this.setState((previousState, currentProps) => {
      return {
        ...previousState,
        page: page,
        title: title,
      };
    });
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#423"
          networkActivityIndicatorVisible={true}
        />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.container}>
              <Text style={styles.title}> Brain Training Game</Text>
              {this.state.page === 'menuPage' && (
                <View>
                  <AppLevelButton
                    text="Game For Children"
                    onPress={() => this.doNavigation('childrenGame')}
                  />
                  <AppLevelButton
                    text="Easy Level"
                    onPress={() => this.doNavigation('easyLevel')}
                  />
                  <AppLevelButton
                    text="Medium Level"
                    onPress={() => this.doNavigation('mediumLevel')}
                  />
                  <AppLevelButton
                    text="Complex Level"
                    onPress={() => this.doNavigation('complexLevel')}
                  />
                  <AppLevelButton
                    text="Play with Friends"
                    onPress={() => this.doNavigation('duelPlayer')}
                  />
                </View>
              )}

              {this.state.page === 'childrenGame' && (
                <RememberMemoryGameEngine
                  name="simple"
                  level="Child Level"
                  del="2"
                  loop="3"
                  power="1"
                  rememberTime="2"
                  answerTime="5"
                />
              )}
              {this.state.page === 'easyLevel' && (
                <RememberMemoryGameEngine
                  name="simple"
                  level="Easy Level"
                  del="3"
                  loop="5"
                  power="1"
                  rememberTime="2"
                  answerTime="3"
                />
              )}
              {this.state.page === 'mediumLevel' && (
                <RememberMemoryGameEngine
                  name="simple"
                  level="Medium Level"
                  del="5"
                  loop="5"
                  power="1"
                  rememberTime="2"
                  answerTime="5"
                />
              )}
              {this.state.page === 'complexLevel' && <CommingSoon />}
              {this.state.page === 'duelPlayer' && <CommingSoon />}
              {this.state.page === 'settingPage' && <CommingSoon />}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {},
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 70,
    marginTop: 70,
    textAlign: 'center',
    color: '#423',
  },
});
