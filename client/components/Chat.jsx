import {View, ScrollView, KeyboardAvoidingView } from 'react-native';
import {TextInput, Pressable} from 'react-native';
import Gallery from './utils/icons/Gallery';
import Import from './utils/icons/Import';
import StyleGuide from './utils/StyleGuide';

const Chat = ({value, onPress}) => {
    return (
        <View style={{width: 330, justifyContent: 'space-between', flexDirection:'row', marginBottom: 25}}>
                <TextInput
                    placeholder='Your message'
                    value = {value}
                    style= {{
                        shadowColor: '#7F5DF0',
                        shadowOffset: {
                        width: 0,
                        height: 10,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.5,
                        elevation: 5,
                        height: 80,
                    }}
                />
                <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                    <Pressable onPress={onPress} style={{padding: 5}}>
                      <Gallery />
                    </Pressable>
                    <Pressable onPress={onPress} style={{padding: 5}}>
                      <Import />
                    </Pressable>
                </View>
        </View>
    );
};

export default Chat;