import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

const App = () => {
  const {landscape} = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '100%',
          height: landscape ? '100%' : '30%',
        }}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
