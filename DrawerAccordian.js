import React, { Component } from "react";
import { DrawerItem } from "@react-navigation/drawer";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { Colors } from "./Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import i18n from "i18n-js";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  render() {
    return (
      <View key={this.props.id}>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => {
            if (this.props.data.length == 0) {
              this.props.navigation.toggleDrawer();
              this.props.navigation.navigate("WebViewScreen", {
                itemUrl: this.props.url,
              });
            } else {
              this.toggleExpand();
            }
          }}
        >
          <Text style={[styles.title, styles.font]}>
            {i18n.t(this.props.title)}
          </Text>
          {this.props.data.length > 0 && (
            <Icon
              name={
                this.state.expanded
                  ? "keyboard-arrow-up"
                  : "keyboard-arrow-down"
              }
              size={30}
              color={Colors.DARKGRAY}
            />
          )}
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={styles.child}>
            {this.props.data.map((item) => {
              return (
                <DrawerItem
                  label={i18n.t(item.SubTitle)}
                  key={item.Id}
                  onPress={() =>
                    this.props.navigation.navigate("WebViewScreen", {
                      itemUrl: item.Url,
                    })
                  }
                />
              );
            })}
          </View>
        )}
      </View>
    );
  }

  onClick = (index) => {
    const temp = this.state.data.slice();
    temp[index].value = !temp[index].value;
    this.setState({ data: temp });
  };

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 54,
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.DARKGRAY,
  },
  itemActive: {
    fontSize: 12,
    color: Colors.GREEN,
  },
  itemInActive: {
    fontSize: 12,
    color: Colors.DARKGRAY,
  },
  btnActive: {
    borderColor: Colors.GREEN,
  },
  btnInActive: {
    borderColor: Colors.DARKGRAY,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: Colors.CGRAY,
  },
  childRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.GRAY,
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: "100%",
  },
  childHr: {
    height: 1,
    backgroundColor: Colors.LIGHTGRAY,
    width: "100%",
  },
  colorActive: {
    borderColor: Colors.GREEN,
  },
  colorInActive: {
    borderColor: Colors.DARKGRAY,
  },
});
