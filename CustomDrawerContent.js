import * as React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Accordian from "./DrawerAccordian";
import * as AppMenu from "./Menu";

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
      {AppMenu.MENUITEMS.map((item) => {
        return (
          <Accordian
            title={item.Title}
            data={item.SubMenu}
            key={item.Id}
            navigation={navigation}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
