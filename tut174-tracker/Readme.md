<!--
    TODO: 199. Navigation Design
    ? npm install react-navigation@4.4.4 --legacy-peer-deps
    ? npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view -- --legacy-peer-deps
    ? npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps
    ? npm install react-navigation-material-bottom-tabs react-native-paper@4 --legacy-peer-deps
    TODO: 201. A LOT of Boilerplate
    TODO: 203. Testing the Navigation Flow
    ? npm i react-native-elements --legacy-peer-deps
    TODO: 205. Helper Styling Components
    ! ngrok http 3000
    TODO: 214. Async Storage
    ! NavigationRef is used to redirect outside Components
    TODO: 217. Navigation From Outside of React
    ! onWillFocus vs onWillBlur Update
      * In the upcoming lecture, we will be adding NavigationEvents to our SignupScreen and SigninScreen and passing it event props to clear our error messages. You may notice that the error message is only cleared from SignupScreen to SigninScreen, but does not work if you are navigating from Signinscreen to SignupScreen.
      * To resolve this, use onWillFocus:
      * <NavigationEvents onWillFocus={clearErrorMessage} onDidFocus={} onWillBlur={} onWillFocus={}/>
    
 -->

secureTextEntry for password input

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

<!-- when user navigate to another page like same event of banner one-->

useEffect(() => {
  getBlogStore()

  const listener = navigation.addListener("didFocus", () => {
    getBlogStore()
  })

  return () => { listener.remove() }
}, [])

<!-- Imp -->

<NavigationEvents 
onWillFocus={() => {}} This event is triggered just before the screen/component is about to focus or become visible.
onDidFocus={() => {}} This event is triggered after the screen/component has been focused or become visible.
onWillBlur={() => {}}  This event is triggered just before the screen/component is about to blur or become hidden.
onDidBlur={() => {}}  This event is triggered after the screen/component has been blurred or hidden.
/>