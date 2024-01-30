import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserProvider } from "./src/Context/UserContext";
import IndexPage from "./src/Pages/IndexPage";
import ProfilePage from "./src/Pages/ProfilePage";
import CategoriesPage from "./src/Pages/CategoriesPage";
import SplashScreen from "./src/Pages/SplashScreen";
import LoginSignupPage from "./src/Pages/LoginSignupPage";
import UsersPage from "./src/Pages/UsersPage";
import FilmInfoPage from "./src/Pages/FilmInfoPage";
import FullScreenVideoPlayer from "./src/Pages/FullScreenVideoPlayer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
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
            component={LoginSignupPage}
            options={{ animation: "none" }}
          />
          <Stack.Screen
            name="Users"
            component={UsersPage}
            options={{ animation: "none" }}
          />
          <Stack.Screen
            name="Home"
            component={IndexPage}
            options={{ animation: "none" }}
          />
          <Stack.Screen
            name="ProfilePage"
            component={ProfilePage}
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
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}
