import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './src/components/AppText';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <AppText>I love React Native</AppText>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
