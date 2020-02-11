import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = '#e46d82';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#e46d82';
    }

    return (
      <View style={[styles.CircleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.CircleButtonTitle, { color: textColor }]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CircleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 50,
    height: 50,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  CircleButtonTitle: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
  },
});


export default CircleButton;
