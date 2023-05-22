
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import GameKeyboard from '../Components/GameKeyboard';
import GameBoard from '../Components/GameBoard';
import { useEffect, useState } from 'react';
import Game from '../GameLogic/Game'
import WinBoard from '../Components/WinBoard';
import { fetchWordList } from '../GameLogic/helpers';
import styles from '../sharedStyles'


const GameArea =({ navigation }) => {
    
    const [game, newGame] = useState(new Game("start"));    

    const [changeFlag, setChangeFlag] = useState(false)
    
    useEffect(()=>{  
        async function fetch(){            
            newGame(new Game(await fetchWordList()))            
        }
        fetch()     
    },[])

    renderHandler = () => {
        setChangeFlag(!changeFlag)
    }

    return (
        <View  style={[styles.gameArea]} >
            <GameBoard game={game}/>
            <WinBoard  game={game} pop={navigation} />
            <GameKeyboard  game={game} renderHandler={renderHandler} />
        </View>
    )
}

export default GameArea;