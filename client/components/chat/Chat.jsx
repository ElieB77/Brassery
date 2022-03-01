
import {View, Pressable, TextInput} from 'react-native';
import Gallery from '../utils/icons/Gallery';
import Import from '../utils/icons/Import';
import StyleGuide from '../utils/StyleGuide';

const Chat = ({value, onPress}) => {
    return (
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection:'row', marginBottom: 25}}>
                <TextInput title='' placeholder='Votre message' style={[{
                    backgroundColor: StyleGuide.colors.white,
                    fontSize: 20,
                    width: 380,
                    height: 52,
                    borderRadius: 20,
                    padding: 15,
                    paddingLeft: 15,
                    paddingRight: 100,
                    }, StyleGuide.shadowProp]}/>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', position: 'absolute', right:5}}>
                    <Pressable onPress={onPress} style={{margin: 15}}>
                    <Gallery />
                        </Pressable>
                    <Pressable onPress={onPress} style={{margin: 15}}>
                        <Import />
                    </Pressable>
                </View>
        </View>
    );
};

export default Chat;