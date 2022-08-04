import { StyleSheet, Image, View } from "react-native";


const Splash = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/splash_logo.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        
    },
    image: {
        resizeMode: "contain",
        width: 200,
        alignItems: 'center',
        justifyContent: 'center'    
    }

   
})


export default Splash;