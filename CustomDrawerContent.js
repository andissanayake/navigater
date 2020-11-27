import * as React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Accordian from "./DrawerAccordian";
import * as AppMenu from "./menuItems";

function CustomDrawerContent({ navigation }) {
  return (
    <DrawerContentScrollView>
      <DrawerItem label="Home" onPress={() => navigation.navigate("Home")} />
      {AppMenu.MENUITEMS.map((item) => {
        return (
          <Accordian
            title={item.Title}
            data={item.SubMenu}
            key={item.Id}
            navigation={navigation}
            id={item.Id}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
