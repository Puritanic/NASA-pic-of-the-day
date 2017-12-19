export default function name(state = {}, action) {
  switch (action.type) {
    case "GET_DATA":
      const newState = Object.assign({}, ...state, action.payload.data);
      return newState;
    default:
      return state;
  }
}
