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
    if(this.currentLetter>3) return;
    console.log(this.currentLetter)
    this.currentLetter++;

    }
    submitRow = (letter) =>{
        console.log("row submit attempt")
        if(this.currentLetter <4) return      
        console.log("row submited")  
        this.currentRow++
        this.currentLetter = 0;
    }

    removeLetter = (letter) =>{
        let curr = this.Board[this.currentRow][this.currentLetter]
        if(this.currentLetter == 0) return    
        if(curr === " "){
            this.Board[this.currentRow][this.currentLetter-1] = " ";
        }  
        else{
            this.Board[this.currentRow][this.currentLetter] = " ";
        }        
        
        this.currentLetter--;
        
    }
}

export default Game;