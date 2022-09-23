import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DirectionPage from './components/direction-page';
import StopPage from './components/stop-page';
import StopPageResults from './components/stop-results-page';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/:routeId/direction",
    element: <DirectionPage />
  },
  {
    path: "/:routeId/direction/:directionId/stop/",
    element: <StopPage />
  },
  {
    path: "/:routeId/direction/:directionId/stop/:stopId",
    element: <StopPageResults />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
