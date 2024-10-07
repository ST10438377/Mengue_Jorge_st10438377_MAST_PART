import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type FilterMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'FilterMenu'>;

export default function FilterMenuScreen({ navigation }: FilterMenuScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>
      <Text style={styles.subtitle}>Choose your filters</Text>
      {/* Add your filtering components or functionality here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light grey background for a soft feel
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Darker grey for the title text
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666', // Medium grey for subtitle
    marginBottom: 30,
  },
});
