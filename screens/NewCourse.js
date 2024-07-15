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
import { Color, FontSize, Padding, FontFamily, Border } from "../GlobalStyles";

const NewCourse = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCourse, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.navParent}>
          <View style={styles.nav}>
            <View style={styles.groupParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-211.png")}
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
                source={require("../assets/settingsbtn21.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.createnewcourseParent}>
              <View style={styles.createnewcourse}>
                <Text style={[styles.newCourse1, styles.createClr]}>{`NEW
COURSE`}</Text>
              </View>
              <View style={styles.coursenameParent}>
                <TextInput
                  style={[styles.coursename, styles.describeTypo]}
                  placeholder="course name "
                  placeholderTextColor="#1a1a1a"
                />
                <TextInput
                  style={[styles.describe, styles.describeTypo]}
                  placeholder="description(optional)"
                  multiline={true}
                  placeholderTextColor="#1a1a1a"
                />
              </View>
            </View>
            <Pressable
              style={[styles.createbtn, styles.lashyFlexBox]}
              onPress={() => navigation.navigate("NewCard3")}
            >
              <Text style={[styles.create, styles.createClr]}>Create</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.footerbar, styles.lashyFlexBox]}>
          <View style={[styles.createcardbtn, styles.lashyFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus2.png")}
            />
            <Text style={styles.create1}>Create</Text>
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
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  createClr: {
    color: Color.bLACK,
    textAlign: "center",
  },
  describeTypo: {
    fontSize: FontSize.size_xl,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.colorGray_100,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    flexDirection: "row",
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
    color: Color.colorBlack,
    display: "flex",
    width: 70,
    height: 23,
    marginLeft: -15,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  nav: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  newCourse1: {
    fontSize: FontSize.size_45xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    flex: 1,
  },
  createnewcourse: {
    backgroundColor: Color.colorSilver_100,
    height: 229,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_68xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  coursename: {
    width: 326,
    height: 60,
    borderRadius: Border.br_31xl,
  },
  describe: {
    height: 78,
    marginTop: 10,
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.colorGray_100,
    alignSelf: "stretch",
  },
  coursenameParent: {
    width: 350,
    marginTop: 45,
    alignItems: "center",
  },
  createnewcourseParent: {
    alignSelf: "stretch",
    alignItems: "center",
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
    marginTop: 80,
    borderRadius: Border.br_31xl,
    flexDirection: "row",
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
  create1: {
    color: Color.gREEN,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
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
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 35,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -175.5,
    top: 28,
    left: "50%",
    alignItems: "center",
  },
  newCourse: {
    backgroundColor: Color.white,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default NewCourse;