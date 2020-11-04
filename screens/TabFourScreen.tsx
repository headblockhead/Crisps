import * as React from 'react';
import { ScrollView, StyleSheet, Linking, useColorScheme, Button } from 'react-native';
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


export const Credits = (colorScheme: string) => (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>


            <Text style={styles.title}>Credits:</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.parabig}>Here are the credits for the authors of some sounds used in the game and the developer behind the game.</Text>
            <Text></Text>

            <Text style={styles.title}>Sounds:</Text>
            <Text></Text>
            <Text style={styles.para}>The sound made when purchasing an upgrade or enhancement was made by Muska666. See below for source url: </Text>
            <Button color={getButtonColor(colorScheme)} onPress={() => { Linking.openURL("https://soundbible.com/1997-Cha-Ching-Register.html"); }} title= "https://soundbible.com/1997-Cha-Ching-Register.html"/>
            <Text></Text>

            <Text style={styles.title}>Licence:</Text>
            <Button color={getButtonColor(colorScheme)} onPress={() => { Linking.openURL("https://creativecommons.org/licenses/by/3.0/legalcode"); }} title= "https://creativecommons.org/licenses/by/3.0/legalcode"/>

            <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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