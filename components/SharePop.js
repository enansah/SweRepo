import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SharePop = () => {
  return (
    <View style={[styles.sharepop, styles.sharepopFlexBox]}>
      <View style={styles.navParent}>
        <View style={[styles.nav, styles.navFlexBox]}>
          <View style={styles.logoParent}>
            <Image
              style={styles.logoIcon}
              resizeMode="cover"
              source={require("../assets/logo.png")}
            />
            <Text style={[styles.lashy, styles.lashyTypo]}>LASHY</Text>
          </View>
          <Image
            style={styles.closebtnIcon}
            close="close"
            resizeMode="cover"
            source={require("../assets/closebtn.png")}
          />
        </View>
        <View style={[styles.shareThisCardWrapper, styles.navFlexBox]}>
          <Text style={[styles.shareThisCard, styles.lashyTypo]}>
            share this card
          </Text>
        </View>
        <View style={styles.emailtextboxParent}>
          <TextInput
            style={styles.emailtextbox}
            placeholder="type your email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#000"
          />
          <View
            style={[styles.invitetextboxParent, styles.inviteButtonSpaceBlock]}
          >
            <TextInput
              style={styles.emailtextbox}
              placeholder="invite by others by their email"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#000"
            />
            <Pressable
              style={[styles.inviteButton, styles.inviteButtonSpaceBlock]}
              inv="Invite"
            >
              <Text style={styles.invite}>Invite</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sharepopFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_3xs,
  },
  navFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 278,
    alignItems: "center",
  },
  lashyTypo: {
    display: "flex",
    color: Color.color,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  inviteButtonSpaceBlock: {
    marginTop: 15,
    alignItems: "center",
  },
  logoIcon: {
    width: 28,
    height: 23,
  },
  lashy: {
    fontSize: 12,
    textAlign: "right",
    width: 40,
    marginLeft: -5,
    height: 23,
  },
  logoParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  closebtnIcon: {
    width: 20,
    height: 20,
  },
  nav: {
    height: 25,
  },
  shareThisCard: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    height: 25,
    width: 278,
    display: "flex",
    color: Color.color,
    justifyContent: "center",
  },
  shareThisCardWrapper: {
    marginTop: 18,
  },
  emailtextbox: {
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_3xs,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
  invite: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.bLACK,
    textAlign: "center",
  },
  inviteButton: {
    backgroundColor: Color.gREEN,
    width: 67,
    height: 27,
    padding: Padding.p_2xs,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: Border.br_3xs,
  },
  invitetextboxParent: {
    alignSelf: "stretch",
  },
  emailtextboxParent: {
    alignSelf: "stretch",
    marginTop: 18,
  },
  navParent: {
    width: 304,
    height: 247,
    alignItems: "center",
  },
  sharepop: {
    backgroundColor: Color.colorBlack,
    paddingHorizontal: Padding.p_xl,
    paddingTop: 33,
    paddingBottom: 35,
    alignItems: "center",
  },
});

export default SharePop;