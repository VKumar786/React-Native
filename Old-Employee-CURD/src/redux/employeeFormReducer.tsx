export const initialState = {
  name: '',
  phone: '',
  shift: 'Monday',
};

export default function postReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'EMPLOYEE_UPDATE':
      return {...state, [action.payload.prop]: action.payload.value};
    case 'EMPLOYEE_INITIAL_STATE':
      return initialState;
    case 'EMPLOYEE_SET_INITIAL_STATE':
      return action.payload;
    default:
      return state;
  }
}
