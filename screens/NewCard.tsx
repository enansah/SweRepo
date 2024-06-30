import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const NewCard = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCard2, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.groupParent, styles.groupFlexBox]}>
            <View style={styles.frameWrapper}>
              <View style={[styles.groupContainer, styles.groupFlexBox]}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/group-23.png")}
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
            <View style={styles.frameView}>
              <View style={[styles.cardFrontParent, styles.cardParentLayout]}>
                <Text style={[styles.cardFront, styles.cardLayout]}>
                  CARD FRONT
                </Text>
                <View style={styles.termNameWrapper}>
                  <Text style={[styles.termName, styles.createClr]}>
                    term name
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.cardBackParent, styles.createWrapperSpaceBlock]}
            >
              <Text style={[styles.cardBack, styles.createClr]}>CARD BACK</Text>
              <View
                style={[styles.descriptionWrapper, styles.cardBackParentBorder]}
              >
                <Text style={[styles.description, styles.createClr]}>
                  description
                </Text>
              </View>
            </View>
            <View
              style={[styles.createWrapper, styles.createWrapperSpaceBlock]}
            >
              <Text style={[styles.create, styles.createClr]}>Create</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameParent1}>
          <View style={[styles.plusParent, styles.lashyFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus2.png")}
            />
            <Text style={[styles.create1, styles.homeTypo]}>Create</Text>
          </View>
          <View style={[styles.homeParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home1.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
          <View style={[styles.bookReaderParent, styles.parentSpaceBlock]}>
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
  groupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardParentLayout: {
    paddingVertical: Padding.p_lg,
    height: 229,
    borderRadius: Border.br_xl,
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
  createClr: {
    color: Color.bLACK,
    textAlign: "center",
  },
  createWrapperSpaceBlock: {
    marginTop: 22,
    alignItems: "center",
  },
  cardBackParentBorder: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
  },
  homeTypo: {
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
    color: Color.colorBlack,
    width: 79,
    height: 23,
    marginLeft: -15,
    display: "flex",
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  groupContainer: {
    top: 0,
    left: 0,
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
    alignSelf: "stretch",
  },
  cardFront: {
    color: Color.white,
    textAlign: "center",
  },
  termName: {
    width: 295,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
  },
  termNameWrapper: {
    width: 338,
    height: 60,
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: Padding.p_mini,
    marginTop: 39,
    borderWidth: 1,
    borderRadius: Border.br_31xl,
    borderColor: Color.gREEN,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  cardFrontParent: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    paddingHorizontal: Padding.p_2xs,
    borderColor: Color.gREEN,
    borderStyle: "solid",
    height: 229,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  frameView: {
    alignSelf: "stretch",
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
  description: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    color: Color.bLACK,
    flex: 1,
  },
  descriptionWrapper: {
    backgroundColor: Color.colorGray_100,
    width: 326,
    height: 73,
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: Padding.p_2xl,
    marginTop: 43,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  cardBackParent: {
    backgroundColor: Color.colorSilver_100,
    paddingHorizontal: 17,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_lg,
    height: 229,
    borderRadius: Border.br_xl,
    alignSelf: "stretch",
    marginTop: 22,
  },
  create: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  createWrapper: {
    backgroundColor: Color.gREEN,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameContainer: {
    marginTop: 40,
    alignSelf: "stretch",
    alignItems: "center",
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
  create1: {
    color: Color.gREEN,
  },
  plusParent: {
    width: 89,
  },
  home: {
    color: Color.white,
  },
  homeParent: {
    width: 97,
  },
  library: {
    marginTop: 2,
    color: Color.white,
  },
  bookReaderParent: {
    width: 95,
  },
  frameParent1: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 36,
    backgroundColor: Color.colorBlack,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    marginTop: -394,
    marginLeft: -180,
    top: "50%",
    left: "50%",
    width: 360,
    height: 789,
    alignItems: "center",
    position: "absolute",
  },
  newCard2: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default NewCard;
