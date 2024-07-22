import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
export const RegisterScreen = () => {

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/chef.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/user_image.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>REGISTRARSE</Text>

        <View style={styles.formInput}>
          <Image style={styles.formIcon}
            source={require('../../../assets/user.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Nombres'
            keyboardType='default'
          />
        </View>

        <View style={styles.formInput}>
          <Image style={styles.formIcon}
            source={require('../../../assets/my_user.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Apellidos'
            keyboardType='default'
          />
        </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='ENTRAR' onPress={() => ToastAndroid.show('HOLA!', ToastAndroid.SHORT)} />
                </View>

                <View style={styles.formRegister}>
                    <Text>¿No tienes cuenta?</Text>
                    <Text style={styles.formRegisterText}>Regístrate</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%',
    },
    form: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5,

    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30,

    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15,
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },

    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%',
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
});
