import '../App.css';
import React, { useState, useEffect } from 'react';
import RouteSelector from './route-selector';
import DirectionSelector from './direction-selector';
import StopSelector from './stop-selector';
import { useNavigate, useParams } from "react-router-dom";

function StopPageResults(props) {
  const params = useParams();
  const routeId = params.routeId;
  const directionId = params.directionId;
  const stopId = params.stopId;

  const [departures, setDepartures] = useState([]);
  const [stopRefNumber, setStopRefNumber] = useState("");
  const [stopName, setStopName] = useState("");

  console.log(params)

  useEffect(() => {
    fetch(`https://svc.metrotransit.org/nextripv2/${routeId}/${directionId}/${stopId}`)
      .then((response) => response.json())
      .then((data) => {
        setDepartures(data.departures);
        setStopRefNumber(data.stops[0].stop_id);
        setStopName(data.stops[0].description)
      });
  }, [stopId]);

  return (
    <div>
      <RouteSelector routeId={routeId} />
      <DirectionSelector routeId={routeId} directionId={directionId} />
      <StopSelector routeId={routeId} directionId={directionId} stopId={stopId} />
      <h2>{stopName} - Stop #: {stopRefNumber}</h2>
    </div>
    
  )
}

export default StopPageResults;