import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../../styles/styles';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: '',
      password: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      passowrd: this.state.password
    }

    axios.post('http://192.168.0.2:3000/api/users/login', user)
      .then(result => console.log(result.data))
      .catch(err => console.log(err))
  }

  render() {
    const { login, createUser } = this.props;
    console.log(this.props);

    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="password"
          onChangeText={password => this.setState({ password })}
        />
        <View styles={styles.row}>
          <Button title="Log In"  onPress={() => login(this.state)}/>
          <Button title="Sign Up" onPress={() => console.log(this.state)}/>
        </View>

        {/* <View style={styles.error}>
          {errors.length ? <Text>{errors.join(' ')}</Text> : null}
        </View> */}
      </View>
    );
  }
}

export default LoginForm;