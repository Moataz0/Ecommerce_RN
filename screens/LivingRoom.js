import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Header, IconButton } from '../component'
import { COLORS, dummyData, FONTS, icons, SIZES } from '../constants'
import CheckBox from '@react-native-community/checkbox'
import CardItem from '../component/CardItem'

const LivingRoom = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [selectedCategoryId, setSelectedCategoryId] = useState(1)

    function renderHeader() {
        return (
            <Header
                title="My Favourites"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.lg,
                    marginTop: SIZES.lg,
                }}
                leftComponent={
                    <IconButton
                        icon={icons.rightArrow}
                        containerStyle={{
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: [{ scaleX: -1 }],
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <IconButton
                        icon={icons.search}
                        iconStyle={{
                            height: 25,
                            width: 25
                        }}
                        containerStyle={{
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => console.log("Search")}
                    />
                }
            />
        )
    }

    function renderItemsCount() {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ padding: SIZES.lg }}><Text>255 items</Text></View>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: SIZES.lg }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Image source={icons.category}
                        style={{ height: 20, width: 20, tintColor: COLORS.red }} /></View>
            </View>
        )
    }
    function renderCategories() {
        return (
            <FlatList
                data={dummyData.category}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        height: 55,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,
                        elevation: 6,
                        marginTop: SIZES.sm,
                        marginLeft: index == 0 ? SIZES.lg : SIZES.sm,
                        marginRight: index == dummyData.category.length - 1 ? SIZES.lg : 0,
                        paddingHorizontal: SIZES.lg,
                        borderRadius: SIZES.sm,
                        // backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
                        backgroundColor: COLORS.primary
                    }}
                    // onPress={() => {
                    //   setSelectedCategoryId(item.id)
                    //   handleChangeCategory(item.id, selecteMenuType)
                    // }}
                    >
                        <Text style={{
                            alignSelf: "center", marginRight: SIZES.sm,
                            color: COLORS.black,
                            ...FONTS.h3
                        }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}

            />
        )
    }
    function renderAllProduct() {
        return (

            <View style={{ flex: 1, alignItems: "center", }}>
                {dummyData.bestSelling.map((item, i) => {
                    return (
                        <CardItem
                            key={i}
                            containerStyle={{
                                marginHorizontal: SIZES.md,
                                marginTop: SIZES.md,
                                marginBottom: SIZES.xl * 2
                            }}
                            withSale={true}
                            localImage={true}
                            sale="30%"
                            item={item}
                            onPress={() => console.log('Vertical items')}
                        />
                    )
                })}

            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            {renderHeader()}
            {renderItemsCount()}
            {renderCategories()}

            <ScrollView
                showsVerticalScrollIndicator={false}
                // horizontal = {true}
                contentContainerStyle={{ flexGrow: 1 }}
                decelerationRate={0}
                snapToInterval={200}
                snapToAlignment={'center'}
            >
                {renderAllProduct()}
            </ScrollView>



        </View>
    )
}

export default LivingRoom

const styles = StyleSheet.create({})