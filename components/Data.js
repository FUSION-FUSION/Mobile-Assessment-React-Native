import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

const Data = () => {
    const data = [
        {
            state: "Same State",
            location: "Deliveries within the state",
            mode: require("../assets/Shipify-Assets/ic-bike.png"),
            road: require("../assets/Shipify-Assets/ic-road-same-state.png"),
        },
        {
            state: "Inter State",
            location: "Deliveries within the state",
            mode: require("../assets/Shipify-Assets/Delivery-Van.png"),
            road: require("../assets/Shipify-Assets/ic-road-interstate.png"),
            logo: require("../assets/Shipify-Assets/ic-curve.png"),
        },
        {
            state: "Charter",
            location: "Request for a new vehicle",
            mode: require("../assets/Shipify-Assets/ic-truck.png"),
            road: require("../assets/Shipify-Assets/ic-road-interstate.png"),
            logo: require("../assets/Shipify-Assets/ic-curve.png"),
        },
        {
            state: "International",
            location: "Deliveries within the state",
            mode: require("../assets/Shipify-Assets/ic-aeroplane.png"),
            coming: "coming soon",
        },
    ];
    return (
        <View
            style={{
                marginLeft: 20,
                paddingTop: 10,
            }}
        >
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.wrapper(item.coming)}>
                            <View style={styles.container}>
                                {item.logo ? (
                                    <Image
                                        source={require("../assets/Shipify-Assets/ic-curve.png")}
                                        style={{ width: "100%", height: "13%" }}
                                    />
                                ) : (
                                    <Text></Text>
                                )}

                                <Text style={styles.state}>{item.state}</Text>

                                <Text style={styles.underline}></Text>

                                <Text style={{ marginLeft: 10 }}>
                                    {item.location}
                                </Text>

                                <View style={{ width: "100%" }}>
                                    {item.road ? (
                                        <Image
                                            source={item.road}
                                            style={styles.road}
                                        />
                                    ) : (
                                        <Text></Text>
                                    )}

                                    {item.mode ===
                                    require("../assets/Shipify-Assets/ic-aeroplane.png") ? (
                                        <Image
                                            source={item.mode}
                                            style={styles.mode}
                                            resizeMode="cover"
                                        />
                                    ) : (
                                        <Image
                                            source={item.mode}
                                            style={{
                                                width: "45%",
                                                height: "45%",
                                                top: "-49%",
                                            }}
                                            resizeMode="cover"
                                        />
                                    )}
                                </View>

                                <View style={styles.coming}>
                                    {item.coming ? (
                                        <Text></Text>
                                    ) : (
                                        <Image
                                            source={require("../assets/Shipify-Assets/ic-right-black.png")}
                                            style={{
                                                width: 15,
                                                height: 15,
                                            }}
                                        />
                                    )}
                                </View>

                                {item.coming && (
                                    <Text style={styles.opaque}>
                                        {item.coming}
                                    </Text>
                                )}
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: (coming) => ({
        flex: 1,
        opacity: coming ? 0.4 : 1,
    }),
    container: {
        backgroundColor: "#ffffff",
        height: 150,
        paddingTop: 10,
        marginBottom: 25,
        width: "90%",
    },
    state: {
        marginLeft: 10,
        color: "#2d2d2d",
        fontWeight: "700",
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
    road: {
        width: "100%",
        height: "55%",
        top: 5,
    },
    mode: {
        width: "80%",
        height: "70%",
        top: "-10%",
    },
    coming: {
        position: "absolute",
        bottom: 5,
        right: 5,
        backgroundColor: "#ffffff",
        paddingHorizontal: 3,
        borderRadius: 15,
        paddingVertical: 3,
    },
    opaque: {
        backgroundColor: "#f8f8fa",
        top: -60,
        textAlign: "center",
        borderRadius: 10,
        right: 0,
        marginLeft: 60,
        color: "black",
    },
});
export default Data;
