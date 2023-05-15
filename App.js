import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import AboutPage from './src/Views/AboutPage';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Wordle</Text>
     
      <Button 
      onPress = {()=>{}}
      title="Play now!"
      color="#D7D3D3"
      />
      <Button 
      onPress = {()=>{}}
      title="Options"
      color="#D7D3D3"
      />

     <Button 
      onPress = {()=>{}}
      title="About"
      color="#D7D3D3"
      />  
      <AboutPage />
      <Text>Open up aasfasg</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
