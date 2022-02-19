import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { FavouriteCard, Header, IconButton } from '../component';
import { COLORS, dummyData, FONTS, icons, SIZES } from '../constants';

const Favourite = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  function renderFavouriteItems() {
    return (
      <View>
        <Text
          style={{
            alignSelf: 'flex-end',
            marginHorizontal: SIZES.lg,
            marginBottom: SIZES.sm,
            color: COLORS.black,
          }}>
          {dummyData.bestSelling.length} items
        </Text>
        <FlatList
          style={{ paddingTop: SIZES.sm }}
          data={dummyData.bestSelling}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => {
            return (
              <FavouriteCard
                imageStyle={{
                  marginBottom: 20,
                  marginLeft: SIZES.sm,
                  height: 120,
                  width: 120,
                }}
                containerStyle={{
                  alignItems: 'center',
                  marginHorizontal: SIZES.lg,
                  paddingVertical: SIZES.md,
                  marginBottom: SIZES.lg,
                }}
                onPress={() => navigation.navigate('Cart')}
                item={item}
              />
            );
          }}
          ListFooterComponent={<View style={{ height: 150 }} />}
        />
      </View>
    );
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // return () => setIsLoading(true);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
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
            onPress={() => navigation.navigate('Home')}
          />
        }
      />

      {isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={COLORS.red} />
        </View>
      ) : (
        renderFavouriteItems()
      )}
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
