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
    TODO: 228. Automatic Signin
    TODO: 229. Empty Screens While Resolving Auth
    TODO: 230. Signing Out a User
    ! npx expo install react-native-maps -- --legacy-peer-deps
    TODO: 234. Showing a Map
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
onWillBlur={() => {}} This event is triggered just before the screen/component is about to blur or become hidden.
onDidBlur={() => {}} This event is triggered after the screen/component has been blurred or hidden.
/>
