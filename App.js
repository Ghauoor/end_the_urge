import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Screen from './src/components/Screen';
import AppTextInput from './src/components/AppTextInput';

const App = () => {
  return (
    <Screen>
      <AppTextInput placeholder="User Name" icon="email" />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default App;
