import { StyleSheet, Text, View ,Button , StatusBar} from 'react-native';

function MainMenu({navigation}){
    return(
        <View>

        <Text>Wordle</Text>
       
        <Button 
        onPress = {()=>{navigation.navigate("GamePage")}}
        title="Play now!"
        color="#D7D3D3"
        />
        <Button 
        onPress = {()=>{navigation.navigate("SettingsPage")}}
        title="Settings"
        color="#D7D3D3"
        />
  
       <Button 
        onPress = {()=>{navigation.navigate("AboutPage")}}
        title="About"
        color="#D7D3D3"
        />   
        <Button 
        onPress = {()=>{navigation.navigate("HistoryPage")}}
        title="History"
        color="#D7D3D3"
        />         
        
        <StatusBar style="auto" />
      </View>
    )
}

export default MainMenu;