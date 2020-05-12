import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'

export default function SlideSwitch({list = [], onChange, initialIndex = 0, passiveViewStyle, passiveTextStyle = {},  activeViewStyle = {}, activeTextStyle = {}}) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(initialIndex)
    }, [])

    const onSelect = (i) => {
        setIndex(i)
        if (typeof onChange === 'function') {
            onChange(i)
        }
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.view}>
                {list.map((e, i) => {
                    return (
                        <TouchableOpacity onPress={() => onSelect(i)} style={{...styles.switch, ...passiveViewStyle,  ...(i === index ? activeViewStyle : {})}} key={i.toString()}>
                            <Text style={{...styles.switchText,  ...passiveTextStyle,  ...(i === index ? activeTextStyle : {})}}>{e}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center'
    },
    switch: {
        minWidth: 60,
        height: 60,
        margin: 5,
        padding: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1
    },
    switchText: {
        color: 'black',
        fontSize: 20
    }
})