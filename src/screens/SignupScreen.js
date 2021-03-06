import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import firebase from 'firebase';

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }
  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      this.props.navigation.navigate('Home');
      console.log('success', user);

    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.title}>
          メンバー登録
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => {this.setState({ email: text })}}
          autoCapitalize="none"
          autoCorrect="false"
          placeholder='Email Address'
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => {this.setState({ password: text })}}
          autoCapitalize = "none"
          autoCorrect = "false"
          placeholder='Password'
          secureTextEntry
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#ef94a4">
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
    fontSize: 18,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#e46d82',
    height: 48,
    width: '70%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 16,
  },

});

export default SignupScreen;
