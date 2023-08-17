import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.screen}>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        <AppFormField
          name="name"
          autoCapitalize="none"
          icon="account"
          placeholder="Name"
          autoCorrect={false}
        />
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
        <SubmitButton title="Submit" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default RegisterScreen;
