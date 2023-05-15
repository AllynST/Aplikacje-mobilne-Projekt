import { StyleSheet, Text, View ,Button , StatusBar} from 'react-native';
import styles from '../sharedStyles'


class Game{
Board = [];
currentRow = 0;
currentLetter = 0;

constructor(){
    for(let i = 0;i<6;i++){
        this.Board.push([" "," "," "," "," "]);
    };
}

    returnCurrentBoardJSX = () =>{
   
    return this.Board.map(row =>
      <View style={styles.gameRow}>
          {row.map(letter => <Text style={styles.gameBoardSquare}>{letter}</Text>)} 
      </View>

    
  
    );

    
    }


    addLetterToRow = (letter) => {
    this.Board[this.currentRow][this.currentLetter] = letter;
    if(this.currentLetter>5) return;
    this.currentLetter++;
    }

    removeLetter = () =>{
        this.Board[this.currentRow][this.currentLetter] = " ";
        this.currentLetter--;
    }
}

export default Game;