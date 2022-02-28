import { StyleSheet, View, Text } from 'react-native';

import Header from '../../components/headings/Header';
import Input from '../../components/utils/form-elements/Input';
import CustomButton from '../../components/CustomButton';
import Facebook from '../../components/utils/icons/Facebook';
import Apple from '../../components/utils/icons/Apple';
import Google from '../../components/utils/icons/Google';

import StyleGuide from '../../components/utils/StyleGuide';

const SignIn = () => {
  return (
    <View style={[StyleGuide.container, { alignItems: 'center' }]}>
      <Header title='Se connecter' />
      <View style={styles.formContainer}>
        <View style={styles.formInput}>
          <Input type='text' placeholder='Email ...' />
        </View>
        <View style={styles.lastInput}>
          <Input style={styles.formInput} type='password' />
        </View>
        <CustomButton title='Se connecter' />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 45,
        }}
      >
        <View style={styles.divider}></View>
        <Text
          style={[
            StyleGuide.typography.overline,
            {
              color: StyleGuide.colors.gray,
              marginLeft: 15,
              marginRight: 15,
            },
          ]}
        >
          Continuer avec
        </Text>
        <View style={styles.divider}></View>
      </View>
      <View style={styles.logosContainer}>
        <Facebook />
        <Apple />
        <Google />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={[
            StyleGuide.typography.overline,
            { color: StyleGuide.colors.gray, marginRight: 5 },
          ]}
        >
          Pas de compte ?
        </Text>
        <Text
          style={[
            StyleGuide.typography.overline,
            { color: StyleGuide.colors.secondary },
          ]}
        >
          Créer ma brasserie
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 185,
    flexDirection: 'column',
    alignItems: 'center',
  },
  formInput: {
    marginBottom: 20,
  },
  lastInput: {
    marginBottom: 25,
  },
  divider: {
    width: 75,
    height: 1,
    backgroundColor: StyleGuide.colors.gray,
  },
  logosContainer: {
    width: 300,
    height: 75,
    marginTop: 25,
    marginBottom: 75,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default SignIn;
