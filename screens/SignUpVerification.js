import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import bgImage from '../assets/bg-app-cloud.png';

export default function SignUpVerification({ navigation }) {
  // verification code
  const [code, setCode] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const insertDigit = (digit, position) => {
    setCode((code) => ({ ...code, [position]: digit }));
  };

  const verify = () => {
    // verify code
    // ...
    navigation.navigate('account-created');
  };

  // countdown code expiration (59 secs)
  const [expired, setExpired] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(59);

  // start timer on mount
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    setTimerId(interval);
    return () => clearInterval(interval);
  }, []);

  // Tick
  const tick = () => {
    setTimeLeft((currentTime) => {
      if (currentTime > 0) {
        return currentTime - 1;
      } else {
        setExpired(true);
        clearInterval(timerId);
        return 0;
      }
    });
  };

  // resend code (count down again)
  const resend = () => {
    if (timeLeft > 0) {
      setTimeLeft(59);
    } else {
      clearInterval(timerId);
      setTimeLeft(59);
      const newInterval = setInterval(tick, 1000);
      setTimerId(newInterval);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['#cbd5e1', '#e2e8f0', '#f8fafc']}
          style={styles.container}
        >
          <ImageBackground
            source={bgImage}
            style={styles.bgImage}
            resizeMode="contain"
          />
          <View style={styles.content}>
            <Text style={styles.heading}>Verification!</Text>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>We sent you an </Text>
              <Text style={styles.highlightedDescription}>SMS</Text>
              <Text style={styles.description}> code on number </Text>
              <Text style={styles.highlightedDescription}>+2348133445566</Text>
            </View>
            {/* Input Field */}
            <View style={styles.inputField}>
              <TextInput
                keyboardType="numeric"
                value={code[1]}
                onChangeText={(digit) => insertDigit(digit, 1)}
                style={styles.inputBox}
              />
              <TextInput
                keyboardType="numeric"
                value={code[2]}
                onChangeText={(digit) => insertDigit(digit, 2)}
                style={styles.inputBox}
              />
              <TextInput
                keyboardType="numeric"
                value={code[3]}
                onChangeText={(digit) => insertDigit(digit, 3)}
                style={styles.inputBox}
              />
              <TextInput
                keyboardType="numeric"
                value={code[4]}
                onChangeText={(digit) => insertDigit(digit, 4)}
                style={styles.inputBox}
              />
              <TextInput
                keyboardType="numeric"
                value={code[5]}
                onChangeText={(digit) => insertDigit(digit, 5)}
                style={styles.inputBox}
              />
            </View>
            {/* Code Expiration Timer */}
            <View style={styles.timerBox}>
              <Text style={styles.timer}>
                {expired
                  ? 'Code expired'
                  : 'Code expires in ' + '00:' + `0${timeLeft}`.slice(-2)}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={resend}
                activeOpacity={0.6}
                style={styles.resendBtn}
              >
                <Text style={styles.resendBtnText}>Resend Code</Text>
              </TouchableOpacity>
              <TouchableHighlight
                onPress={verify}
                activeOpacity={1}
                underlayColor="#3a8c9e"
                style={styles.proceedBtn}
              >
                <Text style={styles.proceedBtnText}>
                  <AntDesign name="arrowright" size={34} color="white" />
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: 350,
    position: 'absolute',
    top: 0,
  },
  content: {
    padding: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: '900',
    color: '#4b5563',
    paddingTop: 50,
  },
  descriptionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  description: {
    fontSize: 20,
    color: '#4b5563',
  },
  highlightedDescription: {
    fontSize: 20,
    color: '#46a5ba',
  },
  inputField: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
  },
  inputBox: {
    width: 50,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 30,
    fontWeight: '600',
    color: '#4b5563',
  },
  timerBox: {
    alignSelf: 'flex-end',
    padding: 10,
    paddingTop: 0,
  },
  timer: {
    fontSize: 16,
    color: '#b91c1c',
  },
  resendBtn: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4b5563',
  },
  proceedBtn: {
    width: 80,
    height: 80,
    backgroundColor: '#46a5ba',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 40,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  proceedBtnText: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
});
