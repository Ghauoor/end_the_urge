import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';

const AppFormField = ({name, width, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
