import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export const Info = () => (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

            <View style={styles.smallinvisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.minititle}>This game is all about collecting,</Text>
      <Text style={styles.minititle}>and selling, circuit boards!</Text>
      <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.title}>Tutorial:</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />

            <Text style={styles.parabig}>This game has one (and only one) objective:</Text>
            <Text style={styles.parabig}>GET AS MANY CRISPS</Text>
            <Text style={styles.parabig}>AS POSSIBLE! </Text>
            <Text></Text>
            <Text style={styles.para}>Use the shop to buy equipment and </Text>
            <Text style={styles.para}> speed up making your crisps.</Text>
            <Text></Text>
            <Text style={styles.para}>Save your crisps to climb</Text>
            <Text style={styles.para}> the leaderboard and be number one!</Text>

            <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <Text style={styles.title}>Crisps :</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.para}>Press the Button at the bottom of the screen</Text>
            <Text style={styles.para}> (On the 'Crisps' tab) to make Crisps!</Text>
            <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.title} >Diamonds:</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.para}>You get a few diamonds every 1,000 Crisps </Text>
            <Text style={styles.para}>made and can spend it on other perks</Text>
            <Text style={styles.parasmall}> (like doubling your current balance of crisps)</Text>
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
    smallinvisisep: {
        marginVertical: 1,
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
    parasmall: {
        fontSize: 12.5,

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
    minititle: {
        fontSize: 15,
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