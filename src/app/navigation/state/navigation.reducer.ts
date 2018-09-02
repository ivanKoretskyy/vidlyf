import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface NavState {
  showSideNav: boolean;
}

const initialState = {
  showSideNav: true
};

const navSelector = createFeatureSelector<NavState>("navigation");
export const getShowSideNav = createSelector(
  navSelector,
  navState => navState.showSideNav
);

export function reducer(state: NavState = initialState, action): NavState {
  switch (action.type) {
    case "TOGGLE_SIDENAV":
      return { ...state, showSideNav: action.payload };
    default:
      return state;
  }
}
