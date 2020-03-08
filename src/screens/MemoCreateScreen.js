import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }
  handlePress() {
    const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    db.collection(`users/${params.currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
    .then((docRef) => {
      console.log(docRef.id);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline value={this.state.body}
          onChangeText={(text) => { this.setState({ body:text }); }}
        />
        <CircleButton name="check" onPress={this.handlePress.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 16,
  },
});

export default MemoCreateScreen;
