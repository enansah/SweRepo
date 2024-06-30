import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View
              style={[styles.notificationWrapper, styles.plusParentFlexBox]}
            >
              <Text style={styles.notification1}>notification</Text>
            </View>
            <View style={styles.whmcsWrapper}>
              <Pressable
                style={styles.whmcs}
                onPress={() => navigation.navigate("Settings")}
              >
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.frameView}>
              <View style={[styles.frameChild, styles.framePosition]} />
            </View>
          </View>
        </View>
        <View style={styles.frameParent1}>
          <View style={[styles.plusParent, styles.plusParentFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus4.png")}
            />
            <Text style={styles.createTypo}>Create</Text>
          </View>
          <View style={[styles.homeParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home3.png")}
            />
            <Text style={styles.createTypo}>Home</Text>
          </View>
          <View style={[styles.bookReaderParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader3.png")}
            />
            <Text style={[styles.library, styles.createTypo]}>Library</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    position: "absolute",
    alignItems: "center",
  },
  plusParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  createTypo: {
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    alignSelf: "stretch",
  },
  notification1: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
    display: "flex",
    width: 148,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationWrapper: {
    width: 143,
    flexDirection: "row",
  },
  vectorIcon: {
    width: 35,
    height: 35,
  },
  whmcs: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    paddingHorizontal: 3,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  whmcsWrapper: {
    width: 61,
    padding: Padding.p_3xs,
  },
  frameContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameChild: {
    top: 10,
    left: 10,
    width: 320,
    height: 558,
    zIndex: 0,
    alignItems: "center",
  },
  frameView: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 0.5,
    width: 340,
    height: 578,
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    marginTop: 11,
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  plusParent: {
    width: 89,
  },
  homeParent: {
    width: 97,
  },
  library: {
    marginTop: 2,
  },
  bookReaderParent: {
    width: 95,
  },
  frameParent1: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    top: 18,
    left: 14,
    width: 363,
    alignItems: "center",
  },
  notification: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Notification1;
