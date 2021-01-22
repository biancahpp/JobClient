import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { apiDisplayInfo } from './services/apiClient';
import { useDispatch, useSelector } from 'react-redux';
import AddJob from './pages/AddJob';
import Landing from './pages/Landing';
import { getJobs, InitialState } from './Store/actions';

export default function Routes() {

  const dispatch = useDispatch();
  const jobs = useSelector((state: InitialState) => state.jobs);

  useEffect(() => {
    apiDisplayInfo().then((response) => {
      dispatch(getJobs(response))
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Landing details={jobs}/>
          </Route>
          <Route path="/addjob">
            <AddJob />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
