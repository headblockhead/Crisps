import { WebBrowser } from 'expo';
import * as React from 'react';
import { ScrollView, StyleSheet, Linking, useColorScheme, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

const getButtonColors = (scheme: string): string => {
    if (scheme === "dark") {
        return "red";
    }
    return "rgb(200,0,0)"
}

const getButtonColor = (colorScheme: string) => {
    const color = getButtonColors(colorScheme);
    return color
}


export const Credits = (reset: () => void) => (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Text style={styles.title}>Credits</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.parabig}>Here are the credits for the authors of some</Text>
            <Text style={styles.parabig}> sounds used in the game and the</Text>
            <Text style={styles.parabig}>developers behind the game.</Text>
            <Text></Text>
            <Text style={styles.title}>Sounds</Text>
            <Text></Text>
            <Text style={styles.para}>The sound made when purchasing an upgrade </Text>
            <Text style={styles.para}> or enhancement was made by Muska666. </Text>
            <Text style={styles.para}> Source url:</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.parasmall}>http://soundbible.com/1997-Cha-Ching-Register.html</Text>
            <Text></Text>
            <Text style={styles.para}>The sound made when getting a crisp</Text>
            <Text style={styles.para}>was made by Headblockhead. </Text>
            <Text style={styles.para}>(By literally eating crisps)</Text>
            <Text></Text>
            <Text style={styles.title}>Licence</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.parasmall}>Cha-Ching Register:</Text>
            <Text style={styles.parasmall}>https://creativecommons.org/licenses/by/3.0/legalcode</Text>
            <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <TouchableOpacity activeOpacity= {0.5} style={styles.EVIL} onPress={reset}>
            <Text style={styles.BIGEVIL}>RESET ALL DATA</Text>
            </TouchableOpacity>
        </View>
    </ScrollView >
)
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'black',
    },
    parasmall: {
        fontSize: 11.5,

    },
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
    BIGEVIL: {
        fontSize: 40,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red'
    },
    EVIL: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(100,0,0,0.5)'
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