import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signUp, styles.iconLayout]}>
      <View style={styles.arrowLeftParent}>
        <Pressable
          style={styles.eyeIconLayout}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={styles.welcomeToParent}>
            <Text
              style={[styles.welcomeTo, styles.signUp1FlexBox]}
            >{`Welcome to ..... `}</Text>
            <View style={[styles.groupParent, styles.frameFlexBox1]}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-24.png")}
              />
              <Text style={styles.lashy}>LASHY</Text>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.parentFlexBox}>
              <Text style={[styles.signUp1, styles.signUp1FlexBox]}>
                SIGN UP!
              </Text>
              <View style={styles.frameContainer}>
                <TextInput
                  style={[styles.frameItem, styles.frameBorder]}
                  placeholder="Enter email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor="#000"
                />
                <View style={styles.frameFlexBox}>
                  <TextInput
                    style={[styles.frameInner, styles.frameBorder]}
                    placeholder="Enter password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholderTextColor="#000"
                    passwordRules="true"
                  />
                  <Image
                    style={[styles.eyeIcon, styles.eyeIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/eye.png")}
                  />
                </View>
                <View style={styles.frameFlexBox}>
                  <TextInput
                    style={[styles.frameInner, styles.frameBorder]}
                    placeholder="Confirm password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholderTextColor="#000"
                    passwordRules="true"
                  />
                  <Image
                    style={[styles.eyeIcon, styles.eyeIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/eye.png")}
                  />
                </View>
                <TextInput
                  style={[styles.frameChild1, styles.frameFlexBox]}
                  placeholder="mobile #"
                  keyboardType="number-pad"
                  autoCapitalize="none"
                  placeholderTextColor="#000"
                  maxLength={10}
                />
              </View>
            </View>
            <View style={styles.frameParent2}>
              <Pressable
                style={[styles.signUpWrapper, styles.wrapperFlexBox]}
                cont="Continue"
              >
                <Text style={[styles.signUp2, styles.loginTypo]}>Sign up</Text>
              </Pressable>
              <Pressable
                style={[styles.loginWrapper, styles.wrapperFlexBox]}
                cont="Continue"
              >
                <Text style={[styles.login, styles.loginTypo]}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  signUp1FlexBox: {
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    alignItems: "center",
    justifyContent: "center",
  },
  frameFlexBox1: {
    flexDirection: "row",
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
    fontSize: FontSize.size_xl,
    justifyContent: "center",
  },
  eyeIconLayout: {
    height: 25,
    width: 25,
  },
  frameFlexBox: {
    marginTop: 21,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    padding: Padding.p_2xs,
    height: 49,
    borderRadius: Border.br_31xl,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  loginTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  welcomeTo: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    width: 178,
  },
  frameChild: {
    width: 62,
    height: 51,
  },
  lashy: {
    width: 75,
    height: 38,
    marginLeft: -15,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    alignItems: "center",
    justifyContent: "center",
  },
  groupParent: {
    height: 77,
    marginTop: -15,
    width: 122,
  },
  welcomeToParent: {
    width: 178,
    alignItems: "center",
  },
  signUp1: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansPro,
    height: 54,
    alignSelf: "stretch",
  },
  frameItem: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameInner: {
    width: 275,
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: 5,
    overflow: "hidden",
  },
  frameChild1: {
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
    fontSize: FontSize.size_xl,
    justifyContent: "center",
  },
  frameContainer: {
    marginTop: 42,
    alignSelf: "stretch",
  },
  signUp2: {
    color: Color.white,
  },
  signUpWrapper: {
    backgroundColor: Color.colorBlack,
  },
  login: {
    color: Color.bLACK,
  },
  loginWrapper: {
    backgroundColor: Color.gREEN,
    marginTop: 20,
  },
  frameParent2: {
    marginTop: 42,
    width: 122,
  },
  frameGroup: {
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_xl,
    marginTop: 19,
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 46,
  },
  arrowLeftParent: {
    position: "absolute",
    marginLeft: -163,
    top: 27,
    left: "50%",
    width: 326,
    justifyContent: "center",
  },
  signUp: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default SignUp;