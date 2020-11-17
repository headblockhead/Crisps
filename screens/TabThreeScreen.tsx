import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

var h = Dimensions.get('screen').height;
var w = Dimensions.get('screen').width;

export const Info = () => (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

            <View style={styles.smallinvisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.minititle}>This game is all about collecting,</Text>
            <Text style={styles.minititle}>and selling, CRISPS!</Text>
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
            {/* <Text style={styles.para}>Save your crisps to climb</Text>
            <Text style={styles.para}> the leaderboard and be number one!</Text> */}
            <Text style={styles.para}>Robots do the work for you.</Text>
            <Text style={styles.para}>Upgrade them to make them go faster!</Text>
            <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <Text style={styles.title}>Crisps</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.para}>Press the Button labeled 'Crisps' </Text>
            <Text style={styles.para}> (On the 'Crisps' tab) to make some crisps!</Text>
            <View style={styles.separatorsmallerr} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.title} >Diamonds</Text>
            <View style={styles.invisisep} lightColor="rgba(255,255,255,0)" darkColor="rgba(255,255,255,0)" />
            <Text style={styles.para}>You get a few diamonds every 1,000 crisps </Text>
            <Text style={styles.para}>made by robots and can spend it on </Text>
            <Text style={styles.para}>other perks</Text>
            <Text style={styles.parasmall}> (like doubling your current balance of crisps)</Text>
        </View>
    </ScrollView>
)
const styles = StyleSheet.create({
    separatorsmall: {
        marginVertical: w / 24,
        height: 1,
        width: '80%',
    },
    invisisep: {
        marginVertical: w / 34,
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
        marginVertical: 12.5,
        backgroundColor: 'transparent',
    },
    para: {
        fontSize: w / 24,

    },
    parabig: {
        fontSize: w / 24,

    },
    parasmall: {
        fontSize: w / 24.9,

    },
    title: {
        fontSize: w / 14,
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
        fontSize: w / 21,
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