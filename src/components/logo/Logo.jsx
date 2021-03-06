import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";


const Logo = () => {
    return(
        <div className="header-logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
                <h1>BzeBee</h1>
            </Link>
        </div>
    )
}

Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
