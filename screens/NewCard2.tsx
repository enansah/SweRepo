import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const NewCard2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCard3, styles.iconLayout]}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.groupParent}>
            <View style={styles.frameWrapper}>
              <View style={[styles.groupContainer, styles.frameParentPosition]}>
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
              <View
                style={[
                  styles.courseNameDescriptionOptioWrapper,
                  styles.nameWrapperBorder,
                ]}
              >
                <Text style={styles.newCardClr}>
                  <Text
                    style={[styles.courseName, styles.cardsTypo]}
                  >{`course name
`}</Text>
                  <Text
                    style={[styles.descriptionOptional, styles.termNameTypo]}
                  >
                    description (optional)
                  </Text>
                </Text>
              </View>
              <View style={styles.cardsParent}>
                <Text style={[styles.cards, styles.cardsFlexBox]}>CARDS</Text>
                <Pressable
                  style={styles.framePressable}
                  onPress={() => navigation.navigate("Container")}
                >
                  <View style={[styles.termNameWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.termName, styles.cardsFlexBox]}>
                      term name
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={styles.framePressable}
                  onPress={() => navigation.navigate("Container")}
                >
                  <View style={[styles.termNameWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.termName, styles.cardsFlexBox]}>
                      term name
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
            <Pressable
              style={[styles.newCardWrapper, styles.wrapperFlexBox]}
              onPress={() => navigation.navigate("NewCard")}
            >
              <Text style={[styles.newCard, styles.newCardClr]}>New Card</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.frameParent1}>
          <View style={[styles.plusParent, styles.lashyFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus2.png")}
            />
            <Text style={styles.create}>Create</Text>
          </View>
          <View style={[styles.homeParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home1.png")}
            />
            <Text style={styles.homeTypo}>Home</Text>
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
  frameParentPosition: {
    position: "absolute",
    alignItems: "center",
  },
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  nameWrapperBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  cardsTypo: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_21xl,
  },
  termNameTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  cardsFlexBox: {
    color: Color.colorDarkslategray,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  wrapperFlexBox: {
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  newCardClr: {
    color: Color.bLACK,
    textAlign: "center",
  },
  parentSpaceBlock: {
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
    color: Color.colorBlack,
    width: 79,
    height: 23,
    marginLeft: -15,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
  },
  groupContainer: {
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
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
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  courseName: {
    fontWeight: "600",
  },
  descriptionOptional: {
    fontSize: FontSize.size_13xl,
  },
  courseNameDescriptionOptioWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.color,
    height: 229,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 46,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cards: {
    height: 39,
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_21xl,
    alignSelf: "stretch",
  },
  termName: {
    width: 295,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray,
  },
  termNameWrapper: {
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignSelf: "stretch",
    height: 40,
  },
  framePressable: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  cardsParent: {
    marginTop: 30,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameView: {
    alignSelf: "stretch",
  },
  newCard: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  newCardWrapper: {
    backgroundColor: Color.gREEN,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    marginTop: 113,
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
  create: {
    color: Color.gREEN,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  plusParent: {
    width: 89,
  },
  homeParent: {
    width: 97,
  },
  library: {
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
    marginTop: 27,
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
  },
  newCard3: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default NewCard2;
