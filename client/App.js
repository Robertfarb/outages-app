import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { StyleSheet, Text, View, Navigator} from 'react-native';
import LoginFormContainer from './components/session/login_form_container';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Welcome to Edison SoCal Outage Update Manager!</Text>
          <LoginFormContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
