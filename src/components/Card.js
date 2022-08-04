import { View, StyleSheet } from 'react-native'


const Card = (props) => {
    return (
        <View style={[props.elevated && styles.container,props.style]}>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        shadowColor: "#BEBEBE",
        elevation: 5,
        shadowRadius: 25
    }
})
export default Card;