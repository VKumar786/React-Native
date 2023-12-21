import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from './src/screens/ListScreen'
import ComponentScreen from './src/screens/ComponentScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Component: ComponentScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home 🧠",
    },
  },
);

export default createAppContainer(navigator);
