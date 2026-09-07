import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from '../screens/ShopScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import MarketplaceListScreen from '../screens/MarketplaceListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

export default function ShopStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.white },
        headerTintColor: colors.textDark,
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen name="ShopHome" component={ShopScreen} options={{ title: 'Shop' }} />
      <Stack.Screen name="TopBrands" component={PlaceholderScreen} options={{ title: 'Top Brands' }} />
      <Stack.Screen name="NearbyStores" component={PlaceholderScreen} options={{ title: 'Nearby Stores' }} />
      <Stack.Screen name="MarketplaceList" component={MarketplaceListScreen} options={{ title: '1Fi Marketplace' }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Pay using 1Fi' }} />
    </Stack.Navigator>
  );
}