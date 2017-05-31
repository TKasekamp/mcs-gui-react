import React, {Component} from 'react';
import {Link} from 'react-router';

class Sidebar extends Component {

    handleClick(e) {
        e.preventDefault();
        e.target.parentElement.classList.toggle('open');
    }

    activeRoute(routeName) {
        // eslint-disable-next-line
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    }

    // secondLevelActive(routeName) {
    //   return this.props.location.pathname.indexOf(routeName) > -1 ?
    // "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    // }

    render() {
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to={'/dashboard'} className="nav-link" activeClassName="active"><i
                                className="icon-speedometer"></i> Dashboard </Link>
                            <Link to={'/com'} className="nav-link" activeClassName="active"><i
                                className="icon-graph"></i> COM subsystem </Link>
                            <Link to={'/terminal'} className="nav-link" activeClassName="active"><i
                                className="icon-direction"></i> Terminal <span
                                className="badge badge-info">NEW</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
