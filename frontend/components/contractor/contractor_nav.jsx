import React from 'react';
import { Link } from 'react-router-dom';

const ContractorNavBar = () => (
  <nav className="contractor-nav-bar">
    <div>
      <h3>homeco</h3>
      <img width="100%" src="https://image.flaticon.com/icons/svg/125/125296.svg" alt="homeco"></img>
    </div>
    <ul className="nav-links">
      <li>My Tasks</li>
      <li>Schedule</li>
      <li>Finished Tasks</li>
      <li>Payment</li>
    </ul>

  </nav>
);

export default ContractorNavBar;
