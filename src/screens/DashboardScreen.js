import { Text, View, ScrollView, FlatList, TouchableOpacity, StyleSheet, Pressable, Image, ImageBackground } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FontAwesome } from "@expo/vector-icons";


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
          <View style={styles.topupContainer}>
            <Text style={styles.balance}>$50,000</Text>
            <Pressable style={styles.topupBtn}>
              <Text style={styles.topupText}>Top up</Text>
              <FontAwesome name="angle-double-right" size={20} color="white" />
            </Pressable>
          </View>
        </ImageBackground>

        <View style={styles.trackContainer}>
          <Text style={styles.track}>Track your waybill</Text>
          <View style={styles.searchBar}>
            <Image
              source={require("../../assets/ic-search.png")}
              style={styles.searchIcon}
            />
            <Text style={{ color: "#606060", fontSize: 14, marginLeft: -30 }}>
              Waybill Number
            </Text>
            <Pressable style={styles.trackBtn}>
              <Text style={{ color: "#ffffff" , fontSize: 14}}>Track</Text>
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
    color: "#1F1F1F",
  },
  balanceContainer: {
    height: 80,
    backgroundColor: "#ffffff",
    marginTop: 30,
    marginHorizontal: 22,
    borderRadius: 20,
  },
  detailsContainer: {
    marginTop: 60,
    flexDirection: "row",
    marginHorizontal: 22,
    justifyContent: "space-between",
  },
  nameText: {
    color: "#1F1F1F",
    fontSize: 20,
    fontWeight: "600",
  },
  notification: {
    width: 20,
    height: 23,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#46A5BA99",
    borderRadius: 17,
    height: 44,
    width: 250,
    alignItems: "center",
    color: "#606060",
  },
  searchIcon: {
    height: 14,
    width: 14,
    marginLeft: 15,
  },
  sendText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#1F1F1F",
  },
  textcontainer: {
    marginHorizontal: 22,
    marginTop: 30,
  },
  topupBtn: {
    height: 34,
    width: 88,
    backgroundColor: "#46A5BA",
    borderRadius: 17,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginRight: 22,
  },
  topupContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topupText: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "500",
  },
  track: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    color: "#1F1F1F",
  },
  trackBtn: {
    backgroundColor: "#46A5BA",
    borderRadius: 17,
    height: 38,
    width: 71,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 3


  },
  trackContainer: {
    height: 136,
    backgroundColor: "#ffffff",
    marginTop: 30,
    marginHorizontal: 22,
    borderRadius: 20,
    alignItems: "center",
  },
});

export default DashboardScreen;