import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CreatePassword = () => {
  return (
    <View style={styles.createPassword}>
      <View style={styles.frameParent}>
        <View style={styles.createPasswordParent}>
          <Text style={[styles.createPassword1, styles.passwordFlexBox]}>
            CREATE PASSWORD
          </Text>
          <View style={[styles.frameGroup, styles.passwordFlexBox]}>
            <View style={styles.passwordWrapperBorder}>
              <Text style={[styles.newPassword, styles.passwordFlexBox]}>
                new password
              </Text>
            </View>
            <View
              style={[
                styles.verifyPasswordWrapper,
                styles.passwordWrapperBorder,
              ]}
            >
              <Text style={[styles.newPassword, styles.passwordFlexBox]}>
                verify password
              </Text>
            </View>
          </View>
        </View>
        <Pressable style={styles.createWrapper} crr="Create">
          <Text style={styles.create}>Create</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  passwordWrapperBorder: {
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
  createPassword1: {
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "stretch",
  },
  newPassword: {
    fontSize: FontSize.size_6xl,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 305,
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
  },
  verifyPasswordWrapper: {
    marginTop: 21,
  },
  frameGroup: {
    marginTop: 40,
    alignSelf: "stretch",
  },
  createPasswordParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  create: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "center",
  },
  createWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorBlack,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    marginTop: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    marginTop: -152,
    marginLeft: -163,
    top: "50%",
    left: "50%",
    width: 326,
    alignItems: "center",
  },
  createPassword: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default CreatePassword;
