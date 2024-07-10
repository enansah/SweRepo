import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const PhoneVerification = () => {
  return (
    <View style={styles.phoneVerification}>
      <View style={styles.frameParent}>
        <View style={styles.verifyParent}>
          <Text style={[styles.verify, styles.verifyFlexBox]}>VERIFY</Text>
          <View style={styles.frameGroup}>
            <View
              style={[
                styles.enterThe4DigitCodeWrapper,
                styles.enterWrapperFlexBox,
              ]}
            >
              <Text style={[styles.enterThe4, styles.textTypo]}>
                Enter the 4 digit code.
              </Text>
            </View>
            <View style={[styles.frameContainer, styles.enterWrapperFlexBox]}>
              <View style={[styles.frameView, styles.verifyFlexBox]}>
                <View style={[styles.wrapper, styles.wrapperBorder]}>
                  <Text style={[styles.text, styles.textTypo]}>0</Text>
                </View>
                <View style={[styles.frameChild, styles.frameBorder]} />
              </View>
              <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
                <View style={[styles.wrapper, styles.wrapperBorder]}>
                  <Text style={[styles.text, styles.textTypo]}>0</Text>
                </View>
                <View style={[styles.frameItem, styles.frameBorder]} />
              </View>
              <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
                <View style={[styles.wrapper, styles.wrapperBorder]}>
                  <Text style={[styles.text, styles.textTypo]}>0</Text>
                </View>
                <View style={[styles.frameItem, styles.frameBorder]} />
              </View>
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
                <View style={[styles.wrapper, styles.wrapperBorder]}>
                  <Text style={[styles.text, styles.textTypo]}>0</Text>
                </View>
                <View style={[styles.frameItem, styles.frameBorder]} />
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.enterWrapper, styles.enterWrapperFlexBox]}
          c1="Enter"
        >
          <Text style={styles.enter}>Enter</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  verifyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  enterWrapperFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_13xl,
    textAlign: "center",
  },
  wrapperBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
  },
  frameBorder: {
    height: 3,
    borderTopWidth: 3,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  frameParentFlexBox: {
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  verify: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "stretch",
  },
  enterThe4: {
    width: 271,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
  },
  enterThe4DigitCodeWrapper: {
    borderRadius: Border.br_8xs,
    height: 125,
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: Padding.p_xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    alignSelf: "stretch",
  },
  text: {
    color: Color.colorSilver_200,
  },
  wrapper: {
    height: 52,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_7xs,
    width: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    marginTop: 8,
  },
  frameView: {
    width: 52,
  },
  frameItem: {
    marginTop: 7,
  },
  frameParent1: {
    width: 52,
  },
  frameParent3: {
    width: 53,
  },
  frameContainer: {
    marginTop: 52,
  },
  frameGroup: {
    marginTop: 38,
    alignSelf: "stretch",
    alignItems: "center",
  },
  verifyParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  enter: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "center",
  },
  enterWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorBlack,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    marginTop: 38,
  },
  frameParent: {
    position: "absolute",
    marginTop: -208,
    marginLeft: -163,
    top: "50%",
    left: "50%",
    width: 326,
    alignItems: "center",
  },
  phoneVerification: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PhoneVerification;
