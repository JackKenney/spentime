import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { NO_ACTIVITY, StoreState } from '../redux/types';
import { updateSelectedActivity } from '../redux/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    /** Slice of the redux store state. */
    selectedActivity: string,
    /** Update selected activity in store. */
    updateSelectedActivity: ((selectedActivity: string) => void)
}

class Selector extends Component<Props> {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => { this.props.updateSelectedActivity(NO_ACTIVITY); }}
                    containerStyle={{ flex: 1 }}
                >
                    <Text style={{ color: "#fff" }}>{this.props.selectedActivity}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (store: StoreState) => {
    const { selectedActivity } = store;
    return { selectedActivity };
};

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        updateSelectedActivity,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
