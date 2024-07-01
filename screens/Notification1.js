import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <ImageBackground
        style={[styles.frameParent, styles.frameParentPosition]}
        resizeMode="cover"
        source={require("../assets/frame122.png")}
      >
        <View style={styles.navParent}>
          <View style={styles.nav}>
            <View
              style={[styles.notificationWrapper, styles.createcardbtnFlexBox]}
            >
              <Text style={[styles.notification1, styles.notification1Typo]}>
                notification
              </Text>
            </View>
            <View style={styles.settingsbtn}>
              <Pressable
                style={styles.whmcs}
                onPress={() => navigation.navigate("Settings")}
              >
                <Image
                  style={styles.widgetbtnIcon}
                  resizeMode="cover"
                  source={require("../assets/widgetbtn.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.noticecontainerWrapper}>
            <View style={styles.noticecontainer}>
              <View
                style={[
                  styles.notificationsHereWrapper,
                  styles.frameParentPosition,
                ]}
              >
                <Text
                  style={[styles.notificationsHere, styles.notification1Typo]}
                >
                  notifications here
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footerbar}>
          <View style={[styles.createcardbtn, styles.createcardbtnFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus6.png")}
            />
            <Text style={styles.createTypo}>Create</Text>
          </View>
          <View style={[styles.homebtn, styles.homebtnSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home6.png")}
            />
            <Text style={styles.createTypo}>Home</Text>
          </View>
          <View style={[styles.librarybtn, styles.homebtnSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader7.png")}
            />
            <Text style={[styles.library, styles.createTypo]}>Library</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    position: "absolute",
    alignItems: "center",
  },
  createcardbtnFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  notification1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  createTypo: {
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    alignSelf: "stretch",
  },
  notification1: {
    display: "flex",
    width: 148,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationWrapper: {
    width: 143,
    flexDirection: "row",
  },
  widgetbtnIcon: {
    width: 35,
    height: 35,
  },
  whmcs: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    paddingHorizontal: 3,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  settingsbtn: {
    width: 61,
    padding: Padding.p_3xs,
  },
  nav: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  notificationsHere: {
    fontSize: FontSize.size_base,
  },
  notificationsHereWrapper: {
    top: 10,
    left: 10,
    width: 320,
    height: 558,
    zIndex: 0,
    alignItems: "center",
  },
  noticecontainer: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 0.5,
    width: 340,
    height: 578,
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  noticecontainerWrapper: {
    marginTop: 11,
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  navParent: {
    alignSelf: "stretch",
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
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
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -175,
    top: 18,
    left: "50%",
    alignItems: "center",
  },
  notification: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Notification1;
