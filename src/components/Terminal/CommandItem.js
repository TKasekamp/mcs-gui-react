import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommandHeader from './fragments/CommandHeader';
import CommandResponse from './fragments/CommandResponse';
import CommandData from './fragments/CommandData';
import CommandSchedule from './fragments/CommandSchedule';

class CommandItem extends Component {
    constructor() {
        super();
        this.state = {collapsed: true};

        this.switchCollapseState = this.switchCollapseState.bind(this);
    }

    switchCollapseState() {
        this.state.collapsed ? this.setState({collapsed: false}) : this.setState({collapsed: true});
    }

    render() {
        let otherData = '';
        if (!this.state.collapsed) {
            otherData = <div className="row">
                <CommandData userId={this.props.command.userId} id={this.props.command.id}
                             priority={this.props.command.priority}/>
                <CommandSchedule obcsSchedule={this.props.command.obcsSchedule}
                                 mcsSchedule={this.props.command.mcsSchedule}/>
            </div>;
        }

        return <div className="list-group-item callout callout-info">
            <CommandHeader submitTime={this.props.command.submitTime} status={this.props.command.status}
                           commandString={this.props.command.commandString}
                           responseTime={this.props.command.responseTime}
                           collapsed={this.state.collapsed}
                           switchCollapsed={this.switchCollapseState}/>
            <CommandResponse responseString={this.props.command.responseString}
                             responseTime={this.props.command.responseTime}/>
            {otherData}
        </div>
    }
}
;
CommandItem.propTypes = {
    command: PropTypes.shape({
        id: PropTypes.string.isRequired,
        commandString: PropTypes.string.isRequired,
        submitTime: PropTypes.number,
        responseTime: PropTypes.number,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        responseString: PropTypes.string,
        priority: PropTypes.string.isRequired,
        obcsSchedule: PropTypes.string.isRequired,
        mcsSchedule: PropTypes.string.isRequired,
    }).isRequired
};

export default CommandItem;
