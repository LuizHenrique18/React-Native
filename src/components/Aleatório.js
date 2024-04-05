import { Text } from 'react-native'
import estilo from './Style'

function number (props){
    number = Math.floor(Math.random() * (props.max - props.min) + 5);
    console.warn(number);
    <Text style={estilo.fontG}>Olá</Text>
};


export default number
