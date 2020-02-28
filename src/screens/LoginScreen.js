import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }
  handleSubmit(){
    const firebaseConfig = {
      apiKey: "AIzaSyC-6cHPeYndv1u3HIX37N4CiFKTzwbd-l8",
      authDomain: "memoapp-2278a.firebaseapp.com",
      databaseURL: "https://memoapp-2278a.firebaseio.com",
      projectId: "memoapp-2278a",
      storageBucket: "memoapp-2278a.appspot.com",
      messagingSenderId: "533958976107",
      appId: "1:533958976107:web:0168168ae342a04e0a872e",
      measurementId: "G-1F01BVVV2B"
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.title}>
          ログイン
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
        <TouchableHighlight style={styles.button} onPress={() => { this.handleSubmit.bind(this) }} underlayColor="#ef94a4">
          <Text style={styles.buttonTitle}>ログインする</Text>
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
    width: '80%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    padding: 10,
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 16,
  },

});

export default LoginScreen;
