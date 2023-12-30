import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const navigator = createStackNavigator(
  {
    Account: AccountScreen,
    Signin: SigninScreen,
    Signup: SignupScreen,
    TrackCreate: TrackCreateScreen,
    TrackDetails: TrackDetailsScreen,
    TrackList: TrackListScreen,
  },
  {
    initialRouteName: "Signup",
    defaultNavigationOptions: {
      title: "App 😊",
    },
  }
);

export default createAppContainer(navigator);
