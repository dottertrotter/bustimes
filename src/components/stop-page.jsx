import '../App.css';
import React, { useState, useEffect } from 'react';
import RouteSelector from './route-selector';
import DirectionSelector from './direction-selector';
import { useNavigate, useParams } from "react-router-dom";

function StopPage() {
  const params = useParams();
  const routeId = params.routeId;
  const directionId = params.directionId;

  return (
    <div>
      <RouteSelector routeId={routeId} />
      <DirectionSelector routeId={routeId} directionId={directionId} />
      <h2>Select a stop</h2>
    </div>
  )
}

export default StopPage;