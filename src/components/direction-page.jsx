import '../App.css';
import React, { useState, useEffect } from 'react';
import RouteSelector from './route-selector';
import DirectionSelector from './direction-selector';
import { useNavigate, useParams } from "react-router-dom";

function DirectionPage() {
  const params = useParams();
  const routeId = params.routeId;

  return (
    <div>
      <RouteSelector routeId={routeId} />
      <DirectionSelector routeId={routeId} />
    </div>
  )
}

export default DirectionPage;