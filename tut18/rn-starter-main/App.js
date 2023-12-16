import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ExerciseScreen from './src/screens/ExerciseScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Exercise: ExerciseScreen,
  },
  {
    initialRouteName: "Exercise",
    defaultNavigationOptions: {
      title: "Exercise 😈",
    },
  },
);

export default createAppContainer(navigator);
