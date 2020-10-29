import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

export const Info = () => (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Text style={styles.big}>Welcome!</Text>

            <View style={styles.separatorsmall} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <Text style={styles.title}>Tutorial:</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />

            <Text style={styles.parabig}>This game has one (and only one) objective:</Text>
            <Text style={styles.parabig}> GET AS MANY COOKIES AS POSSIBLE! </Text>
            <Text></Text>
            <Text style={styles.para}>The shop can be used to buy equipment and speed up getting your cookies.</Text>
            <Text></Text>
            <Text style={styles.para}>If you want to, you can save your cookies to climb</Text>
            <Text style={styles.para}> the leaderboard and be number one!</Text>

            <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <Text style={styles.title}>Cookies:</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.para}>Press the Button at the bottom of the screen</Text>
            <Text style={styles.para}> (Of the 'Cookies' tab) to get cookies!</Text>
            <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.title} >Diamonds:</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.para}>You get 1 diamond per 1,000 cookies </Text>
            <Text style={styles.para}> and can spend it on other perks</Text>
            <Text style={styles.para}> (like doubling your current cookie balance)</Text>
        </View>
    </ScrollView>
)
const styles = StyleSheet.create({
    separatorsmall: {
        marginVertical: 18,
        height: 1,
        width: '80%',
    },
    invisisep: {
        marginVertical: 8,
        height: 1,
        width: '80%',
    },
    tinyLogo: {
        width: 399,
        height: 100,
    },
    buttonsurround: {
        width: 310,
        height: 80,
        resizeMode: 'stretch',
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    scrollView: {
        marginVertical: 10.5,
        backgroundColor: 'transparent',
    },
    para: {
        fontSize: 13.5,

    },
    parabig: {
        fontSize: 14.5,

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    big: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    subtitle1: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    separatorsmallerr: {
        marginVertical: 8,
        height: 1,
        width: '80%',
    },
});