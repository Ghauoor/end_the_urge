import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Chair', value: 2},
  {label: 'Camera', value: 3},
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          name="description"
          numberOfLines={3}
          multiline
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default ListingEditScreen;