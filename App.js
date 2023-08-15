import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './src/components/Card';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
      }}>
      <Card
        title="Red Jacket for sale"
        subTitle="100$"
        imageUri={require('./assets/images/jacket.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
