import { StyleSheet, View, Text, Pressable } from "react-native";

import LottieView from "lottie-react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        style={{ width: 200, height: 200 }}
        source={require("@/assets/images/example-lottie.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          console.log("Animation finished");
          setCount((prevCount) => prevCount + 1);
        }}
      />
      {/* Count should update when the animation finishes */}
      <Text>Finish count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
