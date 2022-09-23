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

  useEffect(() => {
    fetch(`https://svc.metrotransit.org/nextripv2/${routeId}/${directionId}/${stopId}`)
      .then((response) => response.json())
      .then((data) => {
        setDepartures(data.departures);
        setStopRefNumber(data.stops[0].stop_id);
        setStopName(data.stops[0].description)
      });
  }, [stopId]);

  function buildDeparturesTable() {
    let displayArray = [];

    departures.forEach(departureInfo => {
      displayArray.push(
        <div className="row data-table">
          <div className="two columns padded">
            {departureInfo.route_short_name}
          </div>
          <div className="eight columns padded">
            {departureInfo.description}
          </div>
          <div className="two columns align-right  padded">
          {departureInfo.departure_text}
          </div>
        </div>
      )
    });

    return displayArray;

  }

  return (
    <div className="container">
      <RouteSelector routeId={routeId} />
      <DirectionSelector routeId={routeId} directionId={directionId} />
      <StopSelector routeId={routeId} directionId={directionId} stopId={stopId} />

      <div className="row table-headings data-table top-margin">
        <div className="nine columns padded">
          {stopName}
        </div>
        <div className="three columns align-right padded">
          Stop #: {stopRefNumber}
        </div>
      </div>

      <div className="row table-headings">
        <div className="two columns padded">
          Route
        </div>
        <div className="eight columns padded">
          Destination
        </div>
        <div className="two columns align-right padded">
          Departs
        </div>
      </div>

      { buildDeparturesTable() }
    </div>
    
  )
}

export default StopPageResults;