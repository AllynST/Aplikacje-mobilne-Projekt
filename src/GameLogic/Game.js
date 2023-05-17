import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import styles from '../sharedStyles'


const LetterState = {
    GoodPosition: "green",
    BadPosition: "yellow",
    BadLetter: "gray"
}
let RdyToColor = false
class Game {
    Board = [[]];
    ResultBoard = [[], [], [], [], []];

    CorrectWord = "TOMEK";
    currentRow = 0;
    currentLetter = 0;

    constructor() {
        for (let i = 0; i < 6; i++) {
            this.Board.push([])
            for(let j = 0; j < 5; j++) {
                this.Board[i].push(new LetterBox(" "));
            }
            
        };
        this.returnCurrentBoardJSX()
        // console.log(this.Board)
    }

    // returnCurrentBoardJSX = () => {

    //     // if (this.ResultBoard[this.currentRow][this.currentLetter] == undefined) {
    //     return this.Board.map(row =>
    //         <View style={styles.gameRow}>
    //             {row.map(letter => <Text style={styles.gameBoardSquare}>{letter}</Text>)}
    //         </View>
    //     );

    // }
    returnCurrentBoardJSX = () => {
       
        // if (RdyToColor) {
        //     RdyToColor = false
        //     // const result = this.ResultBoard[this.currentRow][this.currentLetter];
        //     // const tileColor = result.state === undefined ?"grey" : result.state
         
        //     // console.log("teraz!!!!!!!!!!!!!!!!!!!!")
        //     // return this.Board.map((row) => (
        //     //     <View style={styles.gameRow}>
        //     //         {row.map(letter => <Text style={[styles.gameBoardSquare, { backgroundColor: tileColor }]}>{letter}</Text>)}

        //     //     </View>
        //     // ));
        //     // return this.Board.map((row,index) => (
        //     //     <View style={styles.gameRow} >
        //     //         {
        //     //             index==this.currentRow?console.log(row):console.log("nie")

          
        //     //         }  
        //     //         {/* {row.map((letter, letterIndex) => {
        //     //             if(index===this.currentRow){
        //     //                 console.log(row)
        //     //             }
        //     //             // if(letter)
        //     //             // console.log(letter+"   "+letterIndex)
        //     //             // const result = this.ResultBoard[this.currentRow][letterIndex];
        //     //             // console.log("-------------------" + result.state)
        //     //             // let tileColor=""
        //     //             // if(result!==undefined)
        //     //             // {
        //     //             //     tileColor=result.state
        //     //             //     console.log(tileColor)
        //     //             // }
        //     //             // return (
        //     //             //     <Text style={[styles.gameBoardSquare, { backgroundColor: `${tileColor}` }]} key={letterIndex}>
        //     //             //         {letter}
        //     //             //     </Text>
        //     //             // );
        //     //         })} */}
        //     //     </View>
        //     return this.Board.map((row) => (
        //         <View style={styles.gameRow} >
        //             {console.log(this.Board)}
        //             {row.map((letter,index) => <Text style={[styles.gameBoardSquare, { backgroundColor: row[index].state }]}>{letter}</Text>)}

        //         </View>
        //     ));
        // } else {
           
           
            // return this.Board.map((row) => (
                
               
            //     <View style={styles.gameRow} >
            //         {console.log(this.currentRow)}
            //         {`TESTING: ${console.log(row[0])}`}
            //         {row.map(letterBox => <Text style={styles.gameBoardSquare(letterBox.letter.state)}>{letterBox.letter}</Text>)}

            //     </View>
            // ));
            return this.Board.map((row) => (
                
               
                <View style={styles.gameRow} >
                    
                    {row.map(letterBox => <Text style={styles.gameBoardSquare(letterBox.state)}>{letterBox.letter}</Text>)}

                </View>
            ));
        
            // return this.Board.map((row) => (
            //     <View style={styles.gameRow} >
            //         {row.map(letter => <Text style={{ backgroundColor: 'cyan' }}>{letter}</Text>)}

            //     </View>
            // ));
        

    };

    addLetterToRow = (letter) => {

        this.Board[this.currentRow][this.currentLetter].letter = letter;
        if (this.currentLetter > 3) return;    
        this.currentLetter++;

    }
    submitRow = (letter) => {
        // console.log("row submit attempt")
        if (this.currentLetter < 4) return
        // console.log("row submited")
        this.CheckWord(this.Board[this.currentRow]);

        console.log(this.Board)
        // console.log(this.ResultBoard)
        this.currentRow++;
        this.currentLetter = 0;
    }

    CheckWord = (row) => {

        for (let index = 0; index < row.length; index++) {

            const CorrectLetter = this.CorrectWord[index]

            if (row[index].letter === CorrectLetter) {
                this.Board[this.currentRow][index].state = LetterState.GoodPosition
                console.log(this.Board[this.currentRow][index].state)
               // this.ResultBoard[this.currentRow][index] = { letter: CorrectLetter, state: LetterState.GoodPosition }
            } else if (this.CorrectWord.includes(row[index].letter)) {
                this.Board[this.currentRow][index].state = LetterState.BadPosition
              //  this.ResultBoard[this.currentRow][index] = { letter: UserLetter, state: LetterState.BadPosition }
            } else {
                this.Board[this.currentRow][index].state = LetterState.BadLetter
                //this.ResultBoard[this.currentRow][index] = { letter: UserLetter, state: LetterState.BadLetter }
            }
            console.log(LetterState.BadLetter)
            console.log(`correct: ${CorrectLetter} || target: ${row[index]} || state: ${this.Board[this.currentRow][index].state}`) 

        }
       // console.log(this.Board[this.currentRow].state)
        RdyToColor = true
    }
    removeLetter = (letter) => {
        let curr = this.Board[this.currentRow][this.currentLetter]
        if (this.currentLetter == 0) return
        if (curr === " ") {
            this.Board[this.currentRow][this.currentLetter - 1] = " ";
        }
        else {
            this.Board[this.currentRow][this.currentLetter] = " ";
        }

        this.currentLetter--;

    }
}

export default Game;


class LetterBox{
    state = LetterState.BadLetter
    letter = " "

    constructor(letter){
        this.letter = letter;
    }


    changeState(LetterState){
        this.state = LetterState
    }
}