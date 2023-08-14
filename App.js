import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './src/components/AppText';
import AppButton from './src/components/AppButton';
import WelcomScreen from './src/screens/WelcomScreen';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return <WelcomScreen />;
  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       flexDirection: 'row',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //     }}>
  //     <AppButton title="Login" onPress={() => console.log('Tapped')} />
  //   </View>
  // );
};

const styles = StyleSheet.create({});

export default App;
