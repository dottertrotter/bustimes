import '../App.css';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate, useParams } from "react-router-dom";

function StopSelector(props) {
  const navigate = useNavigate();
  const [stops, setStops] = useState([]);
  const [seletedStop, setSelectedStop] = useState(null);

  useEffect(() => {
    fetch(`https://svc.metrotransit.org/nextripv2/stops/${props.routeId}/${props.directionId}`)
      .then((response) => response.json())
      .then((data) => {
        setStops(data.map(stopInfo =>{
          return {
            value: stopInfo.place_code, 
            label: stopInfo.description 
          }
        }));
      });
  }, [props.routeId, props.directionId]);

  useEffect(() => {
    if (props.stopId) {
      let selectedStopInfo = stops.find(singleStop => singleStop.value == props.stopId);
      setSelectedStop(selectedStopInfo);
    }
  }, [props.stopId, stops]);

  function handleChange(selectedOption){
    setSelectedStop(selectedOption);
    navigate(`/${props.routeId}/direction/${props.directionId}/stop/${selectedOption.value}`)
  }

  return (
    <Select 
      value={seletedStop}
      options={stops}
      onChange={handleChange}
      className="top-margin"
      id="stops-selector"
    />
  )
}

export default StopSelector;