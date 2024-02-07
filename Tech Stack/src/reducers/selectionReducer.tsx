export const initialState = null;

export default function postReducer(state = initialState, action: any) {
  console.log('action :: ', action);
  switch (action.type) {
    case 'SELECT_LIBRARY':
      return action.payload;
    default:
      return state;
  }
}
