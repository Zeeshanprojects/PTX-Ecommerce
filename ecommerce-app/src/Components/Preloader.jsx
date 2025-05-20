import React from 'react';
import './Preloader.css';

export default function Preloader() {
  return (
    <div className="preloader-container">
      <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
