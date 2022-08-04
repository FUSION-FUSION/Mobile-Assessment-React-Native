import {
  ImageBackground,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  View,
  useWindowDimensions,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { verticalScale } from "react-native-size-matters";
const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

import { useNavigation } from "@react-navigation/native";
import DistanceTracker from "../../Sections/Trackpage/DistanceTracker";
import RouteTracker from "../../Sections/Trackpage/RouteTracker";
const TrackScreen = () => {
  const { goBack } = useNavigation();
  const dimensions = useWindowDimensions();

  const top = useSharedValue(dimensions.height);

  const style = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value - 100, SPRING_CONFIG),
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value - 100;
    },
    onActive(event, context) {
      top.value = context.startTop + event.translationY;
    },
    onEnd() {
      if (top.value > dimensions.height / 2 + 200) {
        top.value = dimensions.height - 100;
      } else {
        top.value = dimensions.height / 2;
      }
    },
  });

  return (
    <ImageBackground
      style={{ flex: 1, paddingTop: StatusBar.currentHeight }}
      imageStyle={{
        resizeMode: "cover",
      }}
      source={require("../../../assets/images/map.png")}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: verticalScale(30),
          }}
        >
          <TouchableOpacity
            onPress={goBack}
            activeOpacity={0.6}
            style={{ backgroundColor: "#fff", padding: 18, borderRadius: 12 }}
          >
            <Image
              style={{}}
              source={require("../../../assets/images/backicon.png")}
            />
          </TouchableOpacity>

          <View
            style={{
              marginHorizontal: 10,
              backgroundColor: "#fff",
              height: 44,
              justifyContent: "center",
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "medium",
                paddingHorizontal: 40,
                fontSize: 16,
              }}
            >
              HH-INT-D9FD00-JBW-ORI
            </Text>
          </View>
        </View>
      </View>

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#fff",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              elevation: 5,
              padding: 20,
              paddingHorizontal: 5,
            },
            style,
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              paddingHorizontal: 20,
            }}
          >
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1 }}>
              <Image source={require("../../../assets/images/line2.png")} />
            </View>

            <View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{ marginBottom: 15 }}
                  onPress={() => {
                    top.value = withSpring(
                      dimensions.height / 6,
                      SPRING_CONFIG
                    );
                  }}
                >
                  <Image source={require("../../../assets/images/up.png")} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    top.value = withSpring(
                      dimensions.height - 100,
                      SPRING_CONFIG
                    );
                  }}
                >
                  <Image source={require("../../../assets/images/down.png")} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ marginVertical: 30 }}>
            <DistanceTracker />
            <RouteTracker />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </ImageBackground>
  );
};

export default TrackScreen;
