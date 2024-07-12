import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/fonts/index';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './containers/Home';
import PrivacyPolicy from './containers/Privacy';
import TermsOfUse from './containers/TermsOfUse';

const router = createBrowserRouter([
  {
    path: "DollarScan-landing/",
    element: <Home/>,
  },
  {
    path: "DollarScan-landing/privacy-policy",
    element: <PrivacyPolicy/>,
  },
  {
    path: "DollarScan-landing/terms-of-use",
    element: <TermsOfUse/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
