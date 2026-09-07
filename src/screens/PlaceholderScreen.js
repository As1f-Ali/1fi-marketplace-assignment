import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function PlaceholderScreen({ route }) {
  const title = route?.params?.title || route?.name || 'Coming Soon';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.subtext}>This section isn't part of the assignment scope.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
  },
  subtext: {
    fontSize: 13,
    color: colors.textGray,
    marginTop: 8,
  },
});