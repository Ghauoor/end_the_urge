import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeprator from '../components/ListItemSeprator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'Ghayoor',
    description: 'Hey Man How are you dude',
    image: require('../../assets/images/mosh.jpg'),
  },
  {
    id: 2,
    title: 'Taimoor',
    description: 'Can you help me in DSA and OOP',
    image: require('../../assets/images/mosh.jpg'),
  },
];

const MessagingScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
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
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: 'T3',
              description: 'D3',
              image: require('../../assets/images/mosh.jpg'),
            },
            {
              id: 4,
              title: 'T4',
              description: 'D4',
              image: require('../../assets/images/mosh.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagingScreen;
