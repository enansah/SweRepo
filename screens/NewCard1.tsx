import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const NewCard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCard, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.groupParent}>
            <View style={styles.frameWrapper}>
              <View style={styles.groupContainer}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/group-23.png")}
                />
                <Text style={[styles.lashy, styles.selectWrapperFlexBox]}>
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
          <View style={styles.frameContainer}>
            <Pressable
              style={[styles.newCourseWrapper, styles.frameWrapperBg]}
              onPress={() => navigation.navigate("NewCourse")}
            >
              <Text style={[styles.newCourse, styles.courseTypo]}>{`NEW
COURSE`}</Text>
            </Pressable>
            <View style={styles.frameView}>
              <View
                style={[
                  styles.selectACourseWrapper,
                  styles.selectWrapperFlexBox,
                ]}
              >
                <Text style={[styles.selectACourse, styles.courseTypo]}>
                  SELECT A COURSE
                </Text>
              </View>
              <View style={[styles.frameWrapper1, styles.frameWrapperBg]}>
                <View style={styles.frameParent1}>
                  <Pressable
                    style={styles.physiologyWrapper}
                    onPress={() => navigation.navigate("NewCard2")}
                  >
                    <Text style={styles.physiology}>Physiology</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.anatomyWrapper, styles.wrapperFlexBox]}
                    onPress={() => navigation.navigate("NewCard2")}
                  >
                    <Text style={styles.physiology}>Anatomy</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.ethicsWrapper, styles.wrapperFlexBox]}
                    onPress={() => navigation.navigate("NewCard2")}
                  >
                    <Text style={styles.physiology}>Ethics</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.frameWrapperBg]}>
          <View style={[styles.plusParent, styles.selectWrapperFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus.png")}
            />
            <Text style={styles.createTypo}>Create</Text>
          </View>
          <View style={[styles.homeParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home2.png")}
            />
            <Text style={styles.createTypo}>Home</Text>
          </View>
          <View style={[styles.bookReaderParent, styles.parentSpaceBlock]}>
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
  selectWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapperBg: {
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
  },
  courseTypo: {
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
    textAlign: "center",
  },
  wrapperFlexBox: {
    marginTop: 15,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  parentSpaceBlock: {
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
  newCourse: {
    fontSize: FontSize.size_45xl,
    color: Color.gREEN,
    flex: 1,
  },
  newCourseWrapper: {
    height: 229,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_33xl,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  selectACourse: {
    fontSize: FontSize.size_16xl,
    color: Color.colorDarkslategray,
    width: 335,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  selectACourseWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  physiology: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.bLACK,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
  },
  physiologyWrapper: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    height: 43,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    width: 318,
  },
  frameWrapper1: {
    height: 201,
    paddingHorizontal: Padding.p_2xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_2xs,
    marginTop: 5,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlack,
  },
  frameView: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameContainer: {
    marginTop: 40,
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
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 88,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    top: 28,
    left: 12,
    width: 365,
    height: 789,
    position: "absolute",
  },
  newCard: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default NewCard1;
