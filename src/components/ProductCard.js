import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/colors';
import { formatINR } from '../utils/calculateEmi';

export default function ProductCard({ product, onPress }) {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price));

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
    <Image source={product.image} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.price}>From {formatINR(lowestPrice)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    width: '48%',
  },
  image: {
    width: '100%',
    height: 120,
    backgroundColor: colors.background,
  },
  info: {
    padding: spacing.sm,
  },
  brand: {
    fontSize: 11,
    color: colors.textGray,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
    marginTop: 2,
  },
  price: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 4,
  },
});