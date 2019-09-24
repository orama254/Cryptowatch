import React from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1 className="NotFound-title">Oops! The Page you are Looking for is not found </h1>

            <Link to="/" className="NotFound-link"> Go to Homepage</Link>
        </div>

    );
}


export default NotFound;
