import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row', // this will be main axis
        justifyContent: 'center', // align according to main axis
        alignItems: 'center', // this will aign to the secondary axis when the flexwarp is enable then it behave according to the each line
        backgroundColor: '#fff',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}>
      <View
        style={{
          height: 100,
          width: 100,
          // alignSelf: 'flex-start', this apply to the sigle child only.
          backgroundColor: 'dodgerblue',
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'gold',
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'tomato',
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'grey',
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'greenyellow',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
