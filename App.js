const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Homepage from "./screens/Homepage";
import NewCard2 from "./screens/NewCard2";
import SyncNotesAppOnboarding from "./screens/SyncNotesAppOnboarding";
import Onboarding from "./screens/Onboarding";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import NewCard from "./screens/NewCard";
import SignUp from "./screens/SignUp";
import CreatePassword from "./screens/CreatePassword";
import PhoneVerification from "./screens/PhoneVerification";
import LoginScreen from "./screens/LoginScreen";
import ForgetPassword from "./screens/ForgetPassword";
import Create from "./screens/Create";
import NewCourse from "./screens/NewCourse";
import Settings from "./screens/Settings";
import NewCard3 from "./screens/NewCard3";
import Library from "./screens/Library";
import NewCard11 from "./screens/NewCard11";
import HelpDesk from "./screens/HelpDesk";
import Notification1 from "./screens/Notification1";
import Upload from "./screens/Upload";
import NewCard1 from "./screens/NewCard1";
import Container from "./screens/Container";
import SharePop from "./components/SharePop";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCard2"
              component={NewCard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SyncNotesAppOnboarding"
              component={SyncNotesAppOnboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCard"
              component={NewCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreatePassword"
              component={CreatePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhoneVerification"
              component={PhoneVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Create"
              component={Create}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCourse"
              component={NewCourse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCard3"
              component={NewCard3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Library"
              component={Library}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCard11"
              component={NewCard11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpDesk"
              component={HelpDesk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Upload"
              component={Upload}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCard1"
              component={NewCard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Container"
              component={Container}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
