import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    fontWeight: "400",
    //fontFamily: "SpaceMono",
  },
  solveResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontWeight: "400",
    fontFamily: "SpaceMono",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
   height: 80,
   width: 80,
   backgroundColor: Colors.darkGray,
   borderRadius: 100,
   justifyContent: "center"
  },
  buttonText: {
    color: Colors.textPrimary,
    padding: 10,
    fontSize: 30,
    textAlign: "center",
    fontWeight: '300',
  }

});

export default globalStyles;
