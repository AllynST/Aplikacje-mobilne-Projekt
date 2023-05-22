import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { colorPalette } from '../sharedStyles';
import styles from '../sharedStyles'

function MainMenu({ navigation, route }) {
  const { nickname } = route.params;
  return (
    <View style={styles.container}>

        <Text>Wordle</Text>
       
        <Button
        onPress={() => { navigation.navigate("GamePage", { nickname: nickname }) }}
        title="Play now!"
        color="#D7D3D3"
        />
        <Button 
        onPress = {()=>{navigation.navigate("SettingsPage")}}
        title="Settings"
        color="#00E8FC"
        />
  
       <Button 
        onPress = {()=>{navigation.navigate("AboutPage")}}
        title="About"
        width="100"        
        color="#00E8FC"
        />   
        <Button 
        onPress = {()=>{navigation.navigate("HistoryPage")}}
        title="History"
        color="#00E8FC"
        />         
        
        <StatusBar style="auto" />
      </View>
  )
}


export default MainMenu;