import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import Spacing from "../constants/Spacing";

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: Spacing.xl,
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
   // fontFamily: "SpaceMono",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: Spacing.lg,
    paddingHorizontal: Spacing.md,
  },
  button: {
    height: 75,
    width: 65,
    backgroundColor: Colors.darkGray,
    borderRadius: 9999, // ensure perfect circle for square buttons
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Spacing.sm,
    borderColor: Colors.lightGray,
  },
  buttonText: {
    color: Colors.textPrimary,
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    fontWeight: '400',
  }

});

export default globalStyles;
