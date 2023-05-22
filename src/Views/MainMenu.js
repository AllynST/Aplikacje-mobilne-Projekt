import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

function MainMenu({ navigation, route }) {
  const { nickname } = route.params;
  return (
    <View>
      <View style={styles.container}>


      </View>
      <Text style={styles.title}>Wordle</Text>

      <Button
        onPress={() => { navigation.navigate("GamePage", { nickname: nickname }) }}
        title="Play now!"
        color="#D7D3D3"
      />
      <Button
        onPress={() => { navigation.navigate("SettingsPage") }}
        title="Settings"
        color="#D7D3D3"
      />

      <Button
        onPress={() => { navigation.navigate("AboutPage") }}
        title="About"
        color="#D7D3D3"
      />
      <Button
        onPress={() => { navigation.navigate("HistoryPage") }}
        title="History"
        color="#D7D3D3"
      />
      <Text style={styles.welcomeText}>Your Nick: {nickname}</Text>
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5
  }
});
export default MainMenu;