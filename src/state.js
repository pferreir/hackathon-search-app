import { createStore } from 'redux';

const initialState = {
  keyword: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_KEYWORD':
      return {
        ...state,
        keyword: action.data.keyword
      }

    default:
      return state;
  }
}

const AppStore = createStore(reducer);

export default AppStore;
