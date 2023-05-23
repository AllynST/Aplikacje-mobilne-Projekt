import { StyleSheet, Text, View, Button, StatusBar,Pressable } from 'react-native';
import { colorPalette } from '../sharedStyles';
import styles from '../sharedStyles'

function MainMenu({ navigation,route,props}) {
  const { nickname } = route.params;
  


  const temp = () =>{
    props.colorChangeHandler
  }

  return (
    <View style={styles.container}>

        <Text style={styles.mainHeader}>Wordle</Text>       
        
        <View>
        <Text style={styles.secondaryHeader}>Current player: {`${nickname}`}</Text>
        </View>
       
        <Pressable onPress={()=>{ { navigation.navigate("GamePage", { nickname: nickname }) }}}>
          <View style={styles.mainMenuBtn}>
            <Text style={styles.mainMenuBtnTxt}>Play now!</Text>
          </View>
        </Pressable>

        {/* <Pressable onPress={()=>{ { navigation.navigate("SettingsPage",{colorChangeHandler:4 })}}}>
          <View style={styles.mainMenuBtn}>
            <Text style={styles.mainMenuBtnTxt}>Settings</Text>
          </View>
        </Pressable> */}

        <Pressable onPress={()=>{ { navigation.navigate("AboutPage") }}}>
          <View style={styles.mainMenuBtn}>
            <Text style={styles.mainMenuBtnTxt}>Instructions</Text>
          </View>
        </Pressable>

        <Pressable onPress={()=>{ { navigation.navigate("HistoryPage")}}}>
          <View style={styles.mainMenuBtn}>
            <Text style={styles.mainMenuBtnTxt}>History</Text>
          </View>
        </Pressable>

        <View>
            <Text style={{color:'white'}}>Tomasz Rożnowski & Łukasz Zaraska</Text>
        </View>
        <StatusBar style="auto" />
      </View>
  )
}


export default MainMenu;



