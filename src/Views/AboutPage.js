import { StyleSheet, Text, View,Image } from 'react-native';
import styles, { colorPalette } from '../sharedStyles'
import warningExample from '../image/warningExample.jpg'
import correctExample from '../image/correctExample.jpg'


function AboutPage() {
    return (
        <>
            <View style={styles.container}>
                <View>
                  <Text style={[styles.mainHeader,{fontSize:50}]}>Instructions:</Text>
                </View>
                <View>
                  <Text style={styles.secondaryHeader}>Guess the word in 6 tries.</Text>
                </View>
                <View style={localStyles.padding}>
                <View>
                  <Text style={localStyles.headers}>How to play:</Text>
                </View>
                <Text style={localStyles.listItems}>-Each guess must be a valid 5-letter word.</Text>
                <Text style={localStyles.listItems}>-The color of the tiles will change to show how close your guess was to the word</Text>
                </View>
                <View>
                  <Text style={localStyles.headers}>Example:</Text>
                </View>
                <View>
                  <Text style={localStyles.listItems}>The letter is correct and in the right place</Text>
                </View>
                <View>
                  <Image
                  style={localStyles.images}
                  source={correctExample}
                  />
                </View>
                <View>
                  <Text style={localStyles.listItems}>The letter is correct but not in the right place</Text>
                </View>
                <View>
                 <Image
                 style={localStyles.images}
                 source={warningExample}
                 />
                </View>
            </View>
        </>
    )
}

const localStyles = StyleSheet.create({
  padding:{
    padding:15,
  },
  images:{
    height:55,
    width:300,
    resizeMode:'cover'
  },
  headers:{
    fontSize:20,
    textAlign:'center',
    color:colorPalette.white,
    fontWeight:500,
    padding:10
  },
  listItems:{
    color:colorPalette.white
  }

})

export default AboutPage;