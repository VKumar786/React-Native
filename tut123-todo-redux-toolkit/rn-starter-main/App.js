import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./src/reduxToolkit/store";
import EditScreen from "./src/screens/EditScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
    Edit: EditScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blog 🧠",
    },
  }
);

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
