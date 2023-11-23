import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';

export default function DesafioScreeen() {
  const [challenge, setChallenge] = useState(null);
  const [challengeId, setChallengeId] = useState(1);

  const fetchChallenge = async (id) => {
    try {
      const response = await axios.get(`${id}`); // colocar a url da api
      setChallenge(response.data);
    } catch (error) {
      console.error('Erro ao obter os dados do desafio:', error);
    }
  };

  useEffect(() => {
    fetchChallenge(challengeId);
  }, [challengeId]);

  const handleNextChallenge = () => {
    // Incrementa o ID do desafio ou reinicia se atingir o último ID
    setChallengeId((prevId) => (prevId >= 3 ? 1 : prevId + 1));
  };

  return (
    <View style={styles.container}>
     
        {challenge && (
          <View style={styles.challengeContainer}>
            <Text style={styles.title}>Desafio</Text>
            <Text style={styles.description}>{challenge.desafio}</Text>
            <Text style={styles.description}>{challenge.descricao}</Text>
            <Text style={styles.boldText}>{`Tempo: ${challenge.tempo}`}</Text>
            <Text style={styles.description}>{`Prêmio: ${challenge.premio}`}</Text>
          </View>
        )}
        <Pressable
          style={styles.nextButton}
          onPress={handleNextChallenge}
        >
          <Text style={styles.nextButtonText}>Próximo Desafio</Text>
        </Pressable>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#202020',
  },
  challengeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
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
    backgroundColor: '#3498db',
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
