import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/colors';
import { formatINR } from '../utils/calculateEmi';

export default function VariantSelector({ variants, selectedId, onSelect }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>SELECT YOUR VARIANT</Text>
      {variants.map((variant) => {
        const isSelected = variant.id === selectedId;
        return (
          <TouchableOpacity
            key={variant.id}
            style={[styles.row, isSelected && styles.rowSelected]}
            onPress={() => onSelect(variant.id)}
            activeOpacity={0.7}
          >
            <View style={styles.radioOuter}>
              {isSelected && <View style={styles.radioInner} />}
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.variantLabel}>{variant.label}</Text>
              <Text style={styles.variantSublabel}>{variant.sublabel}</Text>
            </View>
            <Text style={styles.price}>{formatINR(variant.price)}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textGray,
    marginBottom: spacing.sm,
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: spacing.sm,
    marginBottom: spacing.sm,
    backgroundColor: colors.white,
  },
  rowSelected: {
    borderColor: colors.primary,
    borderWidth: 1.5,
    backgroundColor: '#F5F0FC',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  textContainer: {
    flex: 1,
  },
  variantLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
  },
  variantSublabel: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 1,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
  },
});