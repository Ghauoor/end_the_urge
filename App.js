import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontStyle: 'italic',
          color: 'tomato',
          fontWeight: '600',
          textTransform: 'capitalize',
          textAlign: 'center',
          lineHeight: 30,
        }}>
        I love react native, This is the first time i contact with the React
        Native.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
