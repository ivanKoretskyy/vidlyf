import * as fromRootState from "./../../state/app.state";

export interface UserState {
  currentUser: {
    id: string;
    name: string;
    email: string;
  };
}

export interface State extends fromRootState.State {
  userState: UserState;
}

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
