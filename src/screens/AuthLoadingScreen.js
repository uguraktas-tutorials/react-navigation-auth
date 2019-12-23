import React, { PureComponent } from 'react';
import {
    ActivityIndicator,
    View,
    Text
} from 'react-native';

export default class AuthLoadingScreen extends PureComponent {

    componentDidMount() {
        this.props.navigation.navigate(true ? 'App' : 'Auth');
    }

    render() {
        return (
            <View>
                <ActivityIndicator />
                <Text>sadsdsd</Text>
            </View>
        );
    }
}