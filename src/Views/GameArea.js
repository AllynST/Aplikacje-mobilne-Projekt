
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import GameKeyboard from '../Components/GameKeyboard';
import GameBoard from '../Components/GameBoard';
import { useEffect, useState } from 'react';
import Game from '../GameLogic/Game'
import WinBoard from '../Components/WinBoard';

const GameArea = ({ navigation }) => {
    const [game, newGame] = useState(new Game());



    const [changeFlag, setChangeFlag] = useState(false)


    renderHandler = () => {
        console.log(changeFlag)
        setChangeFlag(!changeFlag)
    }

    return (
        <View  style={{ flex: 1, flexDirection: 'column' }} >
            <GameBoard game={game} />
            <WinBoard  game={game} pop={navigation} />
            <GameKeyboard  game={game} renderHandler={renderHandler} />
        </View>
    )
}

export default GameArea;