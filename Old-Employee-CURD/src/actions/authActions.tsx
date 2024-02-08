export const emailChanged = (text: string) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: text,
  };
};
export const passwordChanged = (text: string) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: text,
  };
};
export const loginUserSuccess = (data: any) => {
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: data,
  };
};
export const loginUserError = (data: string) => {
  return {
    type: 'LOGIN_USER_ERROR',
    payload: data,
  };
};
export const loginUserLoader = (data: boolean) => {
  return {
    type: 'LOGIN_USER_LOADER',
    payload: data,
  };
};
