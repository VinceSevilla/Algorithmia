import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SvgXml } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
import {
  loadFont,
  SVGLogo,
  SVGSettings,
  SVGOne,
  SVGTwo,
  SVGThree,
  SVGFour,
} from "../../loadFontSVG";

const MainMenu = ({ navigation }) => {
  useEffect(() => {
    loadFont();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity>
        <View style={styles.logoContainer}>
          <SvgXml xml={SVGLogo} width="43" height="43" />
        </View>
      </TouchableOpacity>
      <View style={styles.settingsContainer}>
        <SvgXml xml={SVGSettings} width="43" height="43" />
      </View>
      <View style={styles.container}>
        <View style={styles.headerLine} />
        <StatusBar hidden />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>What to do?</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => console.log("zzz")}
            style={styles.square}
            activeOpacity={0.7}
          >
            <View style={styles.squareShapeView}>
              <SvgXml xml={SVGOne} width="76" height="76" />
            </View>
            <Text style={styles.title}>Wholesale</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BottomTab")}
            style={styles.square}
            activeOpacity={0.7}
          >
            <View style={styles.squareShapeView}>
              <SvgXml xml={SVGTwo} width="90" height="90" />
            </View>
            <Text style={styles.title}>Sort Items</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => console.log("Delivery pressed")}
            style={styles.square}
            activeOpacity={0.7}
          >
            <View style={styles.squareShapeView}>
              <SvgXml xml={SVGThree} width="76" height="76" />
            </View>
            <Text style={styles.title}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Word Finder pressed")}
            style={styles.square}
            activeOpacity={0.7}
          >
            <View style={styles.squareShapeView}>
              <SvgXml xml={SVGFour} width="90" height="90" />
            </View>
            <Text style={styles.title}>Word Finder</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
  },
  headerLine: {
    position: "absolute",
    backgroundColor: "#2CC5EF",
    top: 90,
    left: 0,
    right: 0,
    height: 3,
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 20,
    left: 0,
    right: 350,
    zIndex: 1,
    paddingTop: 10,
  },
  settingsContainer: {
    alignItems: "center",
    position: "absolute",
    top: 20,
    left: 350,
    right: 0,
    zIndex: 1,
    paddingTop: 10,
  },
  sectionContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontFamily: "karma-semibold",
    color: "#FFFFFF",
    fontSize: 24,
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  square: {
    alignItems: "center",
    flex: 1,
  },
  squareShapeView: {
    width: 159,
    height: 142,
    borderRadius: 20,
    backgroundColor: "#147691",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "karma-regular",
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 10,
  },
});

export default MainMenu;
