import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/colors';
import { calculateEmi, formatINR } from '../utils/calculateEmi';

export default function EMIPlanList({ price, plans, selectedMonths, onSelect }) {
  const [expanded, setExpanded] = useState(true);

  const lowestMonthly = Math.min(
    ...plans.map((p) => calculateEmi(price, p.months, p.interestRate))
  );

  return (
    <View style={styles.container}>
      <View style={styles.summaryRow}>
        <View>
          <Text style={styles.priceLabel}>SUGGESTED AMOUNT</Text>
          <Text style={styles.priceValue}>{formatINR(price)}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.toggleRow}
        onPress={() => setExpanded((prev) => !prev)}
        activeOpacity={0.7}
      >
        <Text style={styles.startsAt}>
          Starts at <Text style={styles.startsAtBold}>{formatINR(lowestMonthly)}/mo</Text>
        </Text>
        <Text style={styles.toggleLink}>{expanded ? 'Hide plans ▲' : 'Show plans ▼'}</Text>
      </TouchableOpacity>

      {expanded && (
        <View>
          {plans.map((plan) => {
            const monthly = calculateEmi(price, plan.months, plan.interestRate);
            const isSelected = plan.months === selectedMonths;
            return (
              <TouchableOpacity
                key={plan.months}
                style={[styles.planRow, isSelected && styles.planRowSelected]}
                onPress={() => onSelect(plan.months)}
                activeOpacity={0.7}
              >
                <Text style={styles.planLabel}>
                  {plan.months} months · {plan.interestRate}% p.a.
                </Text>
                <Text style={styles.planAmount}>{formatINR(monthly)}/mo</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.md,
  },
  summaryRow: {
    marginBottom: spacing.sm,
  },
  priceLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textGray,
    letterSpacing: 0.5,
  },
  priceValue: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 4,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  startsAt: {
    fontSize: 13,
    color: colors.textGray,
  },
  startsAtBold: {
    fontWeight: '700',
    color: colors.textDark,
  },
  toggleLink: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
  planRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    borderRadius: 8,
    marginBottom: 4,
  },
  planRowSelected: {
    backgroundColor: '#F5F0FC',
  },
  planLabel: {
    fontSize: 13,
    color: colors.textDark,
  },
  planAmount: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textDark,
  },
});