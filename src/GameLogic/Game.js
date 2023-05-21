import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import styles from '../sharedStyles'
import { fetchWordList } from './helpers';


const LetterState = {
    GoodPosition: "green",
    BadPosition: "yellow",
    BadLetter: "gray"
}


class Game {

    Board = [[]];
    CorrectWord = "";
    currentRow = 0;
    currentLetter = 0;


    constructor(correctWord) {
        console.log(correctWord)
        this.CorrectWord = correctWord  
        this.hidePopupWindow();
        for (let i = 0; i < 6; i++) {
            this.Board.push([])
            for (let j = 0; j < 5; j++) {
                this.Board[i].push(new LetterBox(" "));
            }

        };
        this.returnCurrentBoardJSX()

    }


    returnCurrentBoardJSX = () => {
        return this.Board.map((row) => (
            <View style={styles.gameRow} key={`${Math.floor(Math.random() * 100000)}`}>

                {row.map((letterBox) => <Text key={`${Math.floor(Math.random() * 100000)}`} style={styles.gameBoardSquare(letterBox.state)}>{letterBox.letter}</Text>)}

            </View>
        ));


    };

    addLetterToRow = (letter) => {

        this.Board[this.currentRow][this.currentLetter].letter = letter;
        if (this.currentLetter > 3) return;
        this.currentLetter++;

    }
    submitRow = (letter) => {
        console.log("row submit attempt")
        if (this.currentLetter < 4) return
        // console.log("row submited")
        this.CheckWord(this.Board[this.currentRow]);
        console.log(this.CorrectWord)
        // console.log(this.Board)
        // console.log(this.ResultBoard)
        this.currentRow++;
        this.currentLetter = 0;
    }

    CheckWord = (row) => {

        let Point = 0;
        console.log("check word fired")
        for (let index = 0; index < row.length; index++) {

            const CorrectLetter = this.CorrectWord[index]

            if (row[index].letter === CorrectLetter) {
                this.Board[this.currentRow][index].state = LetterState.GoodPosition
                Point++;
            } else if (this.CorrectWord.includes(row[index].letter)) {
                this.Board[this.currentRow][index].state = LetterState.BadPosition
            } else {
                this.Board[this.currentRow][index].state = LetterState.BadLetter
            }
           
            console.log(`correct: ${CorrectLetter} || target: ${(row[index].letter)} || state: ${this.Board[this.currentRow][index].state}`)

        }
        if (Point === 5) {
            this.showPopupWindow();
        }
    }
    showPopupWindow = () => {
        this.isPopupVisible = true;
    }

    hidePopupWindow = () => {
        this.isPopupVisible = false;
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


class LetterBox {
    state = LetterState.BadLetter
    letter = " "

    constructor(letter) {
        this.letter = letter;
    }


    changeState(LetterState) {
        this.state = LetterState
    }
}