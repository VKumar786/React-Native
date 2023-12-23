<!--
    TODO: 40. State in Components
    TODO: 41. Screen Boilerplate
    TODO: 42. State in Action
    TODO: 44. App Overview
    TODO: 45. Generating Random Colors
    TODO: 46. Adding Random Colors
    TODO: 47. Showing Colors with a FlatList
    TODO: 48. App Overview
    TODO: 51. Passing Callbacks to Children
    TODO: 53. Validating State Changes
    TODO: 54. Reusable State Updates
    TODO: 55. Introduction to Reducers
    TODO: 56. Creating a Reducer
    TODO: 57. Applying State with a Reducer
    TODO: 59. Community Convention in Reducers
    ! what is use of useState coz after updating variable value then it trigger refresh event in virtual dom
    TODO: 60. Exercise Outline 
    TODO: 61. Exercise Solution 
 -->

const reducer = (state, action) => {
  // state = { red: number, blue: number, green: number }
  // action = { type: 'red' | 'blue' | 'green', payload: 10 | -10}
  console.warn(state, action);
  switch (action.type) {
    case 'red':
      //! state.red = state.red + payload > invalid
      return {
        ...state,
        red: Math.abs(state.red + action.payload) % 256
      }
    case 'blue':
      return {
        ...state,
        blue: Math.abs(state.blue + action.payload) % 256
      }
    case 'green':
      return {
        ...state,
        green: Math.abs(state.green + action.payload)% 256
      }
    default:
      return state
  }
}

const HomeScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 })

  return <View>
    <ColorBtn title={"Red"} onInc={() => dispatch({ type: "red", payload: 15 })} onDec={() => dispatch({ type: "red", payload: -1 * 15 })} />
    <ColorBtn title={"Blue"} onInc={() => dispatch({ type: "blue", payload: 15 })} onDec={() => dispatch({ type: "blue", payload: -1 * 15 })} />
    <ColorBtn title={"Green"} onInc={() => dispatch({ type: "green", payload: 15 })} onDec={() => dispatch({ type: "green", payload: -1 * 15 })} />
