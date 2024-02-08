export const initialState = {};

export default function postReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'EMPLOYEES_FETCH_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
