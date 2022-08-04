import { Text, View, ScrollView, FlatList, TouchableOpacity, StyleSheet, Pressable, Image, ImageBackground } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'


const DashboardScreen = () => {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.detailsContainer}>
          <Ionicons name="menu" size={24} color="black" />
          <Text style={styles.nameText}>Hello, John</Text>
          <Image
            source={require("../../assets/ic-notification.png")}
            style={styles.notification}
          />
        </View>

        <ImageBackground
          style={styles.balanceContainer}
          source={require("../../assets/bg-dashboard-balance.png")}
        >
          <Text style={styles.balText}>Total Balance</Text>
          <Text style={styles.balance}>$50,000</Text>
          <Pressable style={styles.topupBtn}>
            <Text style={styles.topupText}>Top up</Text>
          </Pressable>
        </ImageBackground>

        <View style={styles.trackContainer}>
          <Text style={styles.track}>Track your waybill</Text>
          <View style={styles.searchBar}>
            <Image
              source={require("../../assets/ic-search.png")}
              style={styles.searchIcon}
            />
            <Text>Waybill number</Text>
            <Pressable style={styles.trackBtn}>
              <Text>Track</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.textcontainer}>
          <Text style={styles.sendText}>Send a Package</Text>
        </View>

        <View>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
        </View>

        <View style={styles.textcontainer}>
          <Text style={styles.sendText}>Other Actions</Text>
        </View>

        <View>
          <View></View>
          <View></View>
        </View>
      </ScrollView>
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
       color: "#1F1F1F",
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
        flexDirection: "row",
        marginLeft: 22
        
    },
    nameText: {
        color: "#1F1F1F",
        fontSize: 20,
        fontWeight: "600",
    },
    notification: {
        width: 20,
        height: 23,
        // marginLeft: 215
    },
    searchIcon: {
        height: 4,
        width: 6
    },
    sendText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#1F1F1F"
    },
    textcontainer:{
        marginHorizontal: 22,
        marginTop: 30
    },
    topupBtn: {
        height: 34,
        width: 94,
        backgroundColor: "#46A5BA",
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 210,

    },
    topupContainer: {
        flexDirection: "row",
    },
    topupText: {
        fontSize: 12,
        color: "#ffffff",
        fontWeight: "500"
    },
    track: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 20,
        color: "#1F1F1F"
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