import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const SyncNotesAppOnboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.syncNotesAppOnboarding, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={[styles.groupParent, styles.groupContainerFlexBox]}>
          <View style={styles.frameWrapper}>
            <View style={[styles.groupContainer, styles.groupContainerFlexBox]}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-21.png")}
              />
              <Text style={[styles.lashy, styles.lashyFlexBox]}>LASHY</Text>
            </View>
          </View>
          <Pressable
            style={styles.frameChild}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/whmcs1.png")}
            />
          </Pressable>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.welcomeParent}>
            <Text style={[styles.welcome, styles.lashyFlexBox]}>Welcome!</Text>
            <Text style={[styles.areYouReady, styles.lashyFlexBox]}>
              Are you ready to sync your notebook?
            </Text>
          </View>
          <View style={[styles.frameContainer, styles.groupContainerFlexBox]}>
            <Pressable
              style={styles.wrapperLayout}
              onPress={() => navigation.navigate("Upload")}
            >
              <Text style={styles.yes}>YES</Text>
            </Pressable>
            <Pressable
              style={[styles.laterWrapper, styles.wrapperLayout]}
              onPress={() => navigation.navigate("Homepage")}
            >
              <Text style={styles.yes}>LATER</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupContainerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  lashyFlexBox: {
    justifyContent: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "center",
    alignItems: "center",
  },
  wrapperLayout: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xs,
    height: 49,
    width: 116,
    backgroundColor: Color.gREEN,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  lashy: {
    width: 79,
    height: 23,
    marginLeft: -15,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
    display: "flex",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  groupContainer: {
    top: 0,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  frameWrapper: {
    width: 104,
    height: 40,
  },
  icon: {
    height: "100%",
  },
  groupParent: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  welcome: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    alignSelf: "stretch",
  },
  areYouReady: {
    fontSize: FontSize.size_13xl,
    height: 100,
    marginTop: 26,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
    display: "flex",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  welcomeParent: {
    alignSelf: "stretch",
  },
  yes: {
    fontFamily: FontFamily.interRegular,
    color: Color.bLACK,
    textAlign: "center",
    fontSize: FontSize.size_xl,
  },
  laterWrapper: {
    marginLeft: 25,
  },
  frameContainer: {
    marginTop: 41,
    alignItems: "center",
  },
  frameGroup: {
    marginTop: 198,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    top: 23,
    left: 14,
    width: 361,
    alignItems: "flex-end",
    position: "absolute",
  },
  syncNotesAppOnboarding: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
  },
});

export default SyncNotesAppOnboarding;
