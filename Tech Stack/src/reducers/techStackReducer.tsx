import data from './data.json';

// export const initialState = {
//   post: data,
// };

// export default function postReducer(state = initialState, action: any) {
//   switch (action.type) {
//     case 'GET_POST_SUCCESS':
//       return {post: action.payload};
//     default:
//       return state;
//   }
// }

export default () => data;
