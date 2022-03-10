import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import StyleGuide from '../../components/utils/StyleGuide';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '../../components/utils/icons/ArrowBack';

import Bubble from '../../components/chat/Bubble';
import ChatField from '../../components/chat/Chat';

import config from '../../config/globalVariables';

const Chat = ({ route, token }) => {
  const [userId, setUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState(null);

  const navigation = useNavigation();
  const { conversationId, receiverAvatar, receiverUsername } = route.params;

  useEffect(() => {
    const loadUser = async () => {
      const rawResponse = await fetch(`${config.base_url}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await rawResponse.json();

      setUserId(response.data._id);
    };

    loadUser();
  }, []);

  useEffect(() => {
    const loadMessages = async () => {
      const rawResponse = await fetch(
        `${config.base_url}/api/messages/${conversationId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const response = await rawResponse.json();

      for (const item of response) {
        setMessages((prevState) => [...prevState, item]);
      }
    };

    loadMessages();
  }, []);

  const sendMessage = async () => {
    await fetch(`${config.base_url}/api/messages`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `conversationId=${conversationId}&sender=${userId}&text=${text}`,
    });

    setText(null);
  };

  return (
    <View style={StyleGuide.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ArrowBack
          style={{ width: 15, marginRight: 50 }}
          onPress={() => navigation.goBack()}
        />
        <Image
          style={{
            width: Dimensions.get('window').width / 8,
            height: Dimensions.get('window').width / 8,
            marginRight: 20,
          }}
          source={{
            uri: receiverAvatar,
          }}
        />
        <Text style={StyleGuide.typography.text5}>{receiverUsername}</Text>
      </View>
      <View style={styles.divider}></View>
      <ScrollView>
        {messages.map((item, index) => {
          return (
            <Bubble
              key={index}
              type={item.sender === userId ? 'right' : 'left'}
              content={item.text}
            />
          );
        })}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ChatField
          onPress={() => sendMessage()}
          value={text}
          onChangeText={(val) => setText(val)}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: StyleGuide.colors.gray,
    width: '100%',
    height: 1,
    marginBottom: 30,
    marginTop: 25,
  },
});

const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, null)(Chat);
