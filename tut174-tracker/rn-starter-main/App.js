import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import store from "./src/reduxToolkit/store";
import { Provider } from "react-redux";

const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetails: TrackDetailsScreen,
    }),
    Account: AccountScreen,
    TrackCreate: TrackCreateScreen,
  }),
});

// export default createAppContainer(navigator);
const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
