import React, { Component } from 'react';
import { Text, View } from 'react-native';

// redux
import { connect } from 'react-redux';
import { ActivityLog, NO_ACTIVITY, StoreState } from '../redux/types';

export interface Props {
    /** Slice of the redux store state. */
    selectedActivity: string,
    activityLog: ActivityLog,
}

export interface State {
    display: string,
    timer: NodeJS.Timeout,
}

class Clock extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        let timer = setInterval(this.updateDisplay, 5e3);
        let display;
        // if (props.selectedActivity == NO_ACTIVITY) {

        // }
        this.state = {
            display: "00:00",
            timer,
        };
    }

    updateDisplay = () => {
        const dates = this.props.activityLog[this.props.selectedActivity]

        const then: Date = dates[dates.length - 1][0];
        console.log(typeof (then), then)
        console.log(Object.getOwnPropertyNames(then))
        const delta = Date.now() - then.getMilliseconds();
        const hours = Math.floor(delta / 3.6e6)
        const minutes = Math.floor(delta / 6e5) % 60;
        const seconds = Math.floor(delta / 1e3) % 60;
        const display = hours + ":" + minutes + ":" + seconds;
        this.setState({ display })
    }

    render() {
        return (
            <View>
                <Text style={{ color: 'white' }}>{this.state.display}</Text>
            </View>
        );
    }
}

const mapStateToProps = (store: StoreState) => {
    const { selectedActivity, activityLog } = store;
    return { selectedActivity, activityLog };
};

export default connect(mapStateToProps)(Clock);
