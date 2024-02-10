import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfilesProvider } from "./src/Context/ProfilesContext";
import { AuthProvider } from "./src/Context/AuthContext";
import IndexPage from "./src/Pages/IndexPage";
import UserPage from "./src/Pages/UserPage";
import CategoriesPage from "./src/Pages/CategoriesPage";
import SplashScreen from "./src/Pages/SplashScreen";
import SignInPage from "./src/Pages/SignInPage";
import ProfilesPage from "./src/Pages/ProfilesPage";
import FilmInfoPage from "./src/Pages/FilmInfoPage";
import FullScreenVideoPlayer from "./src/Pages/FullScreenVideoPlayer";
import SignUpPage from "./src/Pages/SignUpPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <ProfilesProvider>
          <StatusBar style="light" />
          <Stack.Navigator
            initialRouteName="Splash" // Change this to "Splash"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="LoginSignup"
              component={SignInPage}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="Profiles"
              component={ProfilesPage}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="Home"
              component={IndexPage}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="UserPage"
              component={UserPage}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="CategoriesPage"
              component={CategoriesPage}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="FilmInfo"
              component={FilmInfoPage}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="FSVideoPlayer"
              component={FullScreenVideoPlayer}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="SignUpPage"
              component={SignUpPage}
              options={{ animation: "none" }}
            />
          </Stack.Navigator>
        </ProfilesProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
