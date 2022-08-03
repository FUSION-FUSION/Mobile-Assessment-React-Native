import { Text, View, ScrollView, FlatList, TouchableOpacity, StyleSheet, Pressable, Image, ImageBackground } from 'react-native'



const DashboardScreen = () => {
    return (
        <View style={styles.background}>
            <View style={styles.detailsContainer}>
                <Text style={styles.nameText}>Hello, John</Text>
                <ImageBackground source={require("../../assets/ic-notification.png")} style={styles.notification}/>
            </View>
            
            <ImageBackground style={styles.balanceContainer} source={require('../../assets/bg-dashboard-balance.png')}>
                <Text style={styles.balText}>Total Balance</Text>
                <View styles={styles.topupContainer}>
                    <Text style={styles.balance}>$50,000</Text>
                    <Pressable style={styles.topupBtn}>
                        <Text style={styles.topupText}>Top up</Text>
                    </Pressable>
                </View>
            </ImageBackground>
            
            <View style={styles.trackContainer}>
                <Text>Track your waybill</Text>
                <View style={styles.searchBar}>
                    <Pressable>
                        <Text>Track</Text>
                    </Pressable>
                </View>

            </View>
            <View>
                <Text>Send a Package</Text>
            </View>
            <View>
                <View></View>
                <View></View>
                <View></View>
                <View></View>
            </View>
            <View>
                <Text>Other Actions</Text>
            </View>
            <View>
                <View></View>
                <View></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F8F8FA",
    },
    balance: {
       fontSize: 20,
       fontWeight: "600",
       marginTop: 4,
       marginLeft: 20,
       color: "#1F1F1F"
    },
    balText: {
       fontSize: 12,
       fontWeight: "400",
       marginTop: 14,
       marginLeft: 20,
       color: "#1F1F1F"

    },
    balanceContainer: {
        height: 80,
        backgroundColor: "#ffffff",
        marginTop: 30,
        marginHorizontal: 22,
        borderRadius: 20
    },
    detailsContainer: {
        marginTop: 60,
        flexDirection: "row"
    },
    nameText: {
        color: "#1F1F1F",
        fontSize: 20,
        fontWeight: "600",
    },
    topupBtn: {
        height: 34,
        width: 94,
        backgroundColor: "#46A5BA",
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center"

    },
    topupContainer: {
        flexDirection: "row",
    },
    topupText: {
        fontSize: 12,
        color: "#ffffff",
        fontWeight: "500"
    },
    trackContainer: {
        height: 136,
        backgroundColor: "#ffffff",
        marginTop: 30,
        marginHorizontal: 22,
        borderRadius: 20,
        alignItems: "center"
    }

})

export default DashboardScreen;