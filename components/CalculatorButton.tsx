import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../app/styles/global-styles';


interface Props {
    label: string;
}





const CalculatorButton = ({ label }: Props) => {
  return (
   <Pressable>
    <Text style={globalStyles.button}>{label}</Text>
   </Pressable>
  )
}

export default CalculatorButton