import '../App.css';
import React, { useState, useEffect } from 'react';
import RouteSelector from './route-selector';
import DirectionSelector from './direction-selector';
import StopSelector from './stop-selector';
import { useNavigate, useParams } from "react-router-dom";

function StopPage() {
  const params = useParams();
  const routeId = params.routeId;
  const directionId = params.directionId;
  const stopId = params.stopId;

  return (
    <div className="container">
      <RouteSelector routeId={routeId} />
      <DirectionSelector routeId={routeId} directionId={directionId} />
      <StopSelector routeId={routeId} directionId={directionId} stopId={stopId} />
    </div>
  )
}

export default StopPage;