import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

type CardProps = {
  size: "s" | "m" | "l";
};

const defaultValues = {
  s: {
    width: 50,
    height: 83.3,
    radius: 6.66,
    padding: 3.33,
    innerRadius: 5,
  },
  m: {
    width: 100,
    height: 166.66,
    radius: 13.33,
    padding: 6.66,
    innerRadius: 10,
  },
  l: {
    width: 150,
    height: 250,
    radius: 20,
    padding: 10,
    innerRadius: 15,
  },
};

export const Card = ({ size }: CardProps) => {
  return (
    <View
      style={{
        borderRadius: defaultValues[size].radius,
        backgroundColor: "#FFFFFF",
        height: defaultValues[size].height,
        width: defaultValues[size].width,
        padding: defaultValues[size].padding,
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["#22A533", "#0B601F"]}
        style={{
          borderRadius: defaultValues[size].innerRadius,
          backgroundColor: "red",
          height: "100%",
          width: "100%",
        }}
      ></LinearGradient>
    </View>
  );
};
