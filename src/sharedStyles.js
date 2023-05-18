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
        padding: 4,
        flex:1,
        
        flexDirection:'row',
        justifyContent:'center',
        
        gap:5      
       
    
    },
    gameBoardSquare:(color)=>({
        borderWidth:1,
        borderRadius:5,
        borderColor:'#E3E3E3',
        width:50,
        height:50,
        textAlign:'center',
        lineHeight:50,
        
        alignItems: 'center',
        justifyContent: 'center',      
        backgroundColor: color === undefined ? 'white' : color,
    }),
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
     
      
    },
    popupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      popup: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      popupText: {
        fontSize: 18,
        marginBottom: 10,
      },
      popupButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      popupButtonText: {
        color: '#FFF',
        fontSize: 16,
      },
  });

//   export const squareStyle = (color) =  StyleSheet.create({    
//     gameBoardSquare:{
//         borderWidth:1,
//         borderRadius:5,
//         borderColor:'#E3E3E3',
//         width:50,
//         height:50,
//         textAlign:'center',
//         lineHeight:50,        
//         alignItems: 'center',
//         justifyContent: 'center',      
//         backgroundColor: color === undefined ? 'white' : color,
//     }
  
//   });




export default styles;