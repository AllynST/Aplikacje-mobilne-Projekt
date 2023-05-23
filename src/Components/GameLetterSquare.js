import { StyleSheet, Text, View, Button, StatusBar,Animated } from 'react-native';
import styles, { colorPalette } from '../sharedStyles'
import { useEffect , useRef } from 'react';

const GameLetterSquare = (props) =>{

 return(
 
    <Text key={`${Math.floor(Math.random() * 100000)}`} style={styles.gameBoardSquare(props.letterBox.state)}>
        {props.letterBox.letter}
    </Text>

 )
}


export default GameLetterSquare;