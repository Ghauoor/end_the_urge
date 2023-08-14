import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './src/components/AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon name="email" size={200} color="dodgerblue" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
