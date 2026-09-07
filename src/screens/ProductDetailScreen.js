import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import VariantSelector from '../components/VariantSelector';
import EMIPlanList from '../components/EMIPlanList';
import { getProductById, getEmiPlans } from '../data/mockApi';
import { colors, spacing } from '../theme/colors';

export default function ProductDetailScreen({ route }) {
  const { productId } = route.params;

  const [product, setProduct] = useState(null);
  const [plans, setPlans] = useState([]);
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const [selectedMonths, setSelectedMonths] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(() => {
    setLoading(true);
    setError(null);
    Promise.all([getProductById(productId), getEmiPlans()])
      .then(([productData, planData]) => {
        setProduct(productData);
        setPlans(planData);
        setSelectedVariantId(productData.variants[0]?.id ?? null);
        setSelectedMonths(planData[0]?.months ?? null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [productId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) return <LoadingState message="Loading product details..." />;
  if (error) return <ErrorState message={error} onRetry={loadData} />;
  if (!product) return null;

  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId);

  const handleProceed = () => {
    const selectedPlan = plans.find((p) => p.months === selectedMonths);
    Alert.alert(
      'Proceeding with plan',
      `${product.name} (${selectedVariant.label})\n${selectedMonths} months plan selected.`
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageCard}>
          <Text style={styles.brandBadge}>{product.brand}</Text>
          <Image source={product.image} style={styles.image} resizeMode="contain" />
        </View>

        <Text style={styles.productName}>{product.name}</Text>

        <VariantSelector
          variants={product.variants}
          selectedId={selectedVariantId}
          onSelect={setSelectedVariantId}
        />

        {selectedVariant && (
          <EMIPlanList
            price={selectedVariant.price}
            plans={plans}
            selectedMonths={selectedMonths}
            onSelect={setSelectedMonths}
          />
        )}
      </ScrollView>

      <View style={styles.ctaContainer}>
        <TouchableOpacity style={styles.ctaButton} onPress={handleProceed} activeOpacity={0.8}>
          <Text style={styles.ctaText}>Proceed with this plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: spacing.md,
    paddingBottom: 100,
  },
  imageCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  brandBadge: {
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: '600',
    color: colors.textGray,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: spacing.sm,
  },
  image: {
    width: 180,
    height: 180,
  },
  productName: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: spacing.md,
  },
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  ctaText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
});