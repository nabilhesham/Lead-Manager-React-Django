import { CREATE_MESSAGE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case CREATE_MESSAGE:
      return (state = action.payload);
  }
}
