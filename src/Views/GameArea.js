
import { StyleSheet, Text, View ,Button , StatusBar} from 'react-native';
import GameKeyboard from '../Components/GameKeyboard';
import GameBoard from '../Components/GameBoard';
import { useEffect, useState } from 'react';
import Game from '../GameLogic/Game'

const GameArea = () =>{
    const [game,newGame] = useState(new Game());

    



    return(
    <View style={{flex:1,flexDirection:'column'}}>
       
        <GameBoard game={game} />
        <GameKeyboard game={game} />
    </View>
    )
}

export default GameArea;