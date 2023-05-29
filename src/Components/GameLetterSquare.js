import { StyleSheet, Text, View, Button, StatusBar,Animated } from 'react-native';
import styles, { colorPalette } from '../sharedStyles'
import { useEffect , useRef } from 'react';

const GameLetterSquare = (props) =>{
    let scaleValue = 1;
    if(props.focused){
        scaleValue = 1.1
    }
    else if(props.letterBox.blackOut){
        scaleValue = 0.9;
    }
    

 return(
    
   
    <Text key={`${Math.floor(Math.random() * 100000)}`} 
        style={[styles.gameBoardSquare(props.letterBox.state),
            {transform:[{scale:scaleValue}]},
  
            
           
        
            
        ]}
        >
        {props.letterBox.letter}
    </Text>
    

 )
}


export default GameLetterSquare;