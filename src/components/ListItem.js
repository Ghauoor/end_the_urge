import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText numberOfLines={1} style={styles.title}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <Icon name="chevron-right" size={25} color={colors.medium} />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '500',
  },

  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
