import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ destination = '/' }) => {
  return (
    <div className="flex justify-center bg-pink-600 py-5">
      <Link to={destination}>
        <h1>Home</h1>
      </Link>
    </div>
  );
};

export default Navigation;
