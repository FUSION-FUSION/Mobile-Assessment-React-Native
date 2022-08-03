import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Timertext = () => {
  const d = new Date();
  const date = d.setMinutes(d.getMinutes() + 2);
  const [countDown, setCountDown] = useState(date - new Date().getTime());
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(d - new Date());
    }, 1000);

    if (date - new Date() <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text
        style={{
          fontFamily: "medium",
          color: "#FF0000",
          fontSize: 15,
          textTransform: "capitalize",
          marginHorizontal: 10,
          marginTop: 5,
        }}
      >
        {seconds >= 0 ? `${minutes}:${seconds}` : "Expired"}{" "}
      </Text>
    </View>
  );
};

export default Timertext;
