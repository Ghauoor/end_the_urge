import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import PickerItem from './PickerItem';

const AppPicker = ({icon, items, placeholder, onSelectItem, selectedItem}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeHolder}>{placeholder}</AppText>
          )}

          <Icon
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)}></Button>
        <FlatList
          data={items}
          keyExtractor={items => items.value.toString()}
          renderItem={({item}) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false), onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeHolder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
});

export default AppPicker;
