import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icons from '../components/Icons';
import ListItemSepratorComponent from '../components/ListItemSeprator';

const menuItem = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primaryColor,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondaryColor,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View>
        <ListItem
          title="Ghayoor"
          subTitle="ghayoor@test.com"
          image={require('../../assets/images/mosh.jpg')}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSepratorComponent}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icons
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icons name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
