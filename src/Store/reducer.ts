import { initialState, Action, GET_JOBS, ADD_JOB, DELETE_JOBS } from "./actions";

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
    case DELETE_JOBS:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.payload)
      }
    default: return state;
  }
}