import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const NewCard = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newCard4, styles.iconLayout]}>
      <View style={[styles.nav, styles.navPosition]}>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-23.png")}
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
      <View style={[styles.createnewcourseParent, styles.navPosition]}>
        <View style={[styles.createnewcourse, styles.uploadspaceBorder]}>
          <Text style={[styles.courseName, styles.uploadClr]}>course name</Text>
        </View>
        <Pressable
          style={[styles.createManuallyWrapper, styles.uploadbtnBorder]}
          onPress={() => navigation.navigate("NewCard1")}
        >
          <Text style={[styles.createManually, styles.uploadClr]}>
            create manually
          </Text>
        </Pressable>
        <View
          style={[styles.uplodcontainerWrapper, styles.uploadbtnSpaceBlock]}
        >
          <View style={styles.uplodcontainer}>
            <Pressable style={[styles.uploadbtn, styles.uploadbtnSpaceBlock]}>
              <Text style={[styles.upload, styles.uploadClr]}>{`upload `}</Text>
              <Image
                style={styles.uploadIcon}
                resizeMode="cover"
                source={require("../assets/upload.png")}
              />
            </Pressable>
            <View
              style={[styles.uploadspaceParent, styles.submitbtnSpaceBlock]}
            >
              <View style={[styles.uploadspace, styles.uploadspaceBorder]} />
              <Pressable
                style={[styles.submitbtn, styles.submitbtnSpaceBlock]}
                onPress={() => navigation.navigate("Container")}
              >
                <Text style={[styles.submit, styles.uploadClr]}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.footerbar, styles.navPosition]}>
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
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navPosition: {
    width: 351,
    left: 20,
    position: "absolute",
    alignItems: "center",
  },
  lashyFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadspaceBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_xl,
  },
  uploadClr: {
    color: Color.bLACK,
    textAlign: "center",
  },
  uploadbtnBorder: {
    backgroundColor: Color.colorGray_100,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    flexDirection: "row",
  },
  uploadbtnSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  submitbtnSpaceBlock: {
    marginTop: 10,
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
    alignSelf: "stretch",
    textAlign: "center",
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
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  groupParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  nav: {
    top: 28,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 41,
  },
  courseName: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    width: 248,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    height: 41,
  },
  createnewcourse: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 107,
    paddingHorizontal: Padding.p_4xl,
    paddingTop: 77,
    paddingBottom: Padding.p_68xl,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderRadius: Border.br_xl,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  createManually: {
    fontSize: FontSize.size_6xl,
    height: 67,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.bLACK,
    flex: 1,
  },
  createManuallyWrapper: {
    borderRadius: Border.br_8xs,
    width: 196,
    height: 81,
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: Padding.p_6xs,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  upload: {
    fontSize: FontSize.size_mini,
    width: 68,
    height: 20,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.bLACK,
  },
  uploadIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  uploadbtn: {
    width: 114,
    paddingHorizontal: Padding.p_3xs,
    height: 50,
    backgroundColor: Color.colorGray_100,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    flexDirection: "row",
  },
  uploadspace: {
    borderStyle: "dashed",
    width: 318,
    height: 193,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  submit: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  submitbtn: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gREEN,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  uploadspaceParent: {
    height: 268,
    paddingHorizontal: Padding.p_6xs,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_6xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  uplodcontainer: {
    width: 350,
    height: 328,
    alignItems: "center",
  },
  uplodcontainerWrapper: {
    height: 336,
    paddingHorizontal: 0,
    marginTop: 20,
    alignSelf: "stretch",
    paddingVertical: Padding.p_8xs,
  },
  createnewcourseParent: {
    top: 99,
    height: 563,
    alignItems: "center",
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
    alignSelf: "stretch",
    textAlign: "center",
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
    top: 693,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  newCard4: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default NewCard;