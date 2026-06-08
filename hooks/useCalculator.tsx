import { useEffect, useRef, useState } from 'react';



enum Operator {
    add = "+",
    subtract = "-",
    multiply = "×",
    divide = "÷",
}





export const useCalculator = () => {
   
    const [ formula, setFormula] = useState('0');
    
   
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')
    const operators = Object.values(Operator);



    const lastOperation = useRef<Operator | null>(null);
    
    useEffect(() => {
        if(!lastOperation.current){
            if(formula !== number) setFormula(number);
            return;
        }

        const currentFormula = formula.trim();
        const lastToken = currentFormula.split(' ').at(-1) ?? '';

        // If we are waiting for the next operand, keep "a op" as-is.
        if(number === '0' && operators.includes(lastToken as Operator)) return;

        // If formula ends with operator, append the typed number.
        if(operators.includes(lastToken as Operator)){
            const nextFormula = `${currentFormula} ${number}`;
            if(nextFormula !== formula) setFormula(nextFormula);
            return;
        }

        // Otherwise replace the last operand while typing.
        const parts = currentFormula.split(' ');
        if(parts.length >= 3){
            parts[parts.length - 1] = number;
            const nextFormula = parts.join(' ');
            if(nextFormula !== formula) setFormula(nextFormula);
        }
    }, [number, formula])

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = null;
    }

    const toggleSign = () => {
        if(number.includes('-')){
            setNumber(number.replace('-',''));
        } else {
            setNumber(`-${number}`);
        }
        if(number.includes('0') && !number.includes('.')){
            setNumber('0');
        }
    }

    const deleteLast = () => {
        if(number.length === 1 || (number.length === 2 && number.includes('-'))){
            setNumber('0');
        } else {
            setNumber(number.slice(0, -1));
        }
       
    }
    
    const operate = (firstValue: string, secoundValue: string, operation: Operator) => {
        const num1 = Number(firstValue);
        const num2 = Number(secoundValue);

        if(isNaN(num1)  || isNaN(num2)) return Number(number);

        switch (operation){
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2;

            default:
                return Number(number);
        }
    }

    const calculateSubResult = () => {
        const parts = formula.trim().split(' ').filter(Boolean);
        if(parts.length === 0) return '';

        // If expression ends with operator (e.g. "87 × 8 ×"),
        // evaluate only the valid numeric segment.
        const lastToken = parts[parts.length - 1] as Operator;
        const expressionParts = operators.includes(lastToken) ? parts.slice(0, -1) : parts;

        if(expressionParts.length === 1) return expressionParts[0];
        if(expressionParts.length < 3 || expressionParts.length % 2 === 0) return '';

        let result = Number(expressionParts[0]);
        if (isNaN(result)) return '';

        for (let i = 1; i < expressionParts.length; i += 2) {
            const operation = expressionParts[i] as Operator;
            const nextValue = expressionParts[i + 1];

            if (!nextValue || !operators.includes(operation)) return '';
            result = operate(`${result}`, nextValue, operation);
        }

        return `${result}`;
    }

    const subResult = calculateSubResult();
    
    
    
    
    
    const buildNumber = ( numberString: string ) => {
        //Verificar si ya esxiste el punto decimal
        if(number.includes('.')&& numberString === ".")return;
        
        if(number === '0' || number === '-0'){  
             
            if(numberString === '.'){
                return setNumber(number + numberString);
            }

            //Evaluar si es otro 0 y no hay punto
            if(numberString === '0' && !number.includes('.'))return;
            

            //Evaluar si es diferente de 0 y no hay punto y es el primer numero
            if(numberString !== "0" && !number.includes('.')){
                if(number === '-0') return setNumber(`-${numberString}`);
                return setNumber(numberString);
            }
            return setNumber(number + numberString);
        }

    



        setNumber(number + numberString);
    }
    


    const setOperation = (operation: Operator) => {
        setLastNumber();
        lastOperation.current = operation;

        setFormula((currentFormula) => {
            const trimmed = currentFormula.trim();
            const lastToken = trimmed.split(' ').at(-1) ?? '';

            if(operators.includes(lastToken as Operator)){
                return `${trimmed.slice(0, trimmed.lastIndexOf(' '))} ${operation}`;
            }

            return `${trimmed} ${operation}`;
        });
    }

    const divideOperation = () => {
       setOperation(Operator.divide);
    }
   const setLastNumber = () => {
        const currentValue = number.endsWith('.') ? number.slice(0, -1) : number;

        if(lastOperation.current && prevNumber !== '0'){
            const result = operate(prevNumber, currentValue, lastOperation.current);
            setPrevNumber(`${result}`);
            setNumber('0');
            return;
        }

        setPrevNumber(currentValue);
        setNumber('0');
   }
   const multiplyOperation = () => {
    setOperation(Operator.multiply);
   }

   const substractOperation = () => {
    setOperation(Operator.subtract);
   }   

   const addOperation = () => {
    setOperation(Operator.add);
   }

   const calculateResult = () => {
    if(!lastOperation.current) return;

    const result = operate(prevNumber, number, lastOperation.current);
    setNumber(`${result}`);
    setPrevNumber(`${result}`);
    lastOperation.current = null;
   }

    return {
        // Props
        formula,
        number,
        prevNumber,
        subResult,

        // Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        substractOperation,
        addOperation,
        calculateSubResult,
        calculateResult,
    };
}