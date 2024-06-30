import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Container = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.groupParent}>
            <View style={styles.frameWrapper}>
              <View style={styles.groupContainer}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/group-22.png")}
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
                source={require("../assets/whmcs.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.frameViewLayout}>
              <View style={styles.frameWrapper1}>
                <View style={[styles.termNameWrapper, styles.frameViewLayout]}>
                  <Text style={[styles.termName, styles.lashyFlexBox]}>
                    term name
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.plusParent}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus1.png")}
            />
            <Text style={[styles.create, styles.createTypo]}>Create</Text>
          </View>
          <View style={[styles.homeParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home1.png")}
            />
            <Text style={[styles.create, styles.createTypo]}>Home</Text>
          </View>
          <View style={[styles.bookReaderParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader1.png")}
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
  lashyFlexBox: {
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
  },
  frameViewLayout: {
    width: 296,
    alignItems: "center",
  },
  createTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  parentSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  lashy: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    width: 79,
    height: 23,
    marginLeft: -15,
    justifyContent: "center",
  },
  groupContainer: {
    top: 0,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameWrapper: {
    width: 104,
    height: 40,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  groupParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  termName: {
    fontSize: FontSize.size_6xl,
    color: Color.bLACK,
    justifyContent: "center",
    height: 40,
    flex: 1,
  },
  termNameWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 41,
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: Padding.p_6xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameWrapper1: {
    width: 350,
    alignItems: "center",
  },
  frameContainer: {
    height: 558,
    marginTop: 40,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameGroup: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  create: {
    color: Color.white,
  },
  plusParent: {
    width: 89,
    justifyContent: "center",
    alignItems: "center",
  },
  homeParent: {
    width: 97,
  },
  library: {
    color: Color.gREEN,
    marginTop: 2,
  },
  bookReaderParent: {
    width: 95,
  },
  frameParent1: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 28,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    top: 28,
    left: 15,
    width: 360,
    position: "absolute",
  },
  container: {
    backgroundColor: Color.white,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Container;
