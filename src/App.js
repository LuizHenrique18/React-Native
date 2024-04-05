import React from 'react'
import { View } from 'react-native'

import RandomNumber from './components/Aleatório'
import MinMax from './components/MinMax'
import Comp from './components/Multi'
//import {Comp1, Comp2} from './components/Multi'
//import Primeiro from './components/Primeiro'

import {StyleSheet} from 'react-native'

export default () => (
    <View style={style.view}>
        <RandomNumber min={1} max={30}/>
        {/*<MinMax min={3} max={56}/>
        <MinMax min={4} max={64}/>
        /}{/*<Primeiro/>
        <Comp/>
        <Comp1/>
<Comp2/>*/}
    </View>
)

const style = StyleSheet.create({
    view:{
        flexGrow:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20,

    }
})