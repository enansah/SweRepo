import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const ForgetPassword = () => {
  return (
    <View style={styles.forgetPassword}>
      <Image
        style={styles.forgetPasswordChild}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-28.png")}
          />
          <Text style={[styles.lashy, styles.passwordClr]}>LASHY</Text>
        </View>
        <View style={[styles.frameGroup, styles.frameBorder]}>
          <View style={styles.frameFlexBox}>
            <Text style={[styles.forgetPassword1, styles.frameFlexBox]}>
              FORGET PASSWORD?
            </Text>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <TextInput
                style={[styles.frameItem, styles.frameItemTypo]}
                placeholder="enter email"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#000"
              />
              <Text style={[styles.aPasswordReset, styles.frameItemTypo]}>
                A password reset link will be sent to the associate email.
              </Text>
            </View>
          </View>
          <Pressable style={styles.continueWrapper} c2="Continue">
            <Text style={styles.continue}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordClr: {
    display: "flex",
    color: Color.colorBlack,
    textAlign: "center",
  },
  frameBorder: {
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frameFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameItemTypo: {
    fontSize: FontSize.size_xl,
    alignSelf: "stretch",
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  forgetPasswordChild: {
    top: 27,
    left: 23,
    width: 20,
    height: 20,
    position: "absolute",
  },
  frameChild: {
    width: 80,
    height: 88,
  },
  lashy: {
    fontSize: FontSize.size_6xl,
    width: 84,
    height: 38,
    marginLeft: -20,
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorBlack,
    alignItems: "center",
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgetPassword1: {
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    justifyContent: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "center",
  },
  frameItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    height: 46,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    flexDirection: "row",
  },
  aPasswordReset: {
    height: 52,
    marginTop: 21,
    display: "flex",
    color: Color.colorBlack,
    textAlign: "center",
  },
  frameContainer: {
    marginTop: 40,
    justifyContent: "center",
  },
  continue: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "center",
  },
  continueWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorBlack,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    marginTop: 33,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: {
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_xl,
    marginTop: 55,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    marginTop: -239,
    marginLeft: -166,
    top: "50%",
    left: "50%",
    width: 331,
    alignItems: "center",
    position: "absolute",
  },
  forgetPassword: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ForgetPassword;