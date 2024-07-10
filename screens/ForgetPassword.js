import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const ForgetPassword = () => {
  return (
    <View style={styles.forgetPassword}>
      <View style={styles.frameParent}>
        <View style={styles.forgetPasswordParent}>
          <Text style={[styles.forgetPassword1, styles.frameGroupFlexBox]}>
            FORGET PASSWORD?
          </Text>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.enterEmailWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.enterEmail, styles.enterEmailTypo]}>
                enter email
              </Text>
            </View>
            <Text style={[styles.aPasswordReset, styles.enterEmailTypo]}>
              A password reset link will be sent to the associate email.
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.continueWrapper, styles.wrapperFlexBox]}
          c2="Continue"
        >
          <Text style={styles.continue}>Continue</Text>
        </Pressable>
      </View>
      <Image
        style={styles.forgetPasswordChild}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  wrapperFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  enterEmailTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    alignItems: "center",
  },
  forgetPassword1: {
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
  },
  enterEmail: {
    fontSize: FontSize.size_6xl,
    width: 305,
  },
  enterEmailWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 46,
    paddingHorizontal: 22,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
  },
  aPasswordReset: {
    fontSize: FontSize.size_xl,
    height: 52,
    marginTop: 21,
    alignSelf: "stretch",
  },
  frameGroup: {
    marginTop: 40,
  },
  forgetPasswordParent: {
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
    marginTop: 33,
  },
  frameParent: {
    marginTop: -147,
    marginLeft: -165,
    top: "50%",
    left: "50%",
    width: 331,
    alignItems: "center",
    position: "absolute",
  },
  forgetPasswordChild: {
    top: 27,
    left: 23,
    width: 20,
    height: 20,
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
