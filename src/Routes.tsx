import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import apiDisplayInfo from './services/apiClient';
import AddJob from './pages/AddJob';
import Landing from './pages/Landing';

export default function Routes() {

  const [details, setDetails] = useState(null);

  useEffect(() => {
    apiDisplayInfo().then((response) => {
      setDetails(response);
    });
  }, []);

  console.log(details)
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Landing details={details}/>
          </Route>
          <Route path="/addjob">
            <AddJob />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
