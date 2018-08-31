export interface NavState {
  showSideNav: boolean;
}

export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDENAV":
      return { ...state, showSideNav: action.payload };
    default:
      return state;
  }
}
