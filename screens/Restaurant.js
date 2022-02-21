import React from 'react';
import {View, TouchableOpacity, Image, Text, SafeAreaView, StyleSheet, Animated} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from '../constants';






const Restaurant = () => {

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
                        source={icons.back}
                    />
                </TouchableOpacity>

                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <View style={{width:'70%', 
                        height:'100%', 
                        borderRadius:SIZES.radius, 
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:COLORS.lightGray3}}>
                        <Text style={{...FONTS.h2,color: COLORS.black,}}>By HalisCode Pizza</Text>
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
                        source={icons.list}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    const renderFoodInfo =()=>{

        return(
            <Animated.ScrollView
            horizontal
            pagingEnabled
            snapToAlignment='center'
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}>
                <View style={{ alignItems: 'center' }}>
                    
                    <View style={{ height: SIZES.height * 0.35 }}>
                        {/* Food Image */}
                        <Image 
                            source={icons.salad}
                            resizeMode='cover'
                            style={{width: SIZES.width, height:'100%'}}
                        />

                        {/* Quantity */}
                        <View
                            style={{
                                position:'absolute',
                                bottom:-20,
                                justifyContent:'center',
                                flexDirection:'row',
                                width: SIZES.width,
                                height: 50,
                            }}>
                            <TouchableOpacity
                                style={{
                                    width:50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    backgroundColor: COLORS.white,
                                    borderTopLeftRadius: 25,
                                    borderBottomLeftRadius: 25
                                }}>
                                <Text style={{...FONTS.body1}}>-</Text>
                            </TouchableOpacity>
                            <View
                                style={{
                                    width:50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    backgroundColor: COLORS.white,
                                }}>
                               <Text style={{...FONTS.body1}}>0</Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    width:50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    backgroundColor: COLORS.white,
                                    borderTopRightRadius: 25,
                                    borderBottomRightRadius: 25
                                }}>
                                <Text style={{...FONTS.body1}}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Name & Description */}
                    <View
                        style={{
                            width:SIZES.width,
                            marginTop:15,
                            alignItems:'center',
                            paddingHorizontal: SIZES.padding *2,
                        }}
                    >
                        <Text style={{...FONTS.h2,marginVertical: 10,textAlign:'center'}}>Tomato Pasta - 10.00</Text>
                        <Text style={{...FONTS.body3}}>Pasta with fresh tomatoes</Text>
                    </View>

                    {/* Categories */}
                    <View
                        style={{marginTop:10,
                        flexDirection:'row'}}>
                        <Image 
                            source={icons.fire}
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 10
                            }}/>
                        <Text style={{...FONTS.body3, color:COLORS.darkgray}}>100.00 cal</Text>
                    </View>
                </View>
            </Animated.ScrollView>
        )
    }

    const renderOrder =()=>{

        return(
            <View
                style={{backgroundColor:COLORS.white,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40}}
                >
                <View
                    style={{
                        flexDirection:'row',
                        paddingHorizontal: SIZES.padding *4,
                        justifyContent:'space-between',
                        paddingVertical: SIZES.padding *3,
                        borderBottomWidth:1,
                        borderBottomColor: COLORS.lightGray2
                    }}
                >
                    <Text style={{...FONTS.h3}}>0 items in Cart</Text>
                    <Text style={{...FONTS.h3}}>$0.00</Text>
                </View>
                <View
                    style={{
                        flexDirection:'row',
                        paddingHorizontal: SIZES.padding *4,
                        justifyContent:'space-between',
                        paddingVertical: SIZES.padding *3,
                    }}
                >
                    <View
                        style={{
                            flexDirection:'row',
                        }}>
                        <Image 
                            source={icons.pin}
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 10
                            }}/>
                        <Text style={{...FONTS.h3}}>Location</Text>
                    </View>

                    <View
                        style={{
                            flexDirection:'row',
                        }}>
                        <Image 
                            source={icons.master}
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 10
                            }}/>
                        <Text style={{...FONTS.h3}}>6666</Text>
                    </View>
                </View>

                {/* Order button */}
                <View
                    style={{
                        padding: SIZES.padding * 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: SIZES.width * 0.9,
                            padding: SIZES.padding,
                            backgroundColor: COLORS.primary,
                            alignItems: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Order</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }


  return (
    <SafeAreaView style={styles.container}>
        {renderHeader()}
        {renderFoodInfo()}
        {renderOrder()}
    </SafeAreaView>
  )
}

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


export default Restaurant;