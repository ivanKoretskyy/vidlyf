import * as fromRootState from "./../../state/app.state";

export interface UserState {
  currentUser: {
    _id: string;
    name: string;
    email: string;
  };
}

export interface State extends fromRootState.State {
  users: UserState;
}

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
