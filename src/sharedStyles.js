import { StyleSheet } from 'react-native';

export const ChangeColor = (colorScheme) => {
  console.log("switched to: ",colorScheme)
  switch(colorScheme){
    case "normal":
      colorPalette = { ...NormalPalette };
    break;
    case "dalto":
      colorPalette = { ...colorPaletteDalt }
    break;
  } 
}
export let NormalPalette = {
  "mainBackground": "#283044",
  "keysColor": "#211A1E",
  "Highlight": "#00E8FC",
  "white": "#E3E3E3",
  "Error": "#CC2936",
  "Warning": "#FFF94F",
  "Correct": "#248232",


}
export let colorPaletteDalt = {
  "Warning": "#F4DA01",
  "Correct": "#0000FF"
}
export let colorPalette = { ...NormalPalette };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    backgroundColor: colorPalette.mainBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSplashScreen: {
    flex: 1,
    gap: 15,
    backgroundColor: colorPalette.mainBackground,
    alignItems: 'center',
    paddingTop:150
  },
  mainHeader: {
    color: colorPalette.white,
    fontWeight: 'bold',
    fontSize: 80

  },
  secondaryHeader: {
    color: colorPalette.white,
    fontWeight: 'bold',
    fontSize: 30,
    opacity: 0.7
  },
  mainMenuBtn: {
    backgroundColor: colorPalette.Highlight,
    padding: 15,
    width: 200,
    borderRadius: 15,

  },
  SpalshScreenNextBtn: {
    backgroundColor: colorPalette.Highlight,
    padding: 15,
    width: 130,
    borderRadius: 15,

  },
  SpalshScreenNextBtnTxt: {
    textAlign: 'center',
    color: colorPalette.backgroundColor,
    fontWeight: 'bold',
    fontSize: 25

  },
  mainMenuBtnTxt: {
    textAlign: 'center',
    color: colorPalette.backgroundColor,
    fontWeight: 'bold',
    fontSize: 25
  },
  backgroundColor: {
    flex: 1,
    backgroundColor: colorPalette.mainBackground
  },
  keyboardArea: {
    flex: 1,
    flexDirection: 'column'
  },
  gameArea: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    backgroundColor: colorPalette.mainBackground,
    padding: 5,
    paddingBottom: 40

  },
  gameBoard: {
    flex: 3,
  },
  gameRow: {
    padding: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5


  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor:"#FFFFFF",
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#333333',
  },
  gameBoardSquare: (color) => ({
    borderWidth: 1,
    borderRadius: 5,
    // borderColor:colorPalette.white,
    width: 50,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color === undefined ? colorPalette.white : color,
  }),
  keyboardRow: {

    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 2
  },
  keyboardSquare: {
    color: 'white',
    width: 30,
    height: 30,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colorPalette.keysColor,
    textAlign: 'center',
    lineHeight: 30,
    borderRadius: 2,


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