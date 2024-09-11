import React from "react";
import { Link } from 'react-router-dom';
import './MenuBtn.css'; // Import the CSS file

export function MenuBtn() {
    return (
        <div>
            <Link to="/menu">
                <button type="button" className="custom-btn btn-lg">Our Full Menu</button>
            </Link>
        </div>
    )
}
