import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const NewCard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCard2, styles.iconLayout]}>
      <View style={styles.paging}>
        <View style={[styles.navParent, styles.navFlexBox1]}>
          <View style={[styles.nav, styles.navFlexBox]}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-212.png")}
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
                source={require("../assets/settingsbtn3.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameParent}>
            <View style={styles.frameParent}>
              <View style={[styles.cardbck, styles.cardbckSpaceBlock]}>
                <Text style={[styles.cardFront, styles.cardLayout]}>
                  CARD FRONT
                </Text>
                <TextInput
                  style={[styles.cardbckChild, styles.describeTypo]}
                  placeholder="term name"
                  placeholderTextColor="#1a1a1a"
                />
              </View>
            </View>
            <View style={[styles.cardfront, styles.cardfrontSpaceBlock]}>
              <Text style={[styles.cardBack, styles.createClr]}>CARD BACK</Text>
              <TextInput
                style={[styles.describe, styles.describeBorder]}
                placeholder="description"
                multiline={true}
                placeholderTextColor="#1a1a1a"
              />
            </View>
            <Pressable
              style={[styles.createbtn, styles.cardfrontSpaceBlock]}
              onPress={() => navigation.navigate("Container")}
            >
              <Text style={[styles.create, styles.createClr]}>Create</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.footerbar}>
          <View style={[styles.createcardbtn, styles.lashyFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus8.png")}
            />
            <Text style={[styles.create1, styles.homeTypo]}>Create</Text>
          </View>
          <Pressable
            style={[styles.homebtn, styles.homebtnSpaceBlock]}
            onPress={() => navigation.navigate("Homepage")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home8.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </Pressable>
          <Pressable
            style={[styles.librarybtn, styles.homebtnSpaceBlock]}
            onPress={() => navigation.navigate("Library")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader8.png")}
            />
            <Text style={[styles.library, styles.homeTypo]}>Library</Text>
          </Pressable>
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
  navFlexBox1: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  navFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardbckSpaceBlock: {
    paddingVertical: Padding.p_lg,
    height: 229,
    alignSelf: "stretch",
  },
  cardLayout: {
    height: 54,
    width: 314,
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_21xl,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  describeTypo: {
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    flexDirection: "row",
    alignItems: "center",
  },
  cardfrontSpaceBlock: {
    marginTop: 22,
    alignItems: "center",
  },
  createClr: {
    color: Color.bLACK,
    textAlign: "center",
  },
  describeBorder: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
  },
  homeTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  lashy: {
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    width: 70,
    height: 23,
    marginLeft: -15,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
    textAlign: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  nav: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  cardFront: {
    color: Color.white,
    textAlign: "center",
    width: 314,
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_21xl,
  },
  cardbckChild: {
    width: 315,
    height: 42,
    paddingHorizontal: 105,
    paddingVertical: Padding.p_mini,
    marginTop: 39,
    borderWidth: 1,
    fontSize: FontSize.size_xl,
    borderRadius: Border.br_31xl,
    borderColor: Color.gREEN,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  cardbck: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    paddingHorizontal: Padding.p_2xs,
    borderColor: Color.gREEN,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_lg,
    height: 229,
    backgroundColor: Color.colorBlack,
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  cardBack: {
    height: 54,
    width: 314,
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_21xl,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  describe: {
    backgroundColor: Color.colorGray_100,
    width: 326,
    height: 73,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_8xs,
    marginTop: 43,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    flexDirection: "row",
    alignItems: "center",
  },
  cardfront: {
    backgroundColor: Color.colorSilver_100,
    paddingHorizontal: 17,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_lg,
    height: 229,
    alignSelf: "stretch",
  },
  create: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  createbtn: {
    backgroundColor: Color.gREEN,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    borderRadius: Border.br_31xl,
    marginTop: 22,
    justifyContent: "center",
    flexDirection: "row",
  },
  navParent: {
    height: 631,
    alignItems: "center",
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  create1: {
    color: Color.gREEN,
  },
  createcardbtn: {
    width: 89,
  },
  home: {
    color: Color.white,
  },
  homebtn: {
    width: 97,
  },
  library: {
    marginTop: 2,
    color: Color.white,
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
    marginTop: 36,
    backgroundColor: Color.colorBlack,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  paging: {
    position: "absolute",
    marginTop: -394.5,
    marginLeft: -176,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  newCard2: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default NewCard1;