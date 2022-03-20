
import {View, Pressable, TextInput} from 'react-native';
import SendArrow from '../utils/icons/SendArrow';
import StyleGuide from '../utils/StyleGuide';

const Chat = ({ value, onPress, onChangeText }) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: StyleGuide.borderRadius,
        borderColor: StyleGuide.colors.primary,
        borderWidth: 1,
      }}
    >
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder='Votre message'
        style={[
          StyleGuide.typography.textButton,
          {
            backgroundColor: StyleGuide.colors.white,
            height: 40,
            borderRadius: 20,
            padding: 15,
            paddingLeft: 15,
            paddingRight: 100,
          },
        ]}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          right: 5,
        }}
      >
        <Pressable onPress={onPress} style={{ margin: 15 }}>
          <SendArrow />
        </Pressable>
      </View>
    </View>
  );
};

export default Chat;