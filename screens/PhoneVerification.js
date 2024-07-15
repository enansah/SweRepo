import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const PhoneVerification = () => {
  return (
    <View style={styles.phoneVerification}>
      <View style={styles.frameParent}>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-26.png")}
          />
          <Text style={[styles.lashy, styles.lashyClr]}>LASHY</Text>
        </View>
        <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
          <View style={styles.verifyParent}>
            <Text style={[styles.verify, styles.lashyClr]}>VERIFY</Text>
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <View
                style={[
                  styles.enterThe4DigitCodeWrapper,
                  styles.frameItemBorder,
                ]}
              >
                <Text style={[styles.enterThe4, styles.enterThe4Typo]}>
                  Enter the 4 digit code.
                </Text>
              </View>
              <View style={styles.frameView}>
                <View style={styles.frameParent1}>
                  <TextInput
                    style={[styles.frameItem, styles.enterThe4Typo]}
                    placeholder="0"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    placeholderTextColor="#b6b6b6"
                    maxLength={1}
                  />
                  <View style={[styles.frameInner, styles.lineViewBorder]} />
                </View>
                <View style={[styles.frameParent2, styles.frameParentFlexBox]}>
                  <TextInput
                    style={[styles.frameItem, styles.enterThe4Typo]}
                    placeholder="0"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    placeholderTextColor="#b6b6b6"
                    maxLength={1}
                  />
                  <View style={[styles.lineView, styles.lineViewBorder]} />
                </View>
                <View style={[styles.frameParent2, styles.frameParentFlexBox]}>
                  <TextInput
                    style={[styles.frameItem, styles.enterThe4Typo]}
                    placeholder="0"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    placeholderTextColor="#b6b6b6"
                    maxLength={1}
                  />
                  <View style={[styles.lineView, styles.lineViewBorder]} />
                </View>
                <View style={[styles.frameParent4, styles.frameParentFlexBox]}>
                  <TextInput
                    style={[styles.frameItem, styles.enterThe4Typo]}
                    placeholder="0"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    placeholderTextColor="#b6b6b6"
                    maxLength={1}
                  />
                  <View style={[styles.lineView, styles.lineViewBorder]} />
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.enterWrapper, styles.frameSpaceBlock]}
            c1="Enter"
          >
            <Text style={styles.enter}>Enter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    width: 122,
    flexDirection: "row",
  },
  lashyClr: {
    display: "flex",
    color: Color.colorBlack,
    textAlign: "center",
  },
  frameSpaceBlock: {
    marginTop: 38,
    alignItems: "center",
  },
  frameItemBorder: {
    backgroundColor: Color.colorGainsboro,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  enterThe4Typo: {
    fontSize: FontSize.size_13xl,
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  lineViewBorder: {
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
  frameChild: {
    width: 62,
    height: 51,
  },
  lashy: {
    fontSize: FontSize.size_xl,
    width: 75,
    height: 38,
    marginLeft: -15,
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    display: "flex",
    color: Color.colorBlack,
    alignItems: "center",
  },
  groupParent: {
    height: 77,
    flexDirection: "row",
    alignItems: "center",
  },
  verify: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  enterThe4: {
    width: 271,
    display: "flex",
    color: Color.colorBlack,
    textAlign: "center",
  },
  enterThe4DigitCodeWrapper: {
    borderRadius: Border.br_8xs,
    height: 125,
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameItem: {
    height: 52,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_7xs,
    width: 52,
    backgroundColor: Color.colorGainsboro,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frameInner: {
    marginTop: 8,
  },
  frameParent1: {
    width: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  lineView: {
    marginTop: 7,
  },
  frameParent2: {
    width: 52,
  },
  frameParent4: {
    width: 53,
  },
  frameView: {
    marginTop: 52,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer: {
    alignSelf: "stretch",
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
    height: 49,
    padding: Padding.p_2xs,
    justifyContent: "center",
    flexDirection: "row",
    width: 122,
  },
  frameGroup: {
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    marginTop: 38,
  },
  frameParent: {
    position: "absolute",
    marginTop: -285,
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