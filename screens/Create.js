import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Create = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.create, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.navParent}>
          <View style={[styles.nav, styles.navFlexBox]}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-22.png")}
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
                source={require("../assets/settingsbtn2.png")}
              />
            </Pressable>
          </View>
          <View style={styles.newcardParent}>
            <Pressable
              style={[styles.newcard, styles.newcardFlexBox]}
              onPress={() => navigation.navigate("NewCard1")}
            >
              <Text style={styles.newCard}>{`NEW
CARD`}</Text>
            </Pressable>
            <View style={[styles.newCourseWrapper, styles.newcardFlexBox]}>
              <Text style={styles.newCourse}>{`NEW
COURSE`}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.footerbar, styles.navFlexBox]}>
          <View style={[styles.createcardbtn, styles.lashyFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus2.png")}
            />
            <Text style={styles.create1}>Create</Text>
          </View>
          <View style={[styles.homebtn, styles.homebtnSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home2.png")}
            />
            <Text style={styles.homeTypo}>Home</Text>
          </View>
          <View style={[styles.librarybtn, styles.homebtnSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader2.png")}
            />
            <Text style={[styles.library, styles.homeTypo]}>Library</Text>
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
  newcardFlexBox: {
    paddingHorizontal: Padding.p_4xl,
    height: 229,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  homeTypo: {
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
  newCard: {
    color: Color.gREEN,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    flex: 1,
  },
  newcard: {
    paddingVertical: Padding.p_33xl,
    backgroundColor: Color.colorBlack,
  },
  newCourse: {
    color: Color.bLACK,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    flex: 1,
  },
  newCourseWrapper: {
    backgroundColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    paddingVertical: Padding.p_68xl,
    marginTop: 25,
  },
  newcardParent: {
    marginTop: 40,
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
  create1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.gREEN,
    textAlign: "center",
    alignSelf: "stretch",
  },
  createcardbtn: {
    width: 89,
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
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 103,
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -175.5,
    top: 28,
    left: "50%",
    alignItems: "center",
  },
  create: {
    backgroundColor: Color.white,
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
  },
});

export default Create;
