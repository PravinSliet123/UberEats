import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-Up"
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Food"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Shoft Drink"
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee"
    },
    {
        image: require("../assets/images/splash.png"),
        text: "Splash"
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Dessert"
    },
]
export default function Categories() {
    return (
        <View 
        style={{
            marginTop:5,
            backgroundColor:"#fff",
            paddingVertical:10,
            paddingLeft:20

        }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    items?.map((item, index) => {
                        return (
                            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                                <Image source={item.image}
                                    style={{ width: 50, height: 40, resizeMode: "contain" }}
                                />
                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontWeight: "900"
                                    }}
                                >{item.text}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}