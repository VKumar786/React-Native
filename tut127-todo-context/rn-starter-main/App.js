import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import EditScreen from "./src/screens/EditScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { BlogProvider } from "./src/context/blogContext";

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
    <BlogProvider>
      <AppContainer />
    </BlogProvider>
  );
};

export default App;
