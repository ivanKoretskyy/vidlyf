import * as fromRootState from "./../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { get } from "lodash";
export interface UserState {
  currentUser: {
    _id: string;
    name: string;
    email: string;
  };
}
const initialCurrentUser: UserState = {
  currentUser: null
};

export interface State extends fromRootState.State {
  users: UserState;
}

const getUserStateSelector = createFeatureSelector<UserState>("users");
export const getCurrentUser = createSelector(getUserStateSelector, state => {
  return get(state, "currentUser");
});

export function reducer(state: UserState, action): UserState {
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
