import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Line = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Text style={styles.line}></Text>
            <Text style={styles.line}></Text>
            <Text style={styles.line}></Text>
            <Text style={styles.line}></Text>
            <Text style={styles.line}></Text>
            <Text style={styles.line}></Text>
            <Text style={styles.line}></Text>
            <Text style={styles.line}></Text>
            <Text style={styles.line}></Text>
            <Text style={styles.line}></Text>
            <Text style={styles.line}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        borderWidth: 1,
        borderColor: "#ffffff",
        borderBottomWidth: 0,
        borderRightWidth: 0,
        width: 5,
        borderLeftWidth: 0,
        top: 8,
        marginRight: 2,
    },
});

export default Line;
