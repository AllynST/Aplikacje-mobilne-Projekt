import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    gameBoard:{
        
        flex:3,
        
    },
    gameRow:{
        flex:1,
        
        flexDirection:'row',
        justifyContent:'center',
        
        gap:5      
       
    
    },
    gameBoardSquare:{
        borderWidth:1,
        borderRadius:5,
        borderColor:'#E3E3E3',
        width:50,
        height:50,
        
        alignItems: 'center',
        justifyContent: 'center',      
        backgroundColor: 'white',
    },
    keyboardRow:{
        
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",        
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
        gap:2
    },
    keyboardSquare:{
        color:'white',
        width:30,
        height:30,
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',      
        backgroundColor: '#414a5e',
        textAlign:'center',
        lineHeight:30,
        borderRadius:2,
     
      
    }
  });



export default styles;