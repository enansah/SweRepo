import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HelpDesk = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.helpDesk, styles.iconLayout]}>
      <Pressable
        style={styles.whmcs}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/whmcs.png")}
        />
      </Pressable>
      <View style={styles.frameParent}>
        <View style={styles.plusParent}>
          <Image
            style={styles.plusIcon}
            resizeMode="cover"
            source={require("../assets/plus1.png")}
          />
          <Text style={styles.createTypo}>Create</Text>
        </View>
        <View style={[styles.homeParent, styles.parentSpaceBlock]}>
          <Image
            style={styles.plusIcon}
            resizeMode="cover"
            source={require("../assets/home1.png")}
          />
          <Text style={styles.createTypo}>Home</Text>
        </View>
        <View style={[styles.bookReaderParent, styles.parentSpaceBlock]}>
          <Image
            style={styles.plusIcon}
            resizeMode="cover"
            source={require("../assets/bookreader2.png")}
          />
          <Text style={[styles.library, styles.createTypo]}>Library</Text>
        </View>
      </View>
      <View
        style={[
          styles.welcomeToTheFlashyHelpDesParent,
          styles.frameWrapperLayout,
        ]}
      >
        <Text style={[styles.welcomeToThe, styles.containerFlexBox]}>
          Welcome to the Flashy Help Desk!
        </Text>
        <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <View style={styles.frameContainer}>
                <View style={styles.frameContainer}>
                  <View style={styles.frameContainer}>
                    <Text
                      style={[
                        styles.aboutFlashyFlashyContainer,
                        styles.containerFlexBox,
                      ]}
                    >
                      <Text>
                        <Text style={styles.aboutFlashy}>{`About Flashy: 

`}</Text>
                        <Text style={[styles.flashyIsA, styles.flashyIsATypo]}>
                          Flashy is a powerful mobile app designed to make
                          studying more efficient and collaborative. Whether
                          you're prepping for exams or sharing notes with
                          classmates, Flashy helps you create, organize, and
                          share flashcards easily.
                        </Text>
                      </Text>
                    </Text>
                    <Text
                      style={[
                        styles.featuresCreateFlashcardsQContainer,
                        styles.containerFlexBox,
                      ]}
                    >
                      <Text>
                        <Text style={styles.features}>{`Features:

`}</Text>
                        <Text
                          style={styles.createFlashcardsQuicklyTur}
                        >{`Create Flashcards: Quickly turn your notebook entries into digital flashcards. Add text, images, and even audio to enhance your study materials.
Organize Notebooks: Keep all your notes and flashcards neatly organized in one place. Use tags and folders to categorize your content for easy access.
Collaborate with Peers: Share your notebooks and flashcards with other students. Work together on projects, study groups, or just help each other out with tricky subjects.
Sync Across Devices: Access your flashcards and notes anytime, anywhere. Sync your data across multiple devices to ensure you never lose your important study materials.`}</Text>
                      </Text>
                    </Text>
                  </View>
                  <Text
                    style={[styles.howToGetContainer, styles.containerFlexBox]}
                  >
                    <Text>
                      <Text style={styles.features}>
                        <Text style={styles.howToGet}>{`How to Get Started:
`}</Text>
                        <Text style={styles.blankLine}> </Text>
                      </Text>
                      <Text style={styles.createFlashcardsQuicklyTur}>
                        <Text style={styles.howToGet}>Download Flashy:</Text>
                        <Text style={styles.blankLine}>{` 
Get the app from the App Store or Google Play.
`}</Text>
                        <Text style={styles.howToGet}>Start Creating:</Text>
                        <Text style={styles.blankLine}>{` 
Begin adding your notes and turning them into flashcards.
`}</Text>
                        <Text style={styles.howToGet}>{`Share and Collaborate:
 `}</Text>
                        <Text style={styles.blankLine}>
                          Invite friends to join your study sessions and share
                          your notebooks.
                        </Text>
                      </Text>
                    </Text>
                  </Text>
                </View>
                <Text
                  style={[styles.needAssistanceIfYou, styles.wereHereToFlexBox]}
                >{`Need Assistance? If you have any questions or need help with the app, please reach out to our support team:
Email: support@flashyapp.com
Phone: +233-829-6141`}</Text>
              </View>
            </View>
            <Text style={[styles.wereHereTo, styles.wereHereToFlexBox]}>
              We're here to help you make the most out of Flashy and ensure you
              have a seamless and productive study experience. Happy studying!
            </Text>
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
  parentSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  createTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    alignSelf: "stretch",
  },
  frameWrapperLayout: {
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  containerFlexBox: {
    display: "flex",
    color: Color.colorBlack,
    textAlign: "center",
    alignItems: "center",
  },
  flashyIsATypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  wereHereToFlexBox: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    display: "flex",
    color: Color.colorBlack,
    textAlign: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  whmcs: {
    left: 335,
    top: 28,
    width: 40,
    height: 40,
    position: "absolute",
  },
  plusIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  plusParent: {
    width: 89,
    justifyContent: "center",
    alignItems: "center",
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
  frameParent: {
    bottom: 27,
    left: 15,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    width: 360,
    height: 123,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  welcomeToThe: {
    width: 255,
    height: 49,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    justifyContent: "center",
  },
  aboutFlashy: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  flashyIsA: {
    fontSize: FontSize.size_base,
  },
  aboutFlashyFlashyContainer: {
    height: 222,
    alignSelf: "stretch",
  },
  features: {
    fontSize: FontSize.size_xl,
  },
  createFlashcardsQuicklyTur: {
    fontSize: FontSize.size_base,
  },
  featuresCreateFlashcardsQContainer: {
    height: 461,
    marginTop: 20,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignSelf: "stretch",
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  howToGet: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  blankLine: {
    fontFamily: FontFamily.interRegular,
  },
  howToGetContainer: {
    height: 297,
    alignSelf: "stretch",
  },
  needAssistanceIfYou: {
    height: 169,
    marginTop: 10,
  },
  wereHereTo: {
    height: 110,
    marginTop: 30,
  },
  frameGroup: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frameWrapper: {
    backgroundColor: "rgba(161, 161, 161, 0.1)",
    height: 1402,
    paddingHorizontal: 44,
    paddingVertical: 41,
    marginTop: 30,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  welcomeToTheFlashyHelpDesParent: {
    marginTop: -781.5,
    marginLeft: -176,
    top: "50%",
    left: "50%",
    width: 353,
    position: "absolute",
  },
  helpDesk: {
    backgroundColor: Color.white,
    height: 1757,
    overflow: "hidden",
    flex: 1,
  },
});

export default HelpDesk;
