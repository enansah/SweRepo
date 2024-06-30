import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homepage, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.groupParent, styles.groupParentFlexBox]}>
            <View style={styles.frameWrapper}>
              <View style={[styles.groupContainer, styles.groupParentFlexBox]}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/group-2.png")}
                />
                <Text style={[styles.lashy, styles.lashyFlexBox]}>LASHY</Text>
              </View>
            </View>
            <Pressable
              style={styles.frameChild}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/whmcs.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.frameView}>
              <View style={[styles.searchParent, styles.groupParentFlexBox]}>
                <Text style={styles.search}>search</Text>
                <Image
                  style={styles.searchIcon}
                  resizeMode="cover"
                  source={require("../assets/search.png")}
                />
              </View>
            </View>
            <View style={[styles.recentlyViewedParent, styles.parentBg]}>
              <Text style={styles.recentlyViewed}>recently viewed</Text>
              <View style={styles.frameParent1}>
                <Pressable
                  style={styles.physiologyWrapper}
                  onPress={() => navigation.navigate("NewCard2")}
                >
                  <Text style={styles.physiology}>Physiology</Text>
                </Pressable>
                <Pressable
                  style={[styles.anatomyWrapper, styles.wrapperFlexBox]}
                  onPress={() => navigation.navigate("NewCard2")}
                >
                  <Text style={styles.physiology}>Anatomy</Text>
                </Pressable>
                <Pressable
                  style={[styles.ethicsWrapper, styles.wrapperFlexBox]}
                  onPress={() => navigation.navigate("NewCard2")}
                >
                  <Text style={styles.physiology}>Ethics</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.parentBg]}>
          <View style={[styles.plusParent, styles.lashyFlexBox]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/plus.png")}
            />
            <Text style={styles.createTypo}>Create</Text>
          </View>
          <View style={[styles.homeParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/home.png")}
            />
            <Text style={styles.home}>Home</Text>
          </View>
          <View style={[styles.bookReaderParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.plusIcon}
              resizeMode="cover"
              source={require("../assets/bookreader.png")}
            />
            <Text style={[styles.library, styles.createTypo]}>Library</Text>
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
  groupParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  lashyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentBg: {
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    marginTop: 15,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  parentSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  createTypo: {
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  lashy: {
    color: Color.colorBlack,
    width: 79,
    height: 23,
    marginLeft: -15,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
  },
  groupContainer: {
    top: 0,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  frameWrapper: {
    width: 104,
    height: 40,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  groupParent: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  search: {
    textAlign: "left",
    width: 260,
    height: 25,
    color: Color.bLACK,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    alignItems: "center",
  },
  searchIcon: {
    width: 25,
    marginLeft: 10,
    height: 25,
  },
  searchParent: {
    width: 296,
    alignItems: "center",
  },
  frameView: {
    borderRadius: Border.br_31xl,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 326,
    height: 46,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.white,
  },
  recentlyViewed: {
    fontSize: FontSize.size_6xl,
    width: 319,
    height: 32,
    color: Color.gREEN,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  physiology: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    fontSize: FontSize.size_5xl,
    color: Color.bLACK,
    textAlign: "center",
  },
  physiologyWrapper: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    height: 43,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  anatomyWrapper: {
    height: 42,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
  },
  ethicsWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
    height: 43,
  },
  frameParent1: {
    width: 318,
    marginTop: 50,
  },
  recentlyViewedParent: {
    borderRadius: Border.br_xl,
    height: 290,
    paddingHorizontal: 19,
    paddingVertical: Padding.p_mini,
    marginTop: 23,
    alignItems: "flex-end",
  },
  frameContainer: {
    marginTop: 40,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameGroup: {
    alignItems: "flex-end",
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
  home: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.gREEN,
    textAlign: "center",
    alignSelf: "stretch",
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
  frameParent2: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    marginTop: 227,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    marginTop: -394,
    marginLeft: -180,
    top: "50%",
    left: "50%",
    width: 359,
    height: 789,
    position: "absolute",
  },
  homepage: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Homepage;
