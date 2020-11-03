import * as React from "react";
import { View, Image, Text } from "react-native";
import { Icon } from "react-native-elements";
import { StatusBarHeight } from "./statusBarHeight";

function WebViewScreen({ navigation, route }) {
  console.log(route.params.itemId);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: StatusBarHeight + 15,
        }}
      >
        <View style={{ width: 60, height: 60 }}>
          <Icon
            name="menu"
            type="material"
            size={35}
            color="#999"
            onPress={() => navigation.openDrawer()}
          />
        </View>
        <View style={{ width: 70, height: 50 }}>
          <Image source={require("./assets/logo.png")} style={{ height: 50 }} />
        </View>
        <View style={{ width: 60, height: 60 }}>
          <Icon
            name="notifications"
            type="material"
            color="#999"
            size={35}
            onPress={() => console.log("hello")}
          />
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Web View-{route.params.itemId}</Text>
      </View>
    </View>
  );
}

export default WebViewScreen;
