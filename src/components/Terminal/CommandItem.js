import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommandHeader from './fragments/CommandHeader';
import CommandResponse from './fragments/CommandResponse';
import CommandData from './fragments/CommandData';

class CommandItem extends Component {
    constructor() {
        super();
        this.state = {collapsed: true};

        this.switchCollapseState = this.switchCollapseState.bind(this);
    }

    switchCollapseState() {
        this.state.collapsed ? this.setState({collapsed: false}) : this.setState({collapsed: true});
    }

    // TODO move away
    getCalloutClass() {
        switch (this.props.command.status) {
            case ('IN_FLIGHT'):
                return '';
            case ('FAILED'):
                return 'callout-danger';
            case ('RESPONSE_RECEIVED'):
                return 'callout-success';
            default:
                return 'callout-primary';
        }
    }

    render() {
        let otherData = '';
        if (!this.state.collapsed) {
            otherData = <div className="row">
                <CommandData userId={this.props.command.userId} id={this.props.command.id}
                             priority={this.props.command.priority} prototypeId={this.props.command.prototypeId}/>
            </div>;
        }

        const calloutClass = this.getCalloutClass();
        return <div className={'list-group-item callout ' + calloutClass}>
            <CommandHeader submitTime={this.props.command.submitTime} status={this.props.command.status}
                           body={this.props.command.body}
                           collapsed={this.state.collapsed}
                           switchCollapsed={this.switchCollapseState}/>
            <CommandResponse responseString={this.props.command.responseString}
                             responseTime={this.props.command.responseTime}/>
            {otherData}
        </div>;
    }
}

CommandItem.propTypes = {
    command: PropTypes.shape({
        id: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        prototypeId: PropTypes.number.isRequired,
        submitTime: PropTypes.string,
        responseTime: PropTypes.string,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        responseString: PropTypes.string,
        priority: PropTypes.string.isRequired
    }).isRequired
};

export default CommandItem;
