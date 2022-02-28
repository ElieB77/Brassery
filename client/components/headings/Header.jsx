import { StyleSheet, View, Text } from 'react-native';

import ArrowBack from '../../components/utils/icons/ArrowBack';

import StyleGuide from '../../components/utils/StyleGuide';

const Header = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <ArrowBack style={{ width: 15 }} onPress={onPress} />
      <Text
        style={[
          StyleGuide.typography.text1,
          { width: 310, textAlign: 'center' },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 325,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
