import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState('');

  const handleContinue = () => {
    // Przeniesienie użytkownika do głównego menu
    navigation.navigate('Home', { nickname });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Project: Wordly</Text>
      <Text style={styles.welcomeText}>Łukasz Zaraska</Text>
      <Text style={styles.welcomeText}>Tomasz Rożnowski</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter nick"
        value={nickname}
        onChangeText={setNickname}
      />
      <Button title="Next" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default SplashScreen;
