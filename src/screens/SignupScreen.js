import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';


class SignupScreen extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.title}>
          メンバー登録
        </Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.button} onPress={() => {}} underlayColor="#ef94a4">
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
    width: 360,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
    fontSize: 18,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
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
