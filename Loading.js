import React from 'react';
import { Alert, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    const warning = () => {
        Alert.alert('Ещё немного времени...');
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <Text onPress={warning} style={styles.text}>Загрузка погоды...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00c369',
    },
    text: {
        color: '#e2e2e2',
        fontSize: 24,
    }
})