import { Job } from "../interface/Jobs";

export const ADD_JOB = "ADD_JOB";
export const GET_JOBS = "GET_JOBS";
export const DELETE_JOBS = "DELETE_JOBS";


export interface InitialState {
  jobs: Job[],
}
export const initialState: InitialState = {
  jobs: []
}

export interface Action {
  type: string;
  payload: any;
}

export const getJobs = (jobs:Job[]) =>({
  type: GET_JOBS,
  payload: jobs
})

export const addJobs = (job:Job) =>({
  type: ADD_JOB,
  payload: job
})

export const deleteJobs = (id:string) =>({
  type: DELETE_JOBS,
  payload: id
})