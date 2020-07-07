import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/error_cat.jpg';

const NotFound = () => {
    return (
        <div className="row h-75 sidebar align-items-center">
            <div className="col-md-3 order-md-3">
                <img className="float-right" src={img} alt="error_cat.jpg"/>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} className="text text-secondary flex-column col-md-6 order-md-2">
                <p className="display-1 text-uppercase">Sorry</p>
                <h1 className="my-2 text-lowercase">We couldn't find that page</h1>
                <h2 className="my-4">Go to <Link to="/home">Shop App's home page</Link>.</h2>
            </div>
            <div className="col-md-3 order-md-1"/>
        </div>
    )
}

export default NotFound