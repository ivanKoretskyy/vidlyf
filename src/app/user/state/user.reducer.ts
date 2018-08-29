export function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
}
