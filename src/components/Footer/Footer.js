import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
                <span className="float-right">Powered by <a href="http://coreui.io">CoreUI</a></span>
            </footer>
        );
    }
}

export default Footer;
