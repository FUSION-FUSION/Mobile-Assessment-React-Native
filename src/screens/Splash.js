import { StyleSheet, Image, View } from "react-native";


const Splash = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/splash_logo.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },

   
})


export default Splash;