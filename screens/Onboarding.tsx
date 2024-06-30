import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding2, styles.onboarding2Layout]}>
      <View style={styles.frameParent}>
        <View style={styles.untitledDesign81Parent}>
          <Image
            style={[styles.untitledDesign81, styles.onboarding2Layout]}
            resizeMode="cover"
            source={require("../assets/untitled-design8-1.png")}
          />
          <View
            style={[
              styles.coordinateYourNotebookOnFlWrapper,
              styles.wrapperFlexBox,
            ]}
          >
            <Text style={[styles.coordinateYourNotebook, styles.next1FlexBox]}>
              Coordinate your notebook on Flashy
            </Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.frameGroupFlexBox}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          </View>
          <View style={[styles.nextWrapper, styles.wrapperFlexBox]}>
            <Pressable onPress={() => navigation.navigate("Onboarding1")}>
              <Text style={[styles.next1, styles.next1FlexBox]}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding2Layout: {
    overflow: "hidden",
    width: "100%",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  next1FlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    height: 26,
    width: 24,
  },
  untitledDesign81: {
    maxWidth: "100%",
    height: 324,
    alignSelf: "stretch",
  },
  coordinateYourNotebook: {
    fontSize: FontSize.size_13xl,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    display: "flex",
    width: 360,
    justifyContent: "center",
    alignItems: "center",
  },
  coordinateYourNotebookOnFlWrapper: {
    padding: Padding.p_3xs,
    marginTop: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  untitledDesign81Parent: {
    alignSelf: "stretch",
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
    flexDirection: "row",
    justifyContent: "center",
  },
  frameGroup: {
    justifyContent: "space-between",
    marginTop: 59,
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    top: 151,
    left: 20,
    width: 350,
  },
  onboarding2: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
  },
});

export default Onboarding;
