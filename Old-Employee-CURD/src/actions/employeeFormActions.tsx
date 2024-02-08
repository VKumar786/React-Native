export const employeeUpdate = (data: {prop: string; value: string}) => {
  return {
    type: 'EMPLOYEE_UPDATE',
    payload: data,
  };
};
export const employeeInitialState = () => {
  return {
    type: 'EMPLOYEE_INITIAL_STATE',
  };
};
export const employeeSetInitialState = () => {
  return {
    type: 'EMPLOYEE_SET_INITIAL_STATE',
  };
};
