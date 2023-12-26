<!--
   TODO: 127. Initial Setup
   TODO: 128. Wrapping the Navigator
   ! Err that I & Ritu was facing to displaing Err on login
   TODO: 161. Outside Data API
   TODO: 162. Issues with Servers + React Native
-->

addBlogPost(title, content, () => {
   navigation.navigate("Index")
})

const addBlogPost = dispatch => {
   return async (title, content, callback) => {
      try {
         await fetch("url" , { title, content})
         callback()
      } catch(e) {
         Errcallback();
      }
   }
}


HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <Feather
        name="edit"
        size={17}
        color="black"
        style={{
          marginRight: 5,
          marginTop: 5,
        }}
      />
    ),
  };
};