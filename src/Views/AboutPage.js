import { StyleSheet, Text, View,Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 5,
      backgroundColor:"#000"
    },
    Logo: {
      width: 400,
      height: 400,
      resizeMode:"contain"
    },
    
  });

function AboutPage() {
    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.Logo}
                    source={require('../image/about.png')}
                />
            </View>
        </>
    )
}

export default AboutPage;