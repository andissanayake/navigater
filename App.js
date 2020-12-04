import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Home";
import WebViewScreen from "./WebView";
import CustomDrawerContent from "./CustomDrawerContent";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import en from "./lang/en";
import ja from "./lang/ja";

//this shoud be set using language settings
Localization.locale = "en";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: en,
  ja: ja,
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          initialParams={{ itemId: 0 }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
