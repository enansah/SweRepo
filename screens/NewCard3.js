import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const NewCard3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCard3, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.navParent}>
          <View style={[styles.nav, styles.navFlexBox]}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-29.png")}
              />
              <Text style={[styles.lashy, styles.lashyTypo]}>LASHY</Text>
            </View>
            <Pressable
              style={styles.frameChild}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/settingsbtn21.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.courseNameParent}>
              <Text style={[styles.courseName, styles.newCardFlexBox]}>
                course name
              </Text>
              <View style={styles.card1Parent}>
                <View style={styles.cardBorder}>
                  <Text style={[styles.cardContent, styles.lashyTypo]}>
                    Card content
                  </Text>
                </View>
                <View style={[styles.card11, styles.cardBorder]}>
                  <Text style={[styles.cardContent, styles.lashyTypo]}>
                    Card content
                  </Text>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.createbtn, styles.navFlexBox]}
              onPress={() => navigation.navigate("NewCard1")}
            >
              <Text style={[styles.newCard, styles.newCardFlexBox]}>
                New Card
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.footerbar, styles.navFlexBox]}>
          <View style={styles.createcardbtn}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus2.png")}
            />
            <Text style={styles.create}>Create</Text>
          </View>
          <Pressable
            style={[styles.homebtn, styles.homebtnSpaceBlock]}
            onPress={() => navigation.navigate("Homepage")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home2.png")}
            />
            <Text style={styles.homeTypo}>Home</Text>
          </Pressable>
          <Pressable
            style={[styles.librarybtn, styles.homebtnSpaceBlock]}
            onPress={() => navigation.navigate("Library")}
          >
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader2.png")}
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
  navFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  lashyTypo: {
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  newCardFlexBox: {
    color: Color.bLACK,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  cardBorder: {
    padding: Padding.p_8xs,
    height: 187,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
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
    color: Color.colorBlack,
    width: 70,
    height: 23,
    marginLeft: -15,
    textAlign: "center",
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
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
  courseName: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    width: 248,
    height: 41,
  },
  cardContent: {
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray,
    textAlign: "left",
    height: 20,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignSelf: "stretch",
  },
  card11: {
    marginTop: 10,
  },
  card1Parent: {
    marginTop: 45,
    alignSelf: "stretch",
  },
  courseNameParent: {
    height: 501,
    alignSelf: "stretch",
    alignItems: "center",
  },
  newCard: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    width: 99,
    height: 27,
  },
  createbtn: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gREEN,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    marginTop: 15,
    justifyContent: "center",
  },
  frameGroup: {
    marginTop: 40,
    alignSelf: "stretch",
    alignItems: "center",
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
  create: {
    color: Color.gREEN,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  createcardbtn: {
    width: 89,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 20,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameParent: {
    position: "absolute",
    top: 28,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  newCard3: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default NewCard3;
