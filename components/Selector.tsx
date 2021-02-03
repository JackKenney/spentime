import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StoreState } from '../redux/types';
import { updateSelectedActivity } from '../redux/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    /** Slice of the redux store state. */
    selectedActivity: number,
    /** Update selected activity in store. */
    updateSelectedActivity: ((selectedActivity: number) => void)
}

class Selector extends Component<Props> {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => { this.props.updateSelectedActivity(10); }}
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
