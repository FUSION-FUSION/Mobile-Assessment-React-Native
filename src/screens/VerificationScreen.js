import { View, Text, TextInput, Pressable, StyleSheet} from 'react-native'


const VerificationScreen = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.verText}>Verification!</Text>
                <Text style={styles.verMsg}>We sent you an SMS code on +2348108960610.</Text>    
            </View>
            <View>
                <TextInput />
                <TextInput />
                <TextInput />
                <TextInput />
                <TextInput />
            </View>
            <View>
                <Text>Resend</Text>
            </View>
            <View>
                <Pressable>

                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    verText: {

    },
    verMsg: {

    }
})

export default VerificationScreen;