import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconsName: 'rainy',
        title: 'Возьмите зонтик',
        subtitle: 'Дождь',
        gradient: ['#02143b', '#0e43a9', '#9905a6']
    },
    Snow: {
        iconsName: 'snow',
        title: 'Пора лепить снеговиков',
        subtitle: 'Снег',
        gradient: ['#00cc39d9', '#0ea99b', '#05a697']
    },
    Thunderstorm: {
        iconsName: 'thunderstorm-outline',
        title: 'Лучше остаться дома',
        subtitle: 'Гроза',
        gradient: ['#000000e3', '#1b0000', '#034b44']
    },
    Dust: {
        iconsName: 'sunny-outline',
        title: 'Пейте больше',
        subtitle: 'Сухо',
        gradient: ['#cc8f00fc', '#a61505']
    },
    Clouds: {
        iconsName: 'cloudy-outline',
        title: 'Хорошая погода',
        subtitle: 'Облачно',
        gradient: ['#00cc39d9', '#0ea99b', '#05a697']
    },
    Clear: {
        iconsName: 'ios-partly-sunny-outline',
        title: 'Чистое небо',
        subtitle: 'Безоблачно',
        gradient: ['#00bfccd9', '#0585a66b#05a697']
    },
    Fog: {
        iconsName: 'cloudy-outline',
        title: 'Романтично',
        subtitle: 'туман',
        gradient: ['#505050', '#31716b']
    },
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle='light-content' />
            <View style={styles.halfContainer}>
                <Ionicons name={weatherOptions[condition].iconsName} size={96} color="#fff" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm', 'Rain', 'Dust', 'Fog', 'Snow', 'Clouds', 'Clear']).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    temp: {
        fontSize: 42,
        color: '#fff',
    },

    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontWeight: 300,
        fontSize: 30,
        color: '#fff',
        marginBottom: 20
    },

    subtitle: {
        color: '#fff',
        fontWeight: '600',
    },
})