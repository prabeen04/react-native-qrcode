import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import QRCode from 'react-native-qrcode';

class QRCoder extends Component {
    render() {
        return (
            <View>
                <QRCode
                    value={this.props.code || 'prabeen'}
                    size={this.props.size || 200}
                    bgColor={this.props.bgColor || 'purple'}
                    fgColor={this.props.fgColor || 'white'} />
            </View>
        )
    }
}
export default QRCoder;
