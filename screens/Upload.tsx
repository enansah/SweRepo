import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Upload = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.upload, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.groupParent, styles.groupParentFlexBox]}>
            <View style={styles.frameWrapper}>
              <View style={[styles.groupContainer, styles.groupParentFlexBox]}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/group-2.png")}
                />
                <Text style={styles.lashy}>LASHY</Text>
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
              <View style={[styles.frameParent1, styles.frameParentLayout]}>
                <View style={[styles.uploadParent, styles.frameParentBorder]}>
                  <Text style={styles.upload1}>{`upload `}</Text>
                  <Image
                    style={styles.uploadIcon}
                    resizeMode="cover"
                    source={require("../assets/upload1.png")}
                  />
                </View>
                <View style={[styles.frameParent2, styles.frameParentBorder]}>
                  <View style={[styles.frameItem, styles.frameParentBorder]} />
                  <View style={[styles.submitWrapper, styles.wrapperLayout]}>
                    <Text style={[styles.submit, styles.submitTypo]}>
                      Submit
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameParent3, styles.frameParentLayout]}>
              <View style={styles.frameParent4}>
                <View style={[styles.courseNameWrapper, styles.wrapperBorder]}>
                  <Text
                    style={[styles.courseName, styles.submitTypo]}
                  >{`course name `}</Text>
                </View>
                <View
                  style={[
                    styles.descriptionoptionalWrapper,
                    styles.wrapperBorder,
                  ]}
                >
                  <Text style={[styles.courseName, styles.submitTypo]}>
                    description(optional)
                  </Text>
                </View>
              </View>
              <View style={[styles.createWrapper, styles.wrapperLayout]}>
                <Text style={[styles.submit, styles.submitTypo]}>Create</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent5, styles.groupParentFlexBox]}>
          <View style={styles.plusParent}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus1.png")}
            />
            <Text style={styles.create1Typo}>Create</Text>
          </View>
          <View style={[styles.homeParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home1.png")}
            />
            <Text style={styles.create1Typo}>Home</Text>
          </View>
          <View style={[styles.bookReaderParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader2.png")}
            />
            <Text style={[styles.library, styles.create1Typo]}>Library</Text>
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
  frameParentLayout: {
    width: 350,
    alignItems: "center",
  },
  frameParentBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_xl,
  },
  wrapperLayout: {
    padding: Padding.p_2xs,
    height: 49,
    width: 122,
    backgroundColor: Color.gREEN,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  submitTypo: {
    fontSize: FontSize.size_base,
    color: Color.bLACK,
    textAlign: "center",
  },
  wrapperBorder: {
    paddingVertical: Padding.p_6xs,
    borderRadius: Border.br_31xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  parentSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  create1Typo: {
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
    color: Color.colorBlack,
    width: 79,
    height: 23,
    marginLeft: -15,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  groupContainer: {
    top: 0,
    left: 0,
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
    alignItems: "center",
    alignSelf: "stretch",
  },
  upload1: {
    fontSize: 15,
    width: 68,
    height: 20,
    color: Color.bLACK,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  uploadIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  uploadParent: {
    width: 114,
    paddingHorizontal: Padding.p_3xs,
    height: 50,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    alignItems: "center",
    backgroundColor: Color.colorGray_100,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
  },
  frameItem: {
    borderStyle: "dashed",
    width: 318,
    height: 193,
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  submit: {
    fontFamily: FontFamily.interRegular,
  },
  submitWrapper: {
    marginTop: 10,
  },
  frameParent2: {
    height: 268,
    padding: Padding.p_6xs,
    marginTop: 10,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  frameParent1: {
    height: 328,
  },
  frameView: {
    height: 336,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_xl,
    alignItems: "center",
    alignSelf: "stretch",
  },
  courseName: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
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
  frameParent4: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  createWrapper: {
    marginTop: 50,
  },
  frameParent3: {
    marginTop: 26,
  },
  frameContainer: {
    marginTop: 40,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameGroup: {
    height: 631,
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
    justifyContent: "center",
    alignItems: "center",
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
  frameParent5: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 36,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: -394,
    marginLeft: -180,
    top: "50%",
    left: "50%",
    width: 360,
    height: 789,
    position: "absolute",
  },
  upload: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Upload;
