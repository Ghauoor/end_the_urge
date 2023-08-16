import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Formik} from 'formik';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit}) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              icon="email"
              placeholder="Email"
              autoCorrect={false}
              keyBoardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange('email')}
            />
            <AppTextInput
              autoCapitalize="none"
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              keyBoardType="email-address"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange('password')}
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
