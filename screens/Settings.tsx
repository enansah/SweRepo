import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settings, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.groupParent, styles.groupFlexBox]}>
            <View style={styles.frameWrapper}>
              <View style={[styles.groupContainer, styles.groupFlexBox]}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/group-24.png")}
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
                source={require("../assets/whmcs2.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameContainer}>
            <Pressable
              style={styles.frameLayout}
              onPress={() => navigation.navigate("Library")}
            >
              <View style={[styles.eyeParent, styles.parentLayout]}>
                <Image
                  style={styles.eyeIcon}
                  resizeMode="cover"
                  source={require("../assets/eye.png")}
                />
                <Text style={styles.viewCourses}>view courses</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.frameWrapper1, styles.frameLayout]}
              onPress={() => navigation.navigate("Upload")}
            >
              <View style={styles.parentLayout}>
                <Image
                  style={styles.eyeIcon}
                  resizeMode="cover"
                  source={require("../assets/upload.png")}
                />
                <Text style={styles.viewCourses}>{`sync
notebook`}</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.frameWrapper1, styles.frameLayout]}
              onPress={() => navigation.navigate("Notification1")}
            >
              <View style={styles.parentLayout}>
                <Image
                  style={styles.eyeIcon}
                  resizeMode="cover"
                  source={require("../assets/bell.png")}
                />
                <Text style={styles.viewCourses}>{`notifications `}</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.frameWrapper1, styles.frameLayout]}
              onPress={() => navigation.navigate("HelpDesk")}
            >
              <View style={styles.parentLayout}>
                <Image
                  style={styles.eyeIcon}
                  resizeMode="cover"
                  source={require("../assets/handshelping.png")}
                />
                <Text style={styles.viewCourses}>help desk</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.frameView}>
          <View style={styles.plusParent}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus5.png")}
            />
            <Text style={styles.createTypo}>Create</Text>
          </View>
          <View style={[styles.homeParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home4.png")}
            />
            <Text style={styles.createTypo}>Home</Text>
          </View>
          <View style={[styles.bookReaderParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader4.png")}
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
  groupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  parentLayout: {
    width: 134,
    alignItems: "center",
  },
  frameLayout: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_6xs,
    height: 109,
    width: 148,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
  },
  parentSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  createTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.white,
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
  eyeIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  viewCourses: {
    fontSize: FontSize.size_base,
    color: Color.white,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    height: 40,
    alignSelf: "stretch",
    alignItems: "center",
  },
  eyeParent: {
    justifyContent: "center",
  },
  frameWrapper1: {
    marginTop: 30,
  },
  frameContainer: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    marginTop: 40,
    borderRadius: Border.br_xl,
    justifyContent: "center",
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
  frameView: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 53,
    backgroundColor: Color.colorBlack,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    marginTop: -395.5,
    marginLeft: -180,
    top: "50%",
    left: "50%",
    width: 360,
    alignItems: "center",
    position: "absolute",
  },
  settings: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Settings;
