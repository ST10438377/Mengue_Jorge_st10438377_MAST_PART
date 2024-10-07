// screens/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [menuItems, setMenuItems] = useState<{ dishName: string, description: string, course: string, price: number }[]>([]);

  useEffect(() => {
    if (route.params?.newItem) {
      setMenuItems((prevItems) => [...prevItems, route.params.newItem as { dishName: string; description: string; course: string; price: number }]);
    }
  }, [route.params?.newItem]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMenu')}>
        <Text style={styles.buttonText}>Add Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FilterMenu')}>
        <Text style={styles.buttonText}>Filter Menu</Text>
      </TouchableOpacity>

      <Text style={styles.totalItemsText}>Total Items: {menuItems.length}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.dishName} - {item.course}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
            <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', 
  },
  button: {
    backgroundColor: '#4CAF50', // Green button
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  totalItemsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#555', // Light gray color for text
  },
  menuItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc', // Light gray border
    paddingVertical: 15,
    width: '100%',
    paddingHorizontal: 10,
  }, 
  menuItemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000', // Darker color for menu items
  },
  descriptionText: {
    fontSize: 14,
    color: '#777', // Lighter color for description
    marginTop: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5733', // Orange color for price
    marginTop: 5,
  },
});
