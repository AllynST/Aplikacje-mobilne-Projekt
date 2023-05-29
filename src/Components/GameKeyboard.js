import { StyleSheet, Text, View ,Button , StatusBar, Pressable} from 'react-native';
import styles from '../sharedStyles'
const GameKeyboard = (props) =>{

   
    const letters = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]];

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.keyboardRow}>
                {letters[0].map((letter) => (
                    <KeyboardSquare
                       
                        action={props.game.addLetterToRow}
                        renderHandler={props.renderHandler}
                        key={letter}
                        letter={letter}
                    />
                ))}
            </View>
            <View style={styles.keyboardRow}>
                {letters[1].map((letter) => (
                    <KeyboardSquare                        
                        action={props.game.addLetterToRow}
                        renderHandler={props.renderHandler}
                        key={letter}
                        letter={letter}
                    />
                ))}
            </View>
            <View style={styles.keyboardRow}>
                <KeyboardSquare                    
                    action={props.game.removeLetter}
                    renderHandler={props.renderHandler}
                    letter={"<--"}
                />
                {letters[2].map((letter) => (
                    
                    <KeyboardSquare                        
                        action={props.game.addLetterToRow}
                        renderHandler={props.renderHandler}
                        key={letter}
                        letter={letter}
                    />
                ))}
            </View>
        </View>
    );
}

const KeyboardSquare = (props) =>{

    const value = props.letter

    handleKeyPress = () =>{
        props.action(value);
        props.renderHandler();
    }

    return(
        <Pressable key={props.letter} style={styles.keyboardSquare} value={props.letter} onPress={handleKeyPress}>
            
            <Text style={styles.keyboardInner} key={props.letter}>{props.letter}</Text>
           
        </Pressable>
    )
}





export default GameKeyboard;