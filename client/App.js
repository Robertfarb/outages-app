import React from 'react';
import { StyleSheet, Text, View, Navigator} from 'react-native';
import LoginForm from './components/session/login_form';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Edison SoCal Outage Update Manager!</Text>
        <LoginForm />
      </View>
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
