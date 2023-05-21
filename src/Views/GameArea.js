
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import GameKeyboard from '../Components/GameKeyboard';
import GameBoard from '../Components/GameBoard';
import { useEffect, useState } from 'react';
import Game from '../GameLogic/Game'
import WinBoard from '../Components/WinBoard';
import { fetchWordList } from '../GameLogic/helpers';


const GameArea =({ navigation }) => {
    const [game, newGame] = useState(new Game("start"));    

    const [changeFlag, setChangeFlag] = useState(false)
    
    useEffect(()=>{
        console.log("test")
        async function fetch(){
            console.log("async fired")
            newGame(new Game(await fetchWordList()))
            
        }
        fetch()     
    },[])

    renderHandler = () => {
        setChangeFlag(!changeFlag)
    }

    return (
        <View  style={{ flex: 1, flexDirection: 'column' }} >
            <GameBoard game={game}/>
            <WinBoard  game={game} pop={navigation} />
            <GameKeyboard  game={game} renderHandler={renderHandler} />
        </View>
    )
}

export default GameArea;