import * as React from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Accordian from "./DrawerAccordian";

function CustomDrawerContent({ navigation }) {
  return (
    <DrawerContentScrollView>
      <DrawerItem label="Home" onPress={() => navigation.navigate("Home")} />
      <DrawerItem
        label="Help1"
        onPress={() => navigation.navigate("Screen 1", { itemId: 1000 })}
      />
      <DrawerItem
        label="Help2"
        onPress={() => navigation.navigate("Screen 1", { itemId: 2000 })}
      />
      <DrawerItem
        label="Help3"
        onPress={() => navigation.navigate("Screen 1", { itemId: 3000 })}
      />
      <Accordian title="This is title" data="Yeah this is data" id="4000" />
      <Accordian title="This is title2" data="Yeah this is data222" id="5000" />
      <Accordian title="This is title3" data="Yeah this is data333" id="6000" />
      <Accordian title="This is title4" data="Yeah this is data444" id="7000" />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
