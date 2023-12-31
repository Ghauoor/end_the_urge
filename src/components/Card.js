import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

const Card = ({title, subTitle, imageUri}) => {
  return (
    <View style={styles.card}>
      <Image source={imageUri} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 10,
  },
  subTitle: {
    color: colors.secondaryColor,
    fontWeight: 'bold',
  },
});

export default Card;
