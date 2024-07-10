import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginScreen}>
      <View style={styles.frameParent}>
        <View style={styles.loginParent}>
          <Text style={styles.login}>LOGIN</Text>
          <View style={styles.frameGroup}>
            <View style={styles.loginParent}>
              <View style={styles.wrapperBorder}>
                <Text style={[styles.email, styles.emailTypo]}>email</Text>
              </View>
              <View style={[styles.passwordWrapper, styles.wrapperBorder]}>
                <Text style={[styles.email, styles.emailTypo]}>password</Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.loginParent}>
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
                <View style={[styles.frameChild, styles.frameBorder]} />
              </View>
              <View style={styles.createAnAccountParent}>
                <Pressable onPress={() => navigation.navigate("SignUp")}>
                  <Text style={[styles.createAnAccount, styles.emailTypo]}>
                    create an account
                  </Text>
                </Pressable>
                <View style={[styles.frameItem, styles.frameBorder]} />
              </View>
            </View>
          </View>
        </View>
        <StatusBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperBorder: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_8xl,
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
  frameBorder: {
    height: 2,
    borderTopWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  login: {
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  email: {
    fontSize: FontSize.size_6xl,
    width: 305,
  },
  passwordWrapper: {
    marginTop: 21,
  },
  loginParent: {
    justifyContent: "center",
    alignSelf: "stretch",
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
  frameChild: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  createAnAccount: {
    fontSize: FontSize.size_xl,
    height: 20,
    alignSelf: "stretch",
  },
  frameItem: {
    width: 169,
    marginTop: 6,
  },
  createAnAccountParent: {
    marginTop: 12,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameView: {
    width: 173,
    marginTop: 20,
    alignItems: "center",
  },
  frameGroup: {
    marginTop: 21,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    marginTop: -179,
    marginLeft: -167,
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
