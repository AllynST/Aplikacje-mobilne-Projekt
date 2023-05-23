import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableHighlight } from 'react-native';
import styles from '../sharedStyles'

const SplashScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState('');

  const handleContinue = () => {
    // Przeniesienie użytkownika do głównego menu
    navigation.navigate('Home', { nickname });
  };

  return (
    <View style={styles.containerSplashScreen}>
      <Text style={styles.mainHeader}> Wordly</Text>
      <Text style={[styles.secondaryHeader,{fontSize:15}]}>Łukasz Zaraska & Tomasz Rożnowski</Text>
     
      <TextInput
        style={styles.input}
        placeholder="Please enter your nickname"
        value={nickname}
        onChangeText={setNickname}
      />
     <TouchableHighlight
  style={styles.SpalshScreenNextBtn}
  onPress={handleContinue}
  underlayColor="#DDDDDD"
>
  <Text style={styles.SpalshScreenNextBtnTxt}>Next</Text>
</TouchableHighlight>
    </View>
  );
};

// const styles = StyleSheet.create({
  
// });

export default SplashScreen;
