import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { addRecord } from "./helpers";
import styles, { colorPalette } from "../sharedStyles";
import { fetchWordList } from "./helpers";
import GameLetterSquare from "../Components/GameLetterSquare";


export const LetterState = {
    
    GoodPosition: colorPalette.Correct,
    BadPosition: colorPalette.Warning,
    BadLetter: colorPalette.white,
};

class Game {
    Board = [];
    CorrectWord = "";
    currentRow = 0;
    currentLetter = 0;
    checkRowCount = 0;
    nickName;
    constructor(correctWord, nickNameProp) {
        console.log("answear ", correctWord);
        this.nickName = nickNameProp;
        this.CorrectWord = correctWord;
        this.hidePopupWindow();
        for (let i = 0; i < 6; i++) {
            this.Board.push([]);
            for (let j = 0; j < 5; j++) {
                this.Board[i].push(new LetterBox(" "));
            }
        }
        this.returnCurrentBoardJSX();
    }

    returnCurrentBoardJSX = () => {
        return this.Board.map((row, rowIndex) => (
            <View
                style={styles.gameRow}
                key={`${Math.floor(Math.random() * 100000)}`}
            >
                {row.map((letterBox, posIndex) => (
                    <GameLetterSquare
                        key={`${Math.floor(Math.random() * 100000)}`}
                        letterBox={letterBox}
                        focused = { rowIndex === this.currentRow && posIndex === this.currentLetter ? true : false}
                    />
                ))}
            </View>
        ));
    };

    addLetterToRow = (letter) => {
        this.Board[this.currentRow][this.currentLetter].letter = letter;
        this.currentLetter++;
        if (this.currentLetter === 5) this.submitRow();
    };

    submitRow = (letter) => {
        if (this.currentLetter < 4) return;
        this.CheckWord(this.Board[this.currentRow]);
        this.currentRow++;
        this.currentLetter = 0;
    };

    CheckWord = (row) => {
        let Point = 0;
        for (let index = 0; index < row.length; index++) {
            const CorrectLetter = this.CorrectWord[index];

            if (row[index].letter === CorrectLetter) {
                this.Board[this.currentRow][index].state =
                    LetterState.GoodPosition;
                Point++;
            } else if (this.CorrectWord.includes(row[index].letter)) {
                this.Board[this.currentRow][index].state =
                    LetterState.BadPosition;
            } else {
                this.Board[this.currentRow][index].state =
                    LetterState.BadLetter;
            }

            //Decreasing box size after guessing
            this.Board[this.currentRow].forEach((letterBox) => {
                letterBox.blackOut = true;
            });
            // console.log(`correct: ${CorrectLetter} || target: ${(row[index].letter)} || state: ${this.Board[this.currentRow][index].state}`)
        }
        this.checkRowCount++;
        if (Point === 5) {
            addRecord({
                word: this.CorrectWord,
                tries: this.checkRowCount,
                name: this.nickName,
            });
            this.showPopupWindow();
        }
    };
    showPopupWindow = () => {
        this.isPopupVisible = true;
    };

    hidePopupWindow = () => {
        this.isPopupVisible = false;
    };
    removeLetter = (letter) => {
        let curr = this.Board[this.currentRow][this.currentLetter].letter;
        if (this.currentLetter == 0) return;
        if (curr === " ") {
            this.Board[this.currentRow][this.currentLetter - 1].letter = " ";
        } else {
            this.Board[this.currentRow][this.currentLetter].letter = " ";
        }

        this.currentLetter--;
    };
}

export default Game;

class LetterBox {
    blackOut = false;
    state = LetterState.BadLetter;
    letter = " ";


    constructor(letter) {
        this.letter = letter;
    }
}
