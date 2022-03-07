import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArrowBack from '../../components/utils/icons/ArrowBack';

import StyleGuide from '../../components/utils/StyleGuide';

const Header = ({ title, withoutArrow }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {!withoutArrow && (
        <ArrowBack style={{ width: 15 }} onPress={() => navigation.goBack()} />
      )}

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
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
