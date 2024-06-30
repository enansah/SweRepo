import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const NewCourse = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCourse, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.groupParent, styles.groupParentFlexBox]}>
            <View style={styles.frameWrapper}>
              <View style={[styles.groupContainer, styles.groupParentFlexBox]}>
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
            <View style={styles.frameView}>
              <View style={styles.newCourseWrapper}>
                <Text style={[styles.newCourse1, styles.courseClr]}>{`NEW
COURSE`}</Text>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.courseNameWrapper, styles.wrapperBorder]}>
                  <Text
                    style={[styles.courseName, styles.courseClr]}
                  >{`course name `}</Text>
                </View>
                <View
                  style={[
                    styles.descriptionoptionalWrapper,
                    styles.wrapperBorder,
                  ]}
                >
                  <Text style={[styles.courseName, styles.courseClr]}>
                    description(optional)
                  </Text>
                </View>
              </View>
            </View>
            <Pressable
              style={styles.createWrapper}
              onPress={() => navigation.navigate("NewCard2")}
            >
              <Text style={[styles.create, styles.courseClr]}>Create</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.groupParentFlexBox]}>
          <View style={[styles.plusParent, styles.lashyFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus2.png")}
            />
            <Text style={styles.create1}>Create</Text>
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
  groupParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  courseClr: {
    color: Color.bLACK,
    textAlign: "center",
  },
  wrapperBorder: {
    paddingVertical: Padding.p_6xs,
    height: 60,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_31xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    display: "flex",
    width: 79,
    height: 23,
    marginLeft: -15,
    textAlign: "center",
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
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
  newCourse1: {
    fontSize: FontSize.size_45xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    flex: 1,
  },
  newCourseWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSilver_100,
    height: 229,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_68xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  courseName: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    color: Color.bLACK,
    flex: 1,
  },
  courseNameWrapper: {
    width: 326,
    paddingHorizontal: Padding.p_8xl,
  },
  descriptionoptionalWrapper: {
    paddingHorizontal: Padding.p_mini,
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameParent1: {
    width: 350,
    marginTop: 45,
    alignItems: "center",
  },
  frameView: {
    alignSelf: "stretch",
    alignItems: "center",
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
    marginTop: 98,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
  frameParent2: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 35,
    alignSelf: "stretch",
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
  newCourse: {
    backgroundColor: Color.white,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default NewCourse;
