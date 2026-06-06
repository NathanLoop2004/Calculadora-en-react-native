import { Text, View } from "react-native";
import { Colors } from "./constants/Colors";
import { globalStyles } from "./styles/global-styles";

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={{ fontSize: 50, color: Colors.textPrimary }}>
        Calculator App
      </Text>
    </View>
  );
}
