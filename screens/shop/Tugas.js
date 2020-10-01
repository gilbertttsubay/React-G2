import React, { useState, useCallback } from 'react'
import { set } from 'react-native-reanimated'
import {RefreshControl, View} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler'

function wait(timeout){
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}


const Tugas = (props) => {
    // const [content, setContent] = useState(0)
    const [refreshing, setRefreshing] = useState(false)
    const [count, setCount] = useState(0)

 

    const onRefreshin = useCallback(
        () => {
            setRefreshing(true)

            wait(2000).then(() => {
                setRefreshing(false)
                let count1 = count + 10;
                setCount(count1)
            })
        },
        [refreshing],
    )


    return(
        <SafeAreaView>
            <ScrollView
            refreshControl= {
                <RefreshControl refreshing= {refreshing} onRefresh={onRefreshin}/>
            }>


                <Text>
                    {count}
                </Text>
                </ScrollView>
        </SafeAreaView>
    )
}

export default Tugas