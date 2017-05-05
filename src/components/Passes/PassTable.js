import React from 'react';
import PropTypes from 'prop-types';
import Pass from './Pass';
const PassTable = (props) => {
    const passElements = props.passes.map((pass) => {
        return (
            <Pass key={pass.id} groundStation={pass.groundStation} maxElevation={pass.maxElevation}
                  id={pass.id} aos={pass.aos} los={pass.los}/>
        );
    });
    return (
        <div className="card">
            <div className="card-header">
                <i className="fa fa-align-justify"/> Satellite passes
            </div>
            <div className="card-block">
                {props.fetchState.inFlight ? 'Getting passes...' : ''}
                <table className="table table-bordered table-striped table-sm">
                    <thead>
                    <tr>
                        <th>AOS</th>
                        <th>LOS</th>
                        <th>Max elevation</th>
                        <th>Ground station</th>
                    </tr>
                    </thead>
                    <tbody>
                    {passElements}
                    </tbody>
                </table>
                <nav>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                        <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

PassTable.propTypes = {
    passes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        aos: PropTypes.number.isRequired,
        los: PropTypes.number.isRequired,
        maxElevation: PropTypes.number.isRequired,
        groundStation: PropTypes.string.isRequired,

    })).isRequired,
    fetchState: PropTypes.shape({
        inFlight: PropTypes.bool.isRequired,
        error: PropTypes.string
    }).isRequired
};

export default PassTable;
