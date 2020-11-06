import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Home";
import WebViewScreen from "./WebView";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen
          name="Screen 1"
          component={WebViewScreen}
          initialParams={{ itemId: 0 }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
