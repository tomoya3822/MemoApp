import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwesome from '../../assets/Fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwesome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, color } = this.props;

    let bgColor = '#e46d82';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#e46d82';
    }

    return (
      <View style={[styles.CircleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <CustomIcon name={name} style={[styles.CircleButtonTitle, { color: textColor }]} />
          ) : null
        }
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
    fontFamily: 'FontAwesome',
    color: '#fff',
    fontSize: 24,
    lineHeight: 32,
  },
});


export default CircleButton;
