
import { View } from 'react-native';
import GameKeyboard from '../Components/GameKeyboard';
import GameBoard from '../Components/GameBoard';
import { useEffect, useState } from 'react';
import Game from '../GameLogic/Game'
import WinBoard from '../Components/WinBoard';
import { fetchWordList } from '../GameLogic/helpers';
import styles from '../sharedStyles'



const GameArea = ({ navigation, route }) => {
    const [game, newGame] = useState(new Game("start", route.params.nickname));
    //const [nick, newNick] = useState(); 
    const [changeFlag, setChangeFlag] = useState(false)


    useEffect(() => {
        // newNick(route.params.nickname);
        console.log("gamearea ", route.params.nickname)
        async function fetch() {

            newGame(new Game((await fetchWordList()), route.params.nickname))

        }
        fetch()
    }, [])

    renderHandler = () => {
        setChangeFlag(!changeFlag)
    }

    return (

        <View  style={[styles.gameArea]} >
            <GameBoard game={game} testID="game-board"/>
            <WinBoard  game={game} pop={navigation} />
            <GameKeyboard  game={game} renderHandler={renderHandler} />
        </View>
    )
}

export default GameArea;