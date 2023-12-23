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
 -->

const reducer = (state, action) => {
  // state = { red: number, blue: number, green: number }
  // action = { colorToChange: 'red' | 'blue' | 'green', amount: 10 | -10}
  console.warn(state, action);
  switch (action.colorToChange) {
    case 'red':
      //! state.red = state.red + amount > invalid
      return {
        ...state,
        red: state.red + action.amount
      }
    case 'blue':
      return {
        ...state,
        blue: state.blue + action.amount
      }
    case 'green':
      return {
        ...state,
        green: state.green + action.amount
      }
    default:
      return state
  }
}

const HomeScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 })

  return <View>
    <ColorBtn title={"Red"} onInc={() => dispatch({ colorToChange: "red", amount: 15 })} onDec={() => dispatch({ colorToChange: "red", amount: -15 })} />
    <ColorBtn title={"Blue"} onInc={() => dispatch({ colorToChange: "blue", amount: 15 })} onDec={() => dispatch({ colorToChange: "blue", amount: -15 })} />
    <ColorBtn title={"Green"} onInc={() => dispatch({ colorToChange: "green", amount: 15 })} onDec={() => dispatch({ colorToChange: "green", amount: -15 })} />

    <Text>rgb({state.red}, {state.blue}, {state.green})</Text>

    <View style={{
      width: 80,
      height: 80,
      backgroundColor: `rgb(${state.red}, ${state.blue}, ${state.green})`
    }} />
  </View>
};