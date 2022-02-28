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
                        shadowColor: StyleGuide.shadowProp.shadowColor,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: StyleGuide.shadowProp.shadowOpacity,
                        shadowRadius: StyleGuide.shadowProp.shadowRadius,
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