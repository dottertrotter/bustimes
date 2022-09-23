import '../App.css';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate, useParams } from "react-router-dom";

function DirectionSelector(props) {
  const navigate = useNavigate();
  const [directions, setDirections] = useState([]);
  const [seletedDirection, setSelectedDirection] = useState(null);

  useEffect(() => {
    fetch(`https://svc.metrotransit.org/nextripv2/directions/${props.routeId}`)
      .then((response) => response.json())
      .then((data) => {
        setDirections(data.map(directionInfo =>{
          return {
            value: directionInfo.direction_id, 
            label: directionInfo.direction_name 
          }
        }));
      });
  }, [props.routeId]);

  useEffect(() => {
    if (props.directionId) {
      let selectedDirectionInfo = directions.find(direction => direction.value == props.directionId);
      setSelectedDirection(selectedDirectionInfo);
    }
  }, [props.directionId, directions]);

  function handleChange(selectedOption){
    setSelectedDirection(selectedOption);
    navigate(`/${props.routeId}/direction/${selectedOption.value}/stop`)
  }

  return (
    <Select 
      value={seletedDirection}
      options={directions}
      onChange={handleChange}
    />
  )
}

export default DirectionSelector;