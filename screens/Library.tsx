import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Library = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.library, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.groupParent}>
              <View style={styles.frameWrapper}>
                <View style={styles.groupContainer}>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={require("../assets/group-23.png")}
                  />
                  <Text style={[styles.lashy, styles.yourWrapperFlexBox]}>
                    LASHY
                  </Text>
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
            <View style={styles.frameView}>
              <View
                style={[styles.yourCoursesWrapper, styles.yourWrapperFlexBox]}
              >
                <Text style={[styles.yourCourses, styles.yourWrapperFlexBox]}>
                  Your courses
                </Text>
              </View>
              <View style={[styles.frameParent1, styles.frameParentBg]}>
                <Pressable
                  style={styles.physiologyWrapper}
                  onPress={() => navigation.navigate("NewCard2")}
                >
                  <Text style={[styles.physiology, styles.physiologyClr]}>
                    Physiology
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.anatomyWrapper, styles.wrapperFlexBox]}
                  onPress={() => navigation.navigate("NewCard2")}
                >
                  <Text style={[styles.physiology, styles.physiologyClr]}>
                    Anatomy
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.ethicsWrapper, styles.wrapperFlexBox]}
                  onPress={() => navigation.navigate("NewCard2")}
                >
                  <Text style={[styles.physiology, styles.physiologyClr]}>
                    Ethics
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.createACourseWrapper, styles.yourWrapperFlexBox]}
            onPress={() => navigation.navigate("NewCourse")}
          >
            <Text style={[styles.createACourse, styles.physiologyClr]}>
              Create a course
            </Text>
          </Pressable>
        </View>
        <View style={[styles.frameParent2, styles.frameParentBg]}>
          <View style={[styles.plusParent, styles.yourWrapperFlexBox]}>
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
            <Text style={[styles.library1, styles.createTypo]}>Library</Text>
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
  yourWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameParentBg: {
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
  },
  physiologyClr: {
    color: Color.bLACK,
    textAlign: "center",
  },
  wrapperFlexBox: {
    marginTop: 15,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: Color.white,
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
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
    width: 79,
    height: 23,
    marginLeft: -15,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  groupContainer: {
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
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
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  yourCourses: {
    fontSize: FontSize.size_16xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorDarkslategray,
    width: 335,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  yourCoursesWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  physiology: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    fontSize: FontSize.size_5xl,
    color: Color.bLACK,
  },
  physiologyWrapper: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    height: 43,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  anatomyWrapper: {
    height: 42,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
  },
  ethicsWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
    height: 43,
  },
  frameParent1: {
    borderRadius: Border.br_xl,
    height: 201,
    paddingHorizontal: Padding.p_2xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_2xs,
    marginTop: 5,
  },
  frameView: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameContainer: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  createACourse: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    width: 134,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  createACourseWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gREEN,
    width: 153,
    height: 49,
    padding: Padding.p_2xs,
    marginTop: 251,
    flexDirection: "row",
  },
  frameGroup: {
    alignItems: "center",
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
  },
  homeParent: {
    width: 97,
  },
  library1: {
    color: Color.gREEN,
    marginTop: 2,
  },
  bookReaderParent: {
    width: 95,
  },
  frameParent2: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    top: 28,
    left: 12,
    width: 365,
    position: "absolute",
  },
  library: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Library;
