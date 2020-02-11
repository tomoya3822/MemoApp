import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2020/2/11</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2020/2/11</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2020/2/11</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2020/2/11</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2020/2/11</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  memoList: {
    width: '100%',
    flex: 1,
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoListItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  memoDate: {
    color: '#bbb',
    fontSize: 12,
  },
});

export default MemoList;
