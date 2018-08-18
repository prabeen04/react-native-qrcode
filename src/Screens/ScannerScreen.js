import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import QRCoder from '../components/utils/QRCoder';

class ScannerScreen extends Component {
    state = {
        text: '',
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ text: text })}
                    value={this.state.text}
                />
                <QRCoder
                    code={this.state.text}
                    size={200}
                    bgColor='red'
                    fgColor='white' />
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
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
})
