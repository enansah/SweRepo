import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginScreen}>
      <View style={styles.frameParent}>
        <View style={styles.welcomeToParent}>
          <Text
            style={[styles.welcomeTo, styles.lashyFlexBox]}
          >{`Welcome to ..... `}</Text>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-27.png")}
            />
            <Text style={[styles.lashy, styles.lashyTypo]}>LASHY</Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
          <View style={styles.loginParent}>
            <Text style={[styles.login, styles.lashyFlexBox]}>LOGIN</Text>
            <View style={styles.frameContainer}>
              <View style={styles.frameView}>
                <View style={styles.emailParent}>
                  <Text style={[styles.email, styles.lashyTypo]}> Email</Text>
                  <TextInput
                    style={[styles.frameItem, styles.frameBorder]}
                    placeholder="Enter email"
                    keyboardType="email-address"
                    placeholderTextColor="#000"
                  />
                </View>
                <View style={styles.passwordParent}>
                  <Text style={[styles.email, styles.lashyTypo]}>
                    {" "}
                    Password
                  </Text>
                  <View style={styles.frameParent1}>
                    <TextInput
                      style={[styles.frameInner, styles.frameBorder]}
                      placeholder="Enter password"
                      secureTextEntry={true}
                      placeholderTextColor="#000"
                      passwordRules="true"
                    />
                    <Image
                      style={styles.eyeIcon}
                      resizeMode="cover"
                      source={require("../assets/eye2.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.frameParent2}>
                <View style={styles.forgetPasswordParent}>
                  <Pressable
                    style={styles.forgetPassword}
                    onPress={() => navigation.navigate("ForgetPassword")}
                  >
                    <Image
                      style={styles.icon}
                      resizeMode="cover"
                      source={require("../assets/forget-password.png")}
                    />
                  </Pressable>
                  <View style={[styles.lineView, styles.lineViewBorder]} />
                </View>
                <View style={styles.createAnAccountParent}>
                  <Pressable onPress={() => navigation.navigate("SignUp")}>
                    <Text style={[styles.createAnAccount, styles.lashyTypo]}>
                      create an account
                    </Text>
                  </Pressable>
                  <View style={[styles.frameChild1, styles.lineViewBorder]} />
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.loginWrapper, styles.frameGroupSpaceBlock]}
            continue="Login"
          >
            <Text style={styles.login1}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lashyFlexBox: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  groupParentLayout: {
    width: 122,
    flexDirection: "row",
  },
  lashyTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  frameGroupSpaceBlock: {
    marginTop: 40,
    alignItems: "center",
  },
  frameBorder: {
    paddingVertical: Padding.p_6xs,
    height: 46,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: FontSize.size_xl,
    alignItems: "center",
  },
  lineViewBorder: {
    height: 2,
    borderTopWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  welcomeTo: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    justifyContent: "center",
    color: Color.colorBlack,
    display: "flex",
    fontSize: FontSize.size_xl,
    width: 153,
  },
  frameChild: {
    width: 62,
    height: 51,
  },
  lashy: {
    width: 75,
    height: 38,
    marginLeft: -15,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  groupParent: {
    height: 77,
    marginTop: -15,
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeToParent: {
    width: 153,
    alignItems: "center",
  },
  login: {
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    alignSelf: "stretch",
    justifyContent: "center",
    color: Color.colorBlack,
    display: "flex",
  },
  email: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  frameItem: {
    alignSelf: "stretch",
  },
  emailParent: {
    width: 315,
  },
  frameInner: {
    width: 275,
  },
  eyeIcon: {
    width: 25,
    height: 25,
    marginLeft: 5,
    overflow: "hidden",
  },
  frameParent1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordParent: {
    width: 307,
    marginTop: 21,
  },
  frameView: {
    height: 167,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  forgetPassword: {
    width: 160,
    height: 20,
  },
  lineView: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  forgetPasswordParent: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  createAnAccount: {
    height: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  frameChild1: {
    width: 169,
    marginTop: 6,
  },
  createAnAccountParent: {
    marginTop: 12,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent2: {
    width: 173,
    marginTop: 43,
    alignItems: "center",
  },
  frameContainer: {
    marginTop: 15,
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginParent: {
    height: 369,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  login1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "center",
  },
  loginWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorBlack,
    height: 49,
    padding: Padding.p_2xs,
    flexDirection: "row",
    width: 122,
    justifyContent: "center",
  },
  frameGroup: {
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    marginTop: 40,
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginTop: -312,
    marginLeft: -168,
    top: "50%",
    left: "50%",
    width: 335,
    alignItems: "center",
  },
  loginScreen: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginScreen;