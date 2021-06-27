import {TOGGLE_MODAL} from '../../constants/Constants';

const initialState = {
  isModalVisible: false,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalVisible: action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;
