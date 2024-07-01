import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchArea from "../components/SearchArea";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homepage, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.navParent}>
          <View style={[styles.nav, styles.navFlexBox]}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-2.png")}
              />
              <Text style={[styles.lashy, styles.lashyFlexBox]}>LASHY</Text>
            </View>
            <Pressable
              style={styles.frameChild}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/settingsbtn.png")}
              />
            </Pressable>
          </View>
          <SearchArea />
        </View>
        <View style={[styles.footerbar, styles.navFlexBox]}>
          <View style={[styles.createcardbtn, styles.lashyFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus.png")}
            />
            <Text style={styles.createTypo}>Create</Text>
          </View>
          <View style={[styles.homebtn, styles.homebtnSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home.png")}
            />
            <Text style={styles.home}>Home</Text>
          </View>
          <View style={[styles.librarybtn, styles.homebtnSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader.png")}
            />
            <Text style={[styles.library, styles.createTypo]}>Library</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  createTypo: {
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  lashy: {
    fontSize: FontSize.size_mid,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
    display: "flex",
    width: 70,
    height: 23,
    marginLeft: -15,
    textAlign: "center",
    justifyContent: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  nav: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  navParent: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  createcardbtn: {
    width: 89,
  },
  home: {
    color: Color.gREEN,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  homebtn: {
    width: 97,
  },
  library: {
    marginTop: 2,
  },
  librarybtn: {
    width: 95,
  },
  footerbar: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 227,
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -176,
    top: 28,
    left: "50%",
    alignItems: "center",
  },
  homepage: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Homepage;