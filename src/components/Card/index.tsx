import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export const Card = () => {
  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        height: 250,
        width: 150,
        padding: 10,
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["#22A533", "#0B601F"]}
        style={{
          borderRadius: 15,
          backgroundColor: "red",
          height: "100%",
          width: "100%",
        }}
      >
      </LinearGradient>
    </View>
  );
};
