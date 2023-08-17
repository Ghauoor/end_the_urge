import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';

const AppFormField = ({name, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <>
      <AppTextInput
        //autoCapitalize="none"
        //icon="email"
        //autoCorrect={false}
        //keyBoardType="email-address"
        //placeholder="Email"
        //textContentType="emailAddress"
        onChangeText={handleChange('name')}
        onBlur={() => setFieldTouched('name')}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AppFormField;
