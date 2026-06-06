/* Expo */
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
/* React Native */
import { View } from "react-native";

/* Personales */
import { globalStyles } from "./styles/global-styles";

export default function RootLayout() {
  /*   Por si tenemos fuentes */
  /*     const [loaded] = useFonts({
    SpaceMono: require("../assets/"),
  });
  if (!loaded) {
    return null;
  } */

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light"></StatusBar>
    </View>
  );
}
