import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../../assets/images/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Chair for Sale',
    price: 4000,
    image: require('../../assets/images/chair.jpg'),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listItem => listItem.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Card
              title={item.title}
              subTitle={`$ ${item.price}`}
              imageUri={item.image}
            />
          );
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
