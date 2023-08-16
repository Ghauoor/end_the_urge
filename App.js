import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Screen from './src/components/Screen';

const App = () => {
  const [firstName, setFirstName] = useState('');
  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        onChangeText={text => setFirstName(text)}
        maxLength={5}
        secureTextEntry
        keyboardType="numeric"
        // clearButtonMode="always"
        placeholder="First Name"
        style={{borderBottomColor: '#ccc', borderWidth: 1}}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default App;
