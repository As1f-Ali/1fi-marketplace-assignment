import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/colors';

const shopOptions = [
  { id: 'topbrands', label: 'Top Brands', subtitle: 'Explore our brand partners', route: 'TopBrands' },
  { id: 'nearby', label: 'Nearby Stores', subtitle: 'Find stores near you', route: 'NearbyStores' },
  { id: 'marketplace', label: '1Fi Marketplace', subtitle: 'Shop now, pay later with EMI', route: 'MarketplaceList' },
];

export default function ShopScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shop</Text>
      {shopOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.card}
          onPress={() => navigation.navigate(option.route)}
          activeOpacity={0.7}
        >
          <View>
            <Text style={styles.cardTitle}>{option.label}</Text>
            <Text style={styles.cardSubtitle}>{option.subtitle}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: spacing.md,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
  },
  cardSubtitle: {
    fontSize: 13,
    color: colors.textGray,
    marginTop: 2,
  },
  chevron: {
    fontSize: 24,
    color: colors.primaryLight,
  },
});