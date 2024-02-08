export const initialState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default function postReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return {...state, email: action.payload};
    case 'PASSWORD_CHANGED':
      return {...state, password: action.payload};
    case 'LOGIN_USER_SUCCESS':
      return {...state, user: action.payload};
    case 'LOGIN_USER_ERROR':
      return {...state, error: action.payload};
    case 'LOGIN_USER_LOADER':
      return {...state, loading: action.payload};
    default:
      return state;
  }
}
