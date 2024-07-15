import * as React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const SearchArea = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.vectorWrapperFlexBox}>
        <View style={[styles.searchcourses, styles.searchcoursesBorder]}>
          <TextInput
            style={[styles.search, styles.searchTypo]}
            placeholder="search"
            placeholderTextColor="#1a1a1a"
          />
        </View>
        <Pressable style={[styles.search1, styles.search1Layout]}>
          <View style={[styles.vectorWrapper, styles.searchcoursesBorder]}>
            <Image
              style={styles.search1Layout}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.recentlyViewedParent}>
        <Text style={[styles.recentlyViewed, styles.coursesFlexBox]}>
          recently viewed
        </Text>
        <View style={[styles.courses, styles.coursesFlexBox]}>
          <Pressable
            style={styles.course1}
            onPress={() => navigation.navigate("NewCard3")}
          >
            <Text style={styles.physiology}>Physiology</Text>
          </Pressable>
          <Pressable
            style={[styles.course2, styles.courseFlexBox]}
            onPress={() => navigation.navigate("NewCard3")}
          >
            <Text style={styles.physiology}>Anatomy</Text>
          </Pressable>
          <Pressable
            style={[styles.course3, styles.courseFlexBox]}
            onPress={() => navigation.navigate("NewCard3")}
          >
            <Text style={styles.physiology}>Ethics</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchcoursesBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  searchTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  search1Layout: {
    height: 25,
    width: 25,
  },
  coursesFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  courseFlexBox: {
    marginTop: 15,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  search: {
    fontSize: FontSize.size_xl,
    alignSelf: "stretch",
  },
  searchcourses: {
    borderRadius: Border.br_31xl,
    width: 277,
    height: 50,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  vectorWrapper: {
    position: "absolute",
    top: -10,
    left: -10,
    borderRadius: Border.br_81xl,
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  search1: {
    backgroundColor: Color.colorGray_200,
    marginLeft: 10,
  },
  vectorWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  recentlyViewed: {
    fontSize: FontSize.size_6xl,
    color: Color.gREEN,
    display: "flex",
    width: 319,
    height: 32,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  physiology: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.bLACK,
    textAlign: "center",
  },
  course1: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    height: 43,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  course2: {
    height: 42,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
  },
  course3: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
    height: 43,
  },
  courses: {
    height: 158,
    marginTop: 50,
    alignSelf: "stretch",
  },
  recentlyViewedParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlack,
    height: 290,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_mini,
    marginTop: 23,
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 40,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default SearchArea;
