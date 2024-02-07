import {combineReducers} from 'redux';

import techStackReducer from './reducers/techStackReducer';
import selectionReducer from './reducers/selectionReducer';

const rootReducer = combineReducers({
  techStack: techStackReducer,
  selectedLibraryId: selectionReducer,
});

export default rootReducer;

// store
// { techStack: {} }
