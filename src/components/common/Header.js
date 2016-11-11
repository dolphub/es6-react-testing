import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
                    <li><Link activeClassName="active" to="/about">About</Link></li>
                    <li><Link activeClassName="active" to="/courses">Courses</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
