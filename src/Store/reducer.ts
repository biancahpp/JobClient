import { initialState, Action, GET_JOBS, ADD_JOB } from "./actions";

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload
      }
      case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    default: return state;
  }
}