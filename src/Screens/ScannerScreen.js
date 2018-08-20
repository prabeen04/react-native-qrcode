import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Linking } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScannerScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}
export default ScannerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
