import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";

import { Calendar } from "./src/screens/Calendar";
import { Contact } from "./src/screens/Contact";
import { Donate } from "./src/screens/Donate";
import { Home } from "./src/screens/Home";

import "react-native-gesture-handler";

const Menu = createDrawerNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "#DFB87D",
    card: "#F4E4C0",
    text: "#B05919",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer theme={MyTheme}>
        <Menu.Navigator>
          <Menu.Screen name="Home" component={Home} />
          <Menu.Screen name="Calendar" component={Calendar} />
          <Menu.Screen name="Contact" component={Contact} />
          <Menu.Screen name="Donations" component={Donate} />
        </Menu.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
