import '../App.css';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

function RouteSelector(props) {
  const navigate = useNavigate();
  const [routes, setRoutes] = useState([]);
  const [seletedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    fetch('https://svc.metrotransit.org/nextripv2/routes')
      .then((response) => response.json())
      .then((data) => {
        setRoutes(data.map(route =>{
          return {
            value: route.route_id, 
            label: route.route_label 
          }
        }));
      });
  }, []);

  useEffect(() => {
    if (props.routeId) {
      let selectedRouteInfo = routes.find(route => route.value == props.routeId);
      setSelectedRoute(selectedRouteInfo);
    }
  }, [props.routeId, routes]);

  function handleChange(selectedOption){
    setSelectedRoute(selectedOption);
    navigate(`/${selectedOption.value}/direction`)
  }

  return (
    <Select 
      value={seletedRoute}
      options={routes}
      onChange={handleChange}
      className="top-margin"
      id="routes-selector"
    />
  )
}

export default RouteSelector;