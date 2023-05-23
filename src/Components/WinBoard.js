import { Text, View, Modal, TouchableOpacity } from 'react-native';
import styles from '../sharedStyles'

const WinBoard = (props) =>{

    const handlePopupClose = () => {
        props.game.hidePopupWindow();
        props.pop.navigate('Splash')
      };
    return(<>
     
    <Modal visible={props.game.isPopupVisible} animationType="fade" transparent>
            <View style={styles.popupContainer}>
                <View style={styles.popup}>
                    <Text style={styles.popupText}>Congratulations! You won!</Text>
                    <TouchableOpacity style={styles.popupButton} onPress={handlePopupClose}>
                        <Text style={styles.popupButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </>)
}


export default WinBoard;