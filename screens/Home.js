//import liraries
import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import {COLORS, FONTS, icons, SIZES} from '../constants'
import restaurantData from '../data/restaurant';
import categoryData from '../data/categories';

// create a component
const Home = () => {

    

    const [categories, setCategories] = useState(categoryData);
    const [restaurantList, setRestaurantList] = useState(restaurantData);
    const [selectedCategory, setSelectedCategory] = useState(null)

    function onselectedCategory(category) {
        setSelectedCategory(category)
    };
    
    function getCategoryId(id) {
        let category = categories.filter( a => a.id == id);

        if (category.length > 0) {
            return category[0].name
        }
        return ""
    };

    // create a Home-Header
    const renderHeader = () => {
        return (
            <View style={{flexDirection:'row', height:50, marginTop:5}}>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent:'center'
                    }}
                >
                    <Image 
                        style={{ width:30, height:30}}
                        resizeMode='contain'
                        source={icons.nearby}
                    />
                </TouchableOpacity>

                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <View style={{width:'70%', 
                        height:'100%', 
                        borderRadius:SIZES.radius, 
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:COLORS.lightGray3}}>
                        <Text style={{...FONTS.h2,color: COLORS.black,}}>HalisCode</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width:50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent:'center'
                    }}>
                    <Image 
                        style={{ width:30, height:30}}
                        resizeMode='contain'
                        source={icons.basket}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    // create a Home-Category
    const renderMainCategory = ()=>{

        const renderItem = ({item})=>{

            return(
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={()=>onselectedCategory(item)}>
                        
                    <Text style={{marginBottom:SIZES.padding,
                        color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,...FONTS.h5}}
                        >{item.name}</Text>

                   <View
                        style={{
                            width:50,
                            height:50,
                            borderRadius:SIZES.radius2,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray2,
                        }}>

                        <Image 
                            style={{
                                width:30,
                                height:30
                            }}
                            resizeMode='contain'
                            source={item.icon}
                            />
                    </View>
                   
                </TouchableOpacity>
            )
        };

        return(
            <View style={{padding: SIZES.padding * 2}}>
                <Text style={{...FONTS.h1, color:COLORS.black}}>Halis-Code</Text>
                <Text style={{...FONTS.h2}}>Select Category</Text>

                <FlatList 
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    };

    // create a Home- RestaurantList
    const renderRestaurantList = ()=>{
        const renderItem = ({item})=>{

            return(
                <TouchableOpacity
                    style={{
                        marginBottom: SIZES.padding1 * 2,
                        ...styles.shadow,
                        backgroundColor:COLORS.lightGray2,
                        paddingBottom: SIZES.padding1,
                        borderBottomLeftRadius: SIZES.radius,
                        borderTopLeftRadius: SIZES.radius1,
                        borderTopRightRadius: SIZES.radius1
                    }}
                    >
                   <View
                        style={{
                            marginBottom:SIZES.padding1
                        }}>

                        <Image 
                            style={{
                                width:'100%',
                                height:200,
                                borderRadius:SIZES.radius1
                            }}
                            resizeMode='cover'
                            source={item.photo}
                        />

                        <View
                        style={{
                            position:'absolute',
                            bottom:0,
                            height:40,
                            width:SIZES.width * 0.3,
                            backgroundColor:COLORS.white,
                            borderTopRightRadius:SIZES.radius1,
                            borderBottomLeftRadius:SIZES.radius1,
                            alignItems:'center',
                            justifyContent:'center',
                            ...styles.shadow
                            
                        }}>
                            <Text style={{...FONTS.h4}}>{item.duration}</Text>
                        </View>

                    </View>

                    <Text style={{...FONTS.h2,paddingLeft:SIZES.padding2}}>{item.name}</Text>
                    
                   <View style={{
                        flexDirection:'row',
                        paddingLeft:SIZES.padding2,
                        marginTop: SIZES.padding,
                    }}>
                        {/* star */}
                        <Image 
                            source={icons.star}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}/>

                        {/* Rating */}
                        <Text style={{...FONTS.body3}}>{item.rating}</Text>

                        {/* Categories */}
                        <View style={{
                            flexDirection:'row',
                            marginLeft: 10
                        }}>
                            {item.categories.map((categoryid)=>{
                                return(<View 
                                        key={categoryid}
                                        style={{flexDirection:'row'}}
                                    >
                                    <Text style={{...FONTS.body3}}>{getCategoryId(categoryid)}</Text>
                                    <Text style={{...FONTS.h3, color: COLORS.darkgray}}> . </Text>
                                </View>)
                            })}
                        </View>

                            {/* Price */}
                        {[1,2,3].map((prc)=>{
                                return(<View 
                                        key={prc}
                                        style={{flexDirection:'row'}}
                                    >
                                    <Text style={{...FONTS.body3, color: COLORS.darkgray}}>$</Text>
                                </View>)
                            })}
                   </View>
                   
                </TouchableOpacity>
            )
        };

        return(
            <FlatList 
                data={restaurantList}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding1 * 2,
                    paddingBottom: 30}}
            />
        )
    };
    
    // Home return
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategory()}
            {renderRestaurantList()}
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
});

//make this component available to the app
export default Home;
