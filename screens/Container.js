import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SharePop from "../components/SharePop";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Container = () => {
  const [shareBtnContainerVisible, setShareBtnContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openShareBtnContainer = useCallback(() => {
    setShareBtnContainerVisible(true);
  }, []);

  const closeShareBtnContainer = useCallback(() => {
    setShareBtnContainerVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.container, styles.iconLayout]}>
        <View style={styles.frameParent}>
          <View style={styles.navParent}>
            <View style={styles.nav}>
              <View style={styles.groupParent}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/group-210.png")}
                />
                <Text style={[styles.lashy, styles.lashyFlexBox]}>LASHY</Text>
              </View>
              <Pressable
                style={styles.frameChild}
                onPress={() => navigation.navigate("Settings")}
              >
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/settingsbtn2.png")}
                />
              </Pressable>
            </View>
            <View style={styles.cardnameParent}>
              <View style={styles.groupParent}>
                <Pressable
                  style={styles.sharebtn}
                  onPress={openShareBtnContainer}
                >
                  <Text style={[styles.share, styles.shareTypo]}>Share</Text>
                </Pressable>
              </View>
              <View style={styles.card1Parent}>
                <View style={styles.cardBorder}>
                  <Text style={[styles.cardContent, styles.shareTypo]}>
                    Card content
                  </Text>
                </View>
                <View style={[styles.card11, styles.cardBorder]}>
                  <Text style={[styles.cardContent, styles.shareTypo]}>
                    Card content
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.footerbar, styles.footerbarFlexBox]}>
            <Pressable
              style={[styles.createcardbtn, styles.footerbarFlexBox]}
              onPress={() => navigation.navigate("Create")}
            >
              <Image
                style={styles.plusIcon}
                resizeMode="cover"
                source={require("../assets/plus5.png")}
              />
              <Text style={[styles.create, styles.createTypo]}>Create</Text>
            </Pressable>
            <Pressable
              style={[styles.homebtn, styles.homebtnSpaceBlock]}
              onPress={() => navigation.navigate("Homepage")}
            >
              <Image
                style={styles.plusIcon}
                resizeMode="cover"
                source={require("../assets/home5.png")}
              />
              <Text style={[styles.create, styles.createTypo]}>Home</Text>
            </Pressable>
            <View style={[styles.librarybtn, styles.homebtnSpaceBlock]}>
              <Image
                style={styles.plusIcon}
                resizeMode="cover"
                source={require("../assets/bookreader4.png")}
              />
              <Text style={[styles.library, styles.createTypo]}>Library</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={shareBtnContainerVisible}
      >
        <View style={styles.shareBtnContainerOverlay}>
          <Pressable
            style={styles.shareBtnContainerBg}
            onPress={closeShareBtnContainer}
          />
          <SharePop onClose={closeShareBtnContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  lashyFlexBox: {
    width: 70,
    textAlign: "center",
    justifyContent: "center",
  },
  shareTypo: {
    fontSize: FontSize.size_xl,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  cardBorder: {
    padding: Padding.p_8xs,
    height: 187,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  footerbarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  createTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  homebtnSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  lashy: {
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    height: 23,
    marginLeft: -15,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    width: 70,
    textAlign: "center",
    alignItems: "center",
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  nav: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  shareBtnContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  shareBtnContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  share: {
    color: Color.bLACK,
    height: 27,
    width: 70,
    textAlign: "center",
    justifyContent: "center",
    fontSize: FontSize.size_xl,
  },
  sharebtn: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gREEN,
    width: 81,
    height: 41,
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: Padding.p_6xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  cardContent: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    height: 20,
    alignSelf: "stretch",
  },
  card11: {
    marginTop: 10,
  },
  card1Parent: {
    marginTop: 17,
    alignSelf: "stretch",
  },
  cardnameParent: {
    height: 558,
    marginTop: 40,
    alignSelf: "stretch",
    alignItems: "center",
  },
  navParent: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  create: {
    color: Color.white,
  },
  createcardbtn: {
    width: 89,
  },
  homebtn: {
    width: 97,
  },
  library: {
    color: Color.gREEN,
    marginTop: 2,
  },
  librarybtn: {
    width: 95,
  },
  footerbar: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 28,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -175,
    top: 28,
    left: "50%",
    alignItems: "center",
  },
  container: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Container;
