import { StyleSheet, Text, View, Button, StatusBar,Pressable } from 'react-native';
import { ChangeColor } from '../sharedStyles'
import { Switch } from 'react-native-paper';
import styles from '../sharedStyles'

const SettingsPage = ({ navigator},props) => {
    const colorChanged = () => {
        console.log(props);
        ChangeColor();
        props.colorChangeHandler();
    }
    return (
        <>
            <Text>Settings page</Text>
            <View>
           
                <Pressable onPress={() => { colorChanged() }}>
                    <View style={styles.mainMenuBtn}>
                        <Text style={styles.mainMenuBtnTxt}>Tryb dalto!</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => { colorChanged() }}>
                    <View style={styles.mainMenuBtn}>
                        <Text style={styles.mainMenuBtnTxt}>Tryb Normal!</Text>
                    </View>
                </Pressable>
            </View>
        </>)
}


export default SettingsPage;