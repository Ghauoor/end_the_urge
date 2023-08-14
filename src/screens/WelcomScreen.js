import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';

const WelcomScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.bgImageStyles}>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        {/* subtext */}
        <Text style={styles.tagLine}>Give what you don't need</Text>
      </View>
      {/* login button */}
      <View style={styles.loginButton}></View>
      {/* register button */}
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImageStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  tagLine: {
    color: '#fc5c65',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4ecdc4',
  },
});

export default WelcomScreen;
