import {View, Text} from 'react-native';
import StyleGuide from '../utils/StyleGuide';

const Bubble = ({content, type}) => {
    switch (type) {
        case 'rigth':
            return (
                <View style={{
                    maxWidth: 150,
                    height: 75, 
                    paddingLeft: 25,
                    paddingRight: 25,
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    marginBottom: 25, 
                    backgroundColor: StyleGuide.colors.secondary, 
                    borderRadius: 20,
                    borderTopRightRadius: 0,
                    }}>
                    <Text style={StyleGuide.typography.text3, {color: 'white'}}>
                        Salut C'est moi
                    </Text>
                </View>
            );
        case 'left':
        return (
            <View style={{
                maxWidth: 150,
                height: 75, 
                paddingLeft: 25,
                paddingRight: 25,
                justifyContent: 'center', 
                alignItems: 'center', 
                marginBottom: 25, 
                backgroundColor: StyleGuide.colors.primary, 
                borderRadius: 20,
                borderTopLeftRadius: 0,
                }}>
                <Text style={StyleGuide.typography.text3, {color: 'white'}}>
                    {content}
                </Text>
            </View>
        );
    };
};

export default Bubble;