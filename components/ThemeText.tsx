import { Text, type TextProps } from 'react-native';




   interface Props extends TextProps {}

    const ThemeText = ({children, ...rest }: Props) => {
      return (
        <Text  {...rest}>{children}</Text>
      )
    }
    



export default ThemeText;