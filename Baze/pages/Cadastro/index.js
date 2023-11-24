import React, { useState } from 'react';
import { TextInput, Picker, View, Text, Pressable, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function CadastroScreen() {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  //const genderOptions = ['Masculino', 'Feminino', 'Outro'];

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [idade, setIdade] = useState('');
  // const [peso, setPeso] = useState('');
  // const [altura, setAltura] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [genero, setGenero] = useState('');
  const [senha, setSenha] = useState('');

  const tryCadastro = async () => {
    try {
      const url = 'http://192.168.0.2:8080/api/usuarios';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({nome, email, login,senha, idade,  rg, cpf, genero, }),
      });

      if (response.status === 201) {
        const data = await response.json();
        setNome(data.nome);
        setEmail(data.email);
        setLogin(data.login);
        setSenha(data.senha);
        setIdade(data.idade);
        // setPeso(data.peso);
        // setAltura(data.altura);
        setRg(data.rg);
        setCpf(data.cpf);
        setGenero(data.genero);

        console.log('Cadastro efetuado com sucesso - 200');
        alert('Cadastro efetuado com sucesso');
        navigation.navigate('Login', {
          nome,
          email,
          login,
          senha,
          idade,
          rg,
          cpf,
          genero,
          
        });
      } else {
        alert('Credenciais irregulares', response.status);
      }
    } catch (error) {
      console.log('Erro durante a requisição', error);
      alert('Erro ao efetuar cadastro');
    }

  
    
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          style={styles.input}
        />
      </Animatable.View>

      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      </Animatable.View>

      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
            placeholder="Digite seu nome de usuário"
            value={login}
            onChangeText={(text) => setLogin(text)}
            style={styles.input}
        />
        </Animatable.View>

        <Animatable.View animation="fadeIn" style={styles.inputContainer}>
            <TextInput
                placeholder="Digite sua idade"
                value={idade}
                onChangeText={(text) => setIdade(text)}
                style={styles.input}
            />
        </Animatable.View>

        {/* <Animatable.View animation="fadeIn" style={styles.inputContainer}>
            <TextInput
                placeholder="Digite seu peso"
                value={peso}
                onChangeText={(text) => setPeso(text)}
                style={styles.input}
            />
        </Animatable.View> */}

        {/* <Animatable.View animation="fadeIn" style={styles.inputContainer}>
            <TextInput
                placeholder="Digite sua altura"
                value={altura}
                onChangeText={(text) => setAltura(text)}
                style={styles.input}
            />
        </Animatable.View> */}

        <Animatable.View animation="fadeIn" style={styles.inputContainer}>
            <TextInput
                placeholder="Digite seu RG"
                value={rg}
                onChangeText={(text) => setRg(text)}
                style={styles.input}
            />
        </Animatable.View>


        <Animatable.View animation="fadeIn" style={styles.inputContainer}>
            <TextInput
                placeholder="Digite seu CPF"
                value={cpf}
                onChangeText={(text) => setCpf(text)}
                style={styles.input}
            />
        </Animatable.View>

        <Animatable.View animation="fadeIn" style={styles.inputContainer}>
            <TextInput
                placeholder="Digite seu genero"
                value={genero}
                onChangeText={(text) => setGenero(text)}
                style={styles.input}
            />
            
            {/* <Picker
                selectedValue={genero}
                onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
                style={styles.picker}
            >
                {genderOptions.map((genero, index) => (
                <Picker.Item key={index} label={genero} value={genero} />
                ))}
            </Picker> */}
        </Animatable.View>


        <Animatable.View animation="fadeIn" style={styles.inputContainer}>
            <TextInput
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={(text) => setSenha(text)}
                style={styles.input}
            />
        </Animatable.View>


      <Pressable style={styles.button} onPress={tryCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>

      <Pressable
        style={styles.buttonRegister}
        onPress={navigateToLogin}
        animation="bounce" 
        iterationCount={1} 
      >
        <Text style={styles.registerText}>Já possui uma conta? Faça login</Text>
      </Pressable>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#34ccff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
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
    marginBottom: 14,
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
    elevation: 1,
  },
  registerText: {
    color: '#313338',
  },

  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    color: '#313338',
  },
});
