//decription Modal reducer
import {
  OPEN_DESCRIPTION_MODAL,
  CLOSE_DESCRIPTION_MODAL,
} from "../ActionConstants/actionTypes";
const defaultState = {
  open: false,
};

const descriptionModal = (state = defaultState, action) => {
  console.log(action.type);
  switch (action.type) {
    case OPEN_DESCRIPTION_MODAL:
      return {
        ...state,
        open: true,
      };

    case CLOSE_DESCRIPTION_MODAL:
      return {
        ...state,
        open: false,
      };

    default:
      return { ...state };
  }
};

export default descriptionModal;
