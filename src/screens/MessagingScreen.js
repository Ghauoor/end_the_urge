import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeprator from '../components/ListItemSeprator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../../assets/images/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../../assets/images/mosh.jpg'),
  },
];

const MessagingScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = message => {
    setMessages(messages.filter(item => item.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected ', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={<ListItemSeprator />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagingScreen;
