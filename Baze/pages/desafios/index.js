import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DesafioScreen() {
  const [challenge, setChallenge] = useState(null);
  const [challengeId, setChallengeId] = useState(1);

  useEffect(() => {
    fetchChallenge(challengeId);
  }, [challengeId]);

  const fetchChallenge = async (id) => {
    try {
      // Recupera o token armazenado
      const userToken = await AsyncStorage.getItem('authToken');

      const response = await axios.get(`http://192.168.0.2:8080/api/desafios/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      setChallenge(response.data);
    } catch (error) {
      console.error('Erro ao obter os dados do desafio:', error);
    }
  };

  const handleNextChallenge = async () => {
    // Incrementa o ID do desafio ou reinicia se atingir o último ID
    setChallengeId((prevId) => (prevId >= 3 ? 1 : prevId + 1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafio</Text>
      {challenge && (
        <View style={styles.challengeContainer}>
          
          <Text style={styles.descriptionTitle}>{challenge.desafio}</Text>
          <Text style={styles.description}>{challenge.descricao}</Text>
          <Text style={styles.boldText}>{`Tempo: ${challenge.tempo}`}</Text>
          
        </View>
      )}
      <Pressable style={styles.nextButton} onPress={handleNextChallenge}>
        <Text style={styles.nextButtonText}>Próximo Desafio</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#202020',
  },
  challengeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 8,
    borderRadius: 5,
    marginBottom: 16,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'center',
    color: '#313338',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
    backgroundClip: 'text',
    color: 'transparent',
    backgroundImage: 'linear-gradient(45deg, #35bbdd, #313338)',
  },
  descriptionTitle: {
    fontSize: 20,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  nextButton: {
    backgroundColor: '#313338',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  nextButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
