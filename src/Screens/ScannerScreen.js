import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Linking } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScannerScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <QRCodeScanner
                    onRead={this.onSuccess.bind(this)}
                    topContent={
                        <Text style={styles.centerText}>
                            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code
                            </Text> on your computer and scan the QR code. </Text>
                    }
                    bottomContent={
                        <TouchableOpacity style={styles.buttonTouchable}>
                            <Text style={styles.buttonText}>OK. Got it!</Text>
                        </TouchableOpacity>
                    }
                />
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
