import { StyleSheet, Text, View ,Button , StatusBar} from 'react-native';
import { colorPalette } from '../sharedStyles';
import styles from '../sharedStyles'
function MainMenu({navigation}){
    return(
        <View style={styles.container}>

        <Text>Wordle</Text>
       
        <Button 
        onPress = {()=>{navigation.navigate("GamePage")}}
        title="Play now!"
        color="#00E8FC"
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