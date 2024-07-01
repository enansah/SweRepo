import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Border, FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const SharePop = ({ onClose }) => {
  return (
    <View style={[styles.sharepop, styles.sharepopLayout]}>
      <View style={styles.navParent}>
        <View style={[styles.nav, styles.navFlexBox]}>
          <View style={[styles.flashyLogo, styles.flashyLogoFlexBox]}>
            <Image
              style={styles.logoIcon}
              resizeMode="cover"
              source={require("../assets/logo.png")}
            />
            <Text style={[styles.lashy, styles.lashyTypo]}>LASHY</Text>
          </View>
          <Image
            style={styles.closebtnIcon}
            resizeMode="cover"
            source={require("../assets/closebtn.png")}
          />
        </View>
        <View style={[styles.shareThisCardWrapper, styles.shareCardLayout]}>
          <Text style={[styles.shareThisCard, styles.inviteTypo]}>
            share this card
          </Text>
        </View>
        <View style={[styles.emailtextbox, styles.emailtextboxBorder]}>
          <Text style={[styles.typeYourEmail, styles.lashyTypo]}>
            type your email
          </Text>
        </View>
        <View style={styles.invitetextboxParent}>
          <View style={styles.emailtextboxBorder}>
            <Text style={[styles.typeYourEmail, styles.lashyTypo]}>
              invite by others by email
            </Text>
          </View>
          <View style={[styles.inviteButton, styles.flashyLogoFlexBox]}>
            <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sharepopLayout: {
    borderRadius: Border.br_3xs,
    justifyContent: "center",
  },
  navFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  flashyLogoFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  lashyTypo: {
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  shareCardLayout: {
    width: 103,
    alignItems: "center",
  },
  inviteTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  emailtextboxBorder: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_smi,
    height: 35,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
  logoIcon: {
    width: 28,
    height: 23,
  },
  lashy: {
    fontSize: 12,
    textAlign: "right",
    width: 50,
    marginLeft: -15,
    color: Color.white,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    height: 23,
    alignItems: "center",
  },
  flashyLogo: {
    width: 65,
    height: 25,
  },
  closebtnIcon: {
    width: 20,
    height: 20,
  },
  nav: {
    width: 228,
    height: 25,
    alignItems: "center",
  },
  shareThisCard: {
    width: 103,
    alignItems: "center",
    height: 20,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.white,
    justifyContent: "center",
  },
  shareThisCardWrapper: {
    marginTop: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  typeYourEmail: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    width: 241,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
  },
  emailtextbox: {
    marginTop: 15,
  },
  invite: {
    fontFamily: FontFamily.interRegular,
    color: Color.bLACK,
  },
  inviteButton: {
    backgroundColor: Color.gREEN,
    width: 67,
    height: 27,
    padding: Padding.p_2xs,
    marginTop: 4,
    justifyContent: "center",
    borderRadius: Border.br_3xs,
  },
  invitetextboxParent: {
    alignSelf: "stretch",
    marginTop: 15,
    alignItems: "center",
  },
  navParent: {
    alignItems: "center",
  },
  sharepop: {
    backgroundColor: Color.colorBlack,
    paddingHorizontal: 8,
    paddingTop: 33,
    paddingBottom: 35,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SharePop;
