import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

class ScannerScreen extends Component {
    state = {
        text: '',
    };
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
