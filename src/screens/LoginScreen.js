import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ErrorMessage from '../components/ErrorMessage';

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

      <Formik
        validationSchema={validationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              icon="email"
              placeholder="Email"
              autoCorrect={false}
              keyBoardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && <ErrorMessage error={errors.email} />}
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
            <ErrorMessage error={errors.password} />
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
