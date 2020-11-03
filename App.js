// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Home";
import WebViewScreen from "./WebView";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen
          name="Screen 1"
          component={WebViewScreen}
          initialParams={{ itemId: 1 }}
        />
        <Drawer.Screen
          name="Screen 2"
          component={WebViewScreen}
          initialParams={{ itemId: 2 }}
        />
        <Drawer.Screen
          name="Screen 3"
          component={WebViewScreen}
          initialParams={{ itemId: 3 }}
        />
        <Drawer.Screen
          name="Screen 4"
          component={WebViewScreen}
          initialParams={{ itemId: 4 }}
        />
        <Drawer.Screen
          name="Screen 5"
          component={WebViewScreen}
          initialParams={{ itemId: 5 }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
