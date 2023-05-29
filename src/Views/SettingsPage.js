import { Text, View, Pressable } from 'react-native';
import { ChangeColor } from '../sharedStyles'

import styles from '../sharedStyles'

const SettingsPage = ({ navigator }, route) => {
    const colorChanged = () => {
        console.log(route.params)
        ChangeColor("dalto");
        //  route.params.colorChangeHandler();
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