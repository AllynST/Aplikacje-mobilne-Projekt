
import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import MainMenu from './src/Views/MainMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutPage from './src/Views/AboutPage';
import GameArea from './src/Views/GameArea';
import SettingsPage from './src/Views/SettingsPage';
import HistoryPage from './src/Views/HistoryPage';
import styles from './src/sharedStyles';


export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.backgroundColor}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainMenu} />
          <Stack.Screen name="GamePage"  component={GameArea}/>
          <Stack.Screen name="AboutPage"  component={AboutPage} />
          <Stack.Screen name="SettingsPage" component={SettingsPage} />
          <Stack.Screen name="HistoryPage" component={HistoryPage} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
    
  );
}

