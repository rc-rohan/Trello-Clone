import {
  OPEN_DESCRIPTION_MODAL,
  CLOSE_DESCRIPTION_MODAL,
} from "../ActionConstants/actionTypes";

//open description Modal
export const openDescriptionModal = () => ({ type: OPEN_DESCRIPTION_MODAL });

//close description Modal
export const closeDescriptionModal = () => ({ type: CLOSE_DESCRIPTION_MODAL });
