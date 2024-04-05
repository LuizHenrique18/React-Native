import React from "react";
import { Text } from 'react-native'
import Estilo from './Style'


export default (props) => {
    console.warn("olá");
    <Text style={Estilo.fontG}> O valor de {props.max} é maior que o de {props.min}</Text>
};