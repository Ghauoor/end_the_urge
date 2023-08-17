import React from 'react';
import {StyleSheet, Image} from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import Screen from '../components/Screen';
import SubmitButton from '../components/SubmitButton';

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />

      <AppForm
        validationSchema={validationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        <AppFormField
          name="email"
          autoCapitalize="none"
          icon="email"
          placeholder="Email"
          autoCorrect={false}
          keyBoardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          icon="lock"
          placeholder="Password"
          autoCorrect={false}
          keyBoardType="email-address"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
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
