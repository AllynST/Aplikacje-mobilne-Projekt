import { View } from 'react-native';
import styles from '../sharedStyles'


const GameBoard = (props) => {


    return (
        <View style={styles.gameBoard}>
            <>
                {/* {console.log(props.game.returnCurrentBoardJSX())} */}
                
                {props.game.returnCurrentBoardJSX()}
            </>
        </View>
    )

}

export default GameBoard;