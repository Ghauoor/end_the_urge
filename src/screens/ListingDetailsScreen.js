import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from '../components/AppText';

import colors from '../config/colors';
import ListItem from '../components/ListItem';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        source={require('../../assets/images/jacket.jpg')}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>100$</AppText>

        {/* List Item */}
        <View style={styles.userContainer}>
          <ListItem
            image={require('../../assets/images/profile-image.png')}
            title="Lisa"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 2,
    fontWeight: '500',
  },
  price: {
    color: colors.secondaryColor,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
