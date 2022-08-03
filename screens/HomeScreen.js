import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    Pressable,
} from "react-native";
import React from "react";
import Data from "../components/Data";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/Shipify-Assets/ic-menu.png")}
                />
                <Text style={{ fontSize: 20, fontWeight: "900" }}>
                    Hello, John.
                </Text>
                <Image
                    source={require("../assets/Shipify-Assets/ic-notification.png")}
                    style={{ width: 20, height: 20 }}
                />
            </View>

            <View style={styles.balance}>
                <View>
                    <Text>Total Balance</Text>
                    <Text style={{ fontWeight: "800" }}># 50 000</Text>
                </View>

                <View style={{ position: "relative" }}>
                    <View style={styles.balanceBtn}>
                        <Text style={{ color: "#ffffff", fontSize: 12 }}>
                            Top Up
                        </Text>
                        <Image
                            source={require("../assets/Shipify-Assets/ic-greater-then.png")}
                            style={{ width: 11, height: 11, marginLeft: 3 }}
                        />
                    </View>
                    <Image
                        source={require("../assets/Shipify-Assets/bg-dashboard-balance.png")}
                        style={styles.balanceImg}
                    />
                </View>
            </View>

            <View style={styles.trackTextContainer}>
                <Text style={styles.trackText}>Track your waybill</Text>
                <View style={styles.input}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Image
                            source={require("../assets/Shipify-Assets/ic-search.png")}
                            style={styles.search}
                        />
                        <TextInput placeholder="Waybill Number" />
                    </View>

                    <Pressable
                        style={styles.trackBtn}
                        onPress={() => navigation.navigate("LocationScreen")}
                    >
                        <Text style={{ color: "#ffffff" }}>Track</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{ paddingTop: 20 }}>
                <Text
                    style={{ fontWeight: "800", fontSize: 20, marginLeft: 20 }}
                >
                    Send a Package
                </Text>
                <Data />
            </View>

            <View style={styles.bottomWrapper}>
                <View style={styles.card}>
                    <Text
                        style={{
                            marginLeft: 10,
                            color: "#2d2d2d",
                            fontWeight: "700",
                        }}
                    >
                        Waybill History
                    </Text>
                    <Text style={styles.underline}></Text>
                    <Text style={{ marginLeft: 10, color: "#c6c6c7" }}>
                        Records all of your waybills
                    </Text>

                    <View style={styles.arrowBtn}>
                        <Image
                            source={require("../assets/Shipify-Assets/ic-right.png")}
                            style={{
                                width: 15,
                                height: 15,
                            }}
                        />
                    </View>
                </View>

                <View style={styles.card}>
                    <Text
                        style={{
                            marginLeft: 10,
                            color: "#2d2d2d",
                            fontWeight: "700",
                        }}
                    >
                        Get Help
                    </Text>
                    <Text style={styles.underline}></Text>
                    <Text style={{ marginLeft: 10, color: "#c6c6c7" }}>
                        Get help and support from our team
                    </Text>

                    <View style={styles.arrowBtn}>
                        <Image
                            source={require("../assets/Shipify-Assets/ic-right.png")}
                            style={{
                                width: 15,
                                height: 15,
                            }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        width: "80%",
        borderColor: "#46a5ba",
        borderRadius: 15,
        backgroundColor: "#ffffff",
        textAlign: "left",
        fontSize: 14,
        marginTop: 10,
        borderWidth: 1,
        marginHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 2,
        paddingLeft: 10,
        paddingRight: 2,
    },
    wrapper: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#f8f8fa",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        paddingBottom: 20,
    },
    balance: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        backgroundColor: "#ffffff",
        paddingVertical: 13,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    balanceBtn: {
        backgroundColor: "#46a5ba",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        borderRadius: 15,
        paddingVertical: 5,
        zIndex: 9999,
        top: 8,
    },
    balanceImg: {
        width: "280%",
        height: "150%",
        position: "absolute",
        right: -10,
        bottom: -17,
    },
    trackTextContainer: {
        marginTop: 20,
        backgroundColor: "#ffffff",
        marginHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 15,
    },
    trackText: {
        textAlign: "center",
        fontWeight: "800",
        fontSize: 16,
    },
    trackBtn: {
        backgroundColor: "#46a5ba",
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 10,
        paddingVertical: 8,
    },
    search: {
        width: 12,
        height: 12,
        marginRight: 3,
    },
    bottomWrapper: {
        flexDirection: "row",
        marginLeft: 20,
        paddingBottom: 150,
    },
    card: {
        backgroundColor: "#ffffff",
        height: 100,
        paddingTop: 10,
        marginRight: 15,
        marginBottom: 25,
        width: "45%",
    },
    underline: {
        borderWidth: 2,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: "#46a5ba",
        width: "10%",
        height: "7%",
        marginTop: 2,
        marginLeft: 10,
    },
    arrowBtn: {
        position: "absolute",
        bottom: 5,
        right: 5,
        backgroundColor: "#000",
        paddingHorizontal: 3,
        borderRadius: 15,
        paddingVertical: 3,
    },
});
export default HomeScreen;
