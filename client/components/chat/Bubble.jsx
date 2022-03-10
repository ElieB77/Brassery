import { ScrollView, Text } from 'react-native';
import StyleGuide from '../utils/StyleGuide';

const Bubble = ({ content, type }) => {
  switch (type) {
    case 'right':
      return (
        <ScrollView
          contentContainerStyle={[
            StyleGuide.shadowProp,
            {
              minWidth: 50,
              minHeight: 50,
              maxWidth: 250,
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 20,
              paddingBottom: 20,
              marginBottom: 25,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-end',
              backgroundColor: StyleGuide.colors.secondary,
              borderRadius: 20,
              borderTopRightRadius: 0,
            },
          ]}
        >
          <Text style={[StyleGuide.typography.text3, { color: 'white' }]}>
            {content}
          </Text>
        </ScrollView>
      );
    case 'left':
      return (
        <ScrollView
          contentContainerStyle={[
            StyleGuide.shadowProp,
            {
              minWidth: 50,
              minHeight: 50,
              maxWidth: 250,
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 20,
              paddingBottom: 20,
              marginBottom: 25,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: StyleGuide.colors.primary,
              borderRadius: 20,
              borderTopLeftRadius: 0,
            },
          ]}
        >
          <Text style={[StyleGuide.typography.text3, { color: 'white' }]}>
            {content}
          </Text>
        </ScrollView>
      );
  }
};

export default Bubble;
