import CalculatorButton from "@/components/CalculatorButton";
import { useCalculator } from "@/hooks/useCalculator";
import { Text, View } from "react-native";
import { Colors } from "./constants/Colors";
import { globalStyles } from "./styles/global-styles";

export default function CalculatorApp() {
  
  
  const { formula, 
    number, 
    subResult,
    buildNumber, 
    clean, 
    toggleSign, 
    deleteLast, 
    divideOperation, 
    multiplyOperation, 
    substractOperation, 
    addOperation,
    calculateResult } = useCalculator()
  
  return (
    <View style={globalStyles.calculatorContainer}>
     {/*  Aca esta lo que se va a mostrar en la pantalla */}
      
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
          {/*  Aca esta lo que se va a mostrar en la pantalla */}  
          <Text style={globalStyles.mainResult} numberOfLines={1} adjustsFontSizeToFit>{formula}</Text>
          {
            formula !== number && subResult !== '' ? (
              <Text style={globalStyles.solveResult}>{subResult}</Text> 
            ):(
              <Text style={globalStyles.solveResult}> </Text>
            )
          }



      </View>


    {/*  Fila de botones */}
    <View  style={globalStyles.row}>
    {/*   Primera fila jijiji  */}
       <CalculatorButton label="C"   color= {Colors.lightGray}   blackText={true}  onPress={() => clean()}                />
       <CalculatorButton label="+/-" color= {Colors.lightGray}   blackText={true}  onPress={() => toggleSign()}              />
       <CalculatorButton label="del" color= {Colors.lightGray}   blackText={true}  onPress={() => deleteLast()}              />
       <CalculatorButton label="÷"   color= {Colors.orange}      blackText={false} onPress={() => divideOperation()}                />
     </View>
      {/*  Segunda fila jijiji */}
     <View  style= {globalStyles.row}>
       <CalculatorButton label="7" color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber("7")}              />
       <CalculatorButton label="8" color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber("8")}              />
       <CalculatorButton label="9" color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber("9")}              />
       <CalculatorButton label="×" color= {Colors.orange}     blackText={false}    onPress={() =>   multiplyOperation()}              />
     </View>
      {/*  Tercera fila jijiji */}
     <View  style= {globalStyles.row}>
       <CalculatorButton label="4" color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber("4")}              />
       <CalculatorButton label="5" color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber("5")}              />
       <CalculatorButton label="6" color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber("6")}              />
       <CalculatorButton label="-" color= {Colors.orange}     blackText={false}    onPress={() =>   substractOperation()}              />
     </View>  
      {/*  Cuarta fila jijiji */}
     <View  style= {globalStyles.row}>
       <CalculatorButton label="1" color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber("1")}              />
       <CalculatorButton label="2" color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber("2")}              />
       <CalculatorButton label="3" color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber("3")}              />
       <CalculatorButton label="+" color= {Colors.orange}     blackText={false}    onPress={() =>   addOperation()}              />
     </View>   
      {/*  Quinta fila jijiji */}
     <View  style= {globalStyles.row}>
       <CalculatorButton label="0" doubleSize  color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber("0")}              />
       <CalculatorButton label="." color= {Colors.darkGray}   blackText={false}    onPress={() =>   buildNumber(".")}              />
       <CalculatorButton label="=" color= {Colors.orange}     blackText={false}    onPress={() =>   calculateResult()}              />
     </View>            
    </View>
  );
}
