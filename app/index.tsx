import CalculatorButton from "@/components/CalculatorButton";
import { Text, View } from "react-native";
import { globalStyles } from "./styles/global-styles";

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
     {/*  Aca esta lo que se va a mostrar en la pantalla */}
      
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
          {/*  Aca esta lo que se va a mostrar en la pantalla */}  
          <Text style={globalStyles.mainResult} numberOfLines={1} adjustsFontSizeToFit>50 x 50</Text>
          {/*   Aca se va a mostrar el resultado de la operacion */}
          <Text style={globalStyles.solveResult}>2500</Text>
      </View>


    {/*  Fila de botones */}
    <View  style={globalStyles.row}>
       
   <CalculatorButton label="C"/>
   <CalculatorButton label="+/-"/>
   <CalculatorButton label="del"/>
   <CalculatorButton label="÷"/>
    </View>
  
    
    </View>
  );
}
