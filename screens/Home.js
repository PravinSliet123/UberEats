import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderTabs from '../Components/HeaderTabs'
import SearchBar from '../Components/SearchBar'
import RestrauntItems,{localResturant} from "../Components/RestrauntItems"
import Categories from '../Components/Categories'

export default function Home() {
    const[resturantsData, setResturantsData] = useState(localResturant)

    useEffect(() => {
     getResturants()
    }, [])
    
const API_KEY = '7aFQ-kR0dVCaKrtJMYUUDFM_gEFLsrCPRGcBybjMZgCvvj-fCCLlHf3WqlkaZtw9j7boKWh8ddKKk6a2Pl9q3gSC9dfO0MIP64GvkACttFRSIByPPfqpWK9z6KvLY3Yx'

    const getResturants = ()=>{
        const url='https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972   '
        const apiOptions={
            mode: 'no-cors',
            headrs:{
                Authorization:`Bearer ${API_KEY}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }
        return fetch(url,apiOptions).then(res=>console.log('responce yelp',res))
    }

    const ApiKey = '82a14ae16b7145a0a4089a854b8fa2b4'
    useEffect(()=>{
        // getAllscrach()
    },[])
    const getAllscrach =()=>{
        const url='https://haveibeenpwned.com/api/v3/breachedaccount/sintugupta108@gmail.com'
        const apiOptions={
            mode: 'no-cors',
            headrs:{
                'hibp-api-key':ApiKey,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }
        return fetch(url,apiOptions).then(res=>console.log(res))
    }
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View
                style={{ backgroundColor: "white", padding: 15 }}
            >
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestrauntItems resturantsData = {resturantsData}/>
            </ScrollView>
        </SafeAreaView>
    )
}