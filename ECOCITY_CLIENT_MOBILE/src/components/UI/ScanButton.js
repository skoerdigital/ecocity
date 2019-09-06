import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback, StyleSheet, Animated, Easing, View } from 'react-native';
import colors from '../../globals/colors';

export default class ScanButton extends Component{
    constructor(props, context) {
        super(props, context);

        const maxOpacity = 0.12;

        this.state = {
            maxOpacity,
            scaleValue: new Animated.Value(0.01),
            opacityValue: new Animated.Value(maxOpacity),
        };

        this.renderRippleView = this.renderRippleView.bind(this);
        this.onPressedIn = this.onPressedIn.bind(this);
        this.onPressedOut = this.onPressedOut.bind(this);
    }

    onPressedIn() {
        Animated.timing(this.state.scaleValue, {
            toValue: 1,
            duration: 225,
            easing: Easing.bezier(0.0, 0.0, 0.2, 1),
        }).start();
    }

    onPressedOut() {
        setTimeout(()=> this.props.openScannerHandler(), 300)
        Animated.timing(this.state.opacityValue, {
            toValue: 0,
        }).start(() => {
            
            this.state.scaleValue.setValue(0.01);
            this.state.opacityValue.setValue(this.state.maxOpacity);
        });
    }

    renderRippleView() {
        const { size } = this.props;
        const { scaleValue, opacityValue } = this.state;

        const rippleSize = size * 2;

        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: rippleSize,
                    height: rippleSize,
                    borderRadius: rippleSize / 2,
                    marginTop: -50,
                    marginLeft: -50,
                    transform: [
                        { scale: scaleValue }
                    ],
                    opacity: opacityValue,
                    backgroundColor: colors.GREEN3,
                }}
            />
        );
    }

    render(){
        return(
            <TouchableWithoutFeedback 
                onPressIn={this.onPressedIn}
                onPressOut={this.onPressedOut}
                // onPress={() => this.props.openScannerHandler() }
                >

                        <View>
                        {this.renderRippleView()}
                            <Image
                                style={styles.scanButton}
                                source={images.SCAN_BUTTON}/>
                        </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    scanButton: {
        width: 100,
        height: 100
    }, 
})