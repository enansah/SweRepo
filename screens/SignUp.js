import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <View style={styles.frameParent}>
        <View style={styles.signUpParent}>
          <Text style={[styles.signUp1, styles.emailFlexBox]}>SIGN UP!</Text>
          <View style={styles.frameGroup}>
            <View style={styles.wrapperBorder}>
              <Text style={[styles.email, styles.emailFlexBox]}>email</Text>
            </View>
            <View style={[styles.usernameWrapper, styles.wrapperBorder]}>
              <Text style={[styles.email, styles.emailFlexBox]}>Username</Text>
            </View>
            <View style={[styles.usernameWrapper, styles.wrapperBorder]}>
              <Text style={[styles.email, styles.emailFlexBox]}>mobile #</Text>
            </View>
          </View>
        </View>
        <Pressable style={styles.continueWrapper} cont="Continue">
          <Text style={styles.continue}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailFlexBox: {
    justifyContent: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "center",
    alignItems: "center",
  },
  wrapperBorder: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_7xl,
    height: 46,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  signUp1: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    alignSelf: "stretch",
  },
  email: {
    fontSize: FontSize.size_6xl,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 305,
  },
  usernameWrapper: {
    marginTop: 21,
  },
  frameGroup: {
    marginTop: 42,
    alignSelf: "stretch",
  },
  signUpParent: {
    alignSelf: "stretch",
    alignItems: "center",
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
    flexDirection: "row",
    marginTop: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    marginTop: -183,
    marginLeft: -163,
    top: "50%",
    left: "50%",
    width: 326,
    alignItems: "center",
  },
  signUp: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignUp;
