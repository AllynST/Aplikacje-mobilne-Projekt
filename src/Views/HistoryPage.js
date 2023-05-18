import { StyleSheet, Text, View ,Button , StatusBar} from 'react-native';
const styles = StyleSheet.create({
    container: {
     fontSize:20,
     padding:6
    },
    
    
  });
const HistoryPage = ({navigator}) =>{
    return(
    <>
    <Text style={styles.container}>Wordle is a web-based word game created and developed by Welsh software engineer Josh Wardle. It was bought by the New York Times Company in 2022, 
        who has since maintained and published it. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of 
        colored tiles indicating when letters match or occupy the correct position. The mechanics are nearly identical to the 1955 pen-and-paper game Jotto 
        and the television game show franchise Lingo. Wordle has a single daily solution, with all players attempting to guess the same word.</Text>
    </>)
}


export default HistoryPage;