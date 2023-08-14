import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AppText = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    // fontSize: 18,
    // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: 'tomato',
    fontSize: 18,
    fontFamily: 'Roboto',
  },
});

export default AppText;
