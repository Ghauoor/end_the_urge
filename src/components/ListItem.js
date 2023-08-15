import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({title, subTitle, image, onPress, renderRightActions}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    backgroundColor: '#000',
  },
  title: {
    fontWeight: '500',
  },

  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
