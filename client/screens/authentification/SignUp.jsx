import { StyleSheet, View, Text } from 'react-native';

import Header from '../../components/headings/Header';
import Input from '../../components/utils/form-elements/Input';
import CustomButton from '../../components/CustomButton';

import StyleGuide from '../../components/utils/StyleGuide';

const SignUp = () => {
  return (
    <View style={StyleGuide.container}>
      <Header title="S'inscrire" />
      <View style={styles.formContainer}>
        <View style={styles.formInput}>
          <Input type='text' placeholder='Nom ...' />
        </View>
        <View style={styles.lastInput}>
          <Input style={styles.formInput} type='password' />
        </View>
        <CustomButton title='Créer mon compte' />
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
      <View style={styles.logosContainer}></View>
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
  logosContainer: {},
});

export default SignUp;
