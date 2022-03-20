import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';

import StyleGuide from '../../components/utils/StyleGuide';

import config from '../../config/globalVariables';

import Header from '../../components/headings/Header';

const MyMessages = ({ navigation, token }) => {
  const [conversations, setConversations] = useState([]);
  const [usersId, setUsersId] = useState([]);

  useEffect(() => {
    async function loadConversations() {
      const rawResponse = await fetch(`${config.base_url}/api/conversations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await rawResponse.json();

      let userTab = [];
      for (let item of response) {
        userTab.push({ conversationId: item._id, receiver: item.members[1] });
      }

      setUsersId(userTab);
    }
    loadConversations();
  }, []);

  useEffect(() => {
    async function loadUsers() {
      for (let id of usersId) {
        const newRawResponse = await fetch(
          `${config.base_url}/api/users/${id.receiver}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const newResponse = await newRawResponse.json();

        setConversations((prevState) => [
          ...prevState,
          { conversationId: id.conversationId, receiver: newResponse.data },
        ]);
      }
    }
    loadUsers();
  }, [usersId]);

  return (
    <View style={StyleGuide.container}>
      <Header title='Mes messages' />
      <View style={styles.divider}></View>
      <ScrollView>
        {conversations.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={styles.conversation}
              onPress={() =>
                navigation.navigate('Chat', {
                  conversationId: item.conversationId,
                  receiverAvatar: item.receiver.avatar
                    ? item.receiver.avatar
                    : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-0.jpg',
                  receiverUsername: item.receiver.username,
                })
              }
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{
                    borderRadius: Dimensions.get('window').width / 8 / 2,
                    width: Dimensions.get('window').width / 8,
                    height: Dimensions.get('window').width / 8,
                  }}
                  source={{
                    uri: item.receiver.avatar
                      ? item.receiver.avatar
                      : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-0.jpg',
                  }}
                />
                <View style={{ marginLeft: 30 }}>
                  <Text
                    style={[
                      StyleGuide.typography.textButton,
                      { marginBottom: 10 },
                    ]}
                  >
                    {item.receiver.username}
                  </Text>
                  <Text
                    style={[
                      StyleGuide.typography.textButton,
                      { color: StyleGuide.colors.gray },
                    ]}
                  >
                    En ligne
                  </Text>
                </View>
              </View>
              <Text
                style={[
                  StyleGuide.typography.textButton,
                  { color: StyleGuide.colors.gray },
                ]}
              >
                14:55
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: StyleGuide.colors.gray,
    width: '100%',
    height: 1,
    marginBottom: 30,
  },
  conversation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: StyleGuide.colors.primary,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: StyleGuide.borderRadius,
    marginBottom: 30,
  },
});

const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, null)(MyMessages);
