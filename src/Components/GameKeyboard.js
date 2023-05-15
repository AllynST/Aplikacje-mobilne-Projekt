import { StyleSheet, Text, View ,Button , StatusBar} from 'react-native';
import styles from '../sharedStyles'
const GameKeyboard = () =>{

    const letters = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K,","L"],["Z","X","C","V","B","N","M"]];

    return(
 
   <View style={{flex:1}}>
        <View style={styles.keyboardRow}>        
            {letters[0].map(letter =><KeyboardSquare key={letter} letter = {letter} />)}        
        </View>
        <View style={styles.keyboardRow}>        
            {letters[1].map(letter =><KeyboardSquare key={letter} letter = {letter} />)}        
        </View>
        <View style={styles.keyboardRow}>   
            <KeyboardSquare letter ={"<--"} />
            {letters[2].map(letter =><KeyboardSquare key={letter} letter = {letter} />)}        
            <KeyboardSquare  letter ={"Enter"} />
        </View>
    </View>
       
    )
}

const KeyboardSquare = (props) =>{
    return(
        <Text style={styles.keyboardSquare}>
            <Text key={props.letter}>{props.letter}</Text>
        </Text>
    )
}





export default GameKeyboard;