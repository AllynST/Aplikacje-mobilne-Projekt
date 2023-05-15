import { StyleSheet, Text, View ,Button , StatusBar} from 'react-native';
import styles from '../sharedStyles'

const GameBoard = (props) =>{


    return(
   
    <View style={styles.gameBoard}>
    {props.game.returnCurrentBoardJSX()}
    </View>
  
    
    
    )

}

export default GameBoard;