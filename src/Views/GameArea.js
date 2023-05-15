
import { StyleSheet, Text, View ,Button , StatusBar} from 'react-native';
import GameKeyboard from '../Components/GameKeyboard';
import GameBoard from '../Components/GameBoard';
import { useEffect, useState } from 'react';
import Game from '../GameLogic/Game'

const GameArea = () =>{
    const [game,newGame] = useState(new Game());

    

    const [changeFlag,setChangeFlag] = useState(false)


    renderHandler = () =>{
        console.log(changeFlag)
        setChangeFlag(!changeFlag)
    }

    return(
    <View style={{flex:1,flexDirection:'column'}}>       
        <GameBoard game={game}  />
        <GameKeyboard game={game} renderHandler={renderHandler} />
    </View>
    )
}

export default GameArea;