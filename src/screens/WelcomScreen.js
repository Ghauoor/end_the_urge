import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';
import AppButton from '../components/AppButton';

const WelcomScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
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
      {/* Button Container */}
      <View style={styles.buttonContainer}>
        {/* login button */}
        <AppButton title="Login" />
        {/* register button */}
        <AppButton title="Register" color="secondaryColor" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImageStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
    gap: 10,
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
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomScreen;
