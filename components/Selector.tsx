import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// redux
import { connect } from 'react-redux'
import { StoreState } from '../redux/types'

export interface Props {
    /** Slice of the redux store state. */
    selectedActivity: number,
}

class Selector extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={{ color: "#fff" }}>{this.props.selectedActivity}</Text>
            </View>
        );
    }
}

const mapStateToProps = (store: StoreState) => {
    const { selectedActivity } = store;
    return { selectedActivity }
}

export default connect(mapStateToProps)(Selector)