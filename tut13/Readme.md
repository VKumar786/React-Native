<!--
    TODO: 12. Showing a Custom Component
    TODO: 13. Showing a Custom Component
 -->

import AboutScreen from "./src/screens/AboutScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: "About",
    defaultNavigationOptions: {
      title: "App 😊",
    },
  },
);
