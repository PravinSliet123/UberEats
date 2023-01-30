import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import React from 'react'

export const localResturant = [
    {
        name: "Green Royls",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU",
        categories: ['Cafe', 'Bar'],
        price: "$",
        reviews: "342",
        rating: "3.5"
    },
    {
        name: "Dhaba",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU",
        categories: ['Cafe', 'Bar'],
        price: "$",
        reviews: "32",
        rating: "2.5"
    },
    {
        name: "Hot Chop",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU",
        categories: ['Cafe', 'Bar'],
        price: "$",
        reviews: "3442",
        rating: "4.5"
    },
]

export default function RestrauntItem(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {
                localResturant?.map((item, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                marginTop: 10,
                                padding: 15,
                                backgroundColor: "white"
                            }}
                        >
                            <RestaurentsImage image={item.image_url} />
                            <RestaurantInfo name={item.name} rating={item.rating} review={item.reviews} />
                        </View>
                    )
                })
            }
        </TouchableOpacity>
    )
}


const RestaurentsImage = ({ image }) => (
    <>
        <Image source={{
            uri: image
        }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity
            style={{ position: "absolute", top: 20, right: 20 }}
        >
            <MaterialCommunityIcon name='heart-outline' size={25} color="white" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,

        }}
    >
        <View>
            <Text
                style={{ fontSize: 15, fontWeight: "bold" }}
            >{props.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-40 . min</Text>
        </View>

        <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10

            }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
)