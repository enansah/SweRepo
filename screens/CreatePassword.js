import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const CreatePassword = () => {
  return (
    <View style={styles.createPassword}>
      <View style={styles.frameParent}>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-25.png")}
          />
          <Text style={[styles.lashy, styles.lashyFlexBox]}>LASHY</Text>
        </View>
        <View style={[styles.frameGroup, styles.frameBorder]}>
          <View style={styles.createPasswordParent}>
            <Text style={[styles.createPassword1, styles.lashyFlexBox]}>
              CREATE PASSWORD
            </Text>
            <View style={styles.frameContainer}>
              <View style={styles.frameView}>
                <TextInput
                  style={[styles.frameItem, styles.frameBorder]}
                  placeholder="new password"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholderTextColor="#000"
                  passwordRules="true"
                />
                <Image
                  style={styles.eyeIcon}
                  resizeMode="cover"
                  source={require("../assets/eye1.png")}
                />
              </View>
              <View style={styles.frameParent1}>
                <TextInput
                  style={[styles.frameItem, styles.frameBorder]}
                  placeholder="verify password"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholderTextColor="#000"
                  passwordRules="true"
                />
                <Image
                  style={styles.eyeIcon}
                  resizeMode="cover"
                  source={require("../assets/eye1.png")}
                />
              </View>
            </View>
          </View>
          <Pressable style={styles.createWrapper} crr="Create">
            <Text style={styles.create}>Create</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lashyFlexBox: {
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  frameBorder: {
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignItems: "center",
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
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  createPassword1: {
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    width: 275,
    height: 46,
    paddingVertical: Padding.p_6xs,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    flexDirection: "row",
  },
  eyeIcon: {
    width: 25,
    height: 25,
    marginLeft: 5,
    overflow: "hidden",
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent1: {
    marginTop: 21,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer: {
    marginTop: 40,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: {
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_xl,
    marginTop: 50,
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginTop: -241,
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