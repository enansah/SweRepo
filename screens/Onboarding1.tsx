import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding3, styles.onboarding3Layout]}>
      <View style={styles.frameParent}>
        <View style={styles.untitledDesign91Parent}>
          <Image
            style={[styles.untitledDesign91, styles.onboarding3Layout]}
            resizeMode="cover"
            source={require("../assets/untitled-design9-1.png")}
          />
          <Text style={[styles.ownYourNotebook, styles.next1FlexBox]}>
            Own your notebook on Flashy
          </Text>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.frameGroupFlexBox}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
          </View>
          <View style={[styles.nextWrapper, styles.frameGroupFlexBox]}>
            <Pressable
              onPress={() => navigation.navigate("SyncNotesAppOnboarding")}
            >
              <Text style={[styles.next1, styles.next1FlexBox]}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding3Layout: {
    overflow: "hidden",
    width: "100%",
  },
  next1FlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  frameGroupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameLayout: {
    height: 26,
    width: 24,
  },
  untitledDesign91: {
    maxWidth: "100%",
    height: 321,
    alignSelf: "stretch",
  },
  ownYourNotebook: {
    fontSize: FontSize.size_13xl,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    display: "flex",
    height: 100,
    marginTop: 21,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  untitledDesign91Parent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameItem: {
    marginLeft: 10,
  },
  next1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  nextWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gREEN,
    width: 122,
    height: 49,
    padding: Padding.p_2xs,
    justifyContent: "center",
  },
  frameGroup: {
    width: 353,
    justifyContent: "space-between",
    marginTop: 45,
  },
  frameParent: {
    position: "absolute",
    top: 154,
    left: 0,
    width: 390,
    alignItems: "center",
  },
  onboarding3: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
  },
});

export default Onboarding1;
