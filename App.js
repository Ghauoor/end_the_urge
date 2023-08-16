import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import Screen from './src/components/Screen';
import AppTextInput from './src/components/AppTextInput';
import AppPicker from './src/components/AppPicker';

const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Cameras',
    value: 3,
  },
];

const App = () => {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default App;
