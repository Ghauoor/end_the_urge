import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({title, subTitle, image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
  },

  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
