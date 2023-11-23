import React, { useState } from 'react';
import { Pressable, View, Text, TextInput, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  async function tryLogin() {
    try {
      const url = 'http://192.168.0.2:8080/api/usuarios/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({login, senha }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setLogin(data.login);
        setSenha(data.senha);
        console.log('Login efetuado com sucesso - 200');
        alert('Login efetuado com sucesso');
        navigation.navigate('Home', { login, senha });
      } else {
        alert('Login ou senha incorretos', response.status);
      }
    } catch (error) {
      console.log('Erro durante a requisição', error);
      alert('Erro ao efetuar login');
    }
  }

  const navigateToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu Usuário"
          value={login}
          onChangeText={(text) => setLogin(text)}
          style={styles.input}
        />
      </Animatable.View>

      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
          style={styles.input}
        />
      </Animatable.View>

      <Pressable style={styles.button} onPress={tryLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Pressable
        style={styles.buttonRegister}
        onPress={navigateToCadastro}
        animation="bounce" 
        iterationCount={1} 
      >
        <Text style={styles.registerText}>Ainda não possui uma conta? Cadastre-se</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#34ccff',
    color: '#313338',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 150,
    marginBottom: 20,
    textAlign: 'center',
    colorcolor: '#313338',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
    backgroundClip: 'text',
    color: 'transparent',
    backgroundImage: 'linear-gradient(45deg, #35bbdd, #313338)',
    
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#dcdcdc',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  button: {
    backgroundColor: '#313338',
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  registerText: {
    color: '#313338',
  },
});
