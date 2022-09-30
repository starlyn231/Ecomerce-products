import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
//import { useSelector } from "react-redux";
import { Navigate, Routes } from 'react-router-dom';
const Router = ({ routes }) => {
  // const { authenticated } = useSelector((state) => true);
  //const authenticated = true;
  const [authenticated, setAuthenticated] = useState(true);
  console.log(routes)
  return (
    < >{routes.map((route) =>
    (
      route?.loginRequired == true && authenticated ? //IF LOGIN IS REQUIRED AND USER IS LOGGED IN CAN ACCESS TO ROUTE
        <Route key={route.path}  {...route} path={route.layout ? (route.layout + route.path) : route.path} />
        :
        route?.loginRequired == true && authenticated == false ? //IF LOGIN IS REQUIRED AND USER IS NOT LOGGED IN CAN`T ACCESS TO ROUTE
          <Navigate
            key={route.path}
            to='/public'
            replace />
          :
          <Route key={route.path}  {...route} path={route.layout ? (route.layout + route.path) : route.path} /> //PUBLIC ROUTES
    )
    )}
    </>
  )
};

export default Router;