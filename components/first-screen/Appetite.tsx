import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
const AppetiteSelector = () => {
  const [selectedAppetite, setSelectedAppetite] = useState(null);

  const handleAppetiteSelect = (appetite) => {
    setSelectedAppetite(appetite);
  };

  return (
    <View style={styles.container}>
      {/* Appetite Section */}
      <Text style={styles.title}>Appetite</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.options}
      >
        {appetiteOptions.map((option) => (
          <TouchableOpacity
            key={option.label}
            style={[
              styles.option,
              selectedAppetite === option.label && styles.selectedOption
            ]}
            onPress={() => handleAppetiteSelect(option.label)}
          >
            <Text style={styles.icon}>{option.icon}</Text>
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const appetiteOptions = [
  { icon: '🍽️', label: 'None' },
  { icon: '🍏', label: 'Very Low' },
  { icon: '🍴', label: 'Less than usual' },
  { icon: '🍇', label: 'Usual' },
  { icon: '🍔', label: 'More than usual' },
  { icon: '🍰', label: 'Voracious' },
];

const styles = StyleSheet.create({
  container: {
    padding: 10, // Reduced padding
    marginBottom: 10, // Reduced margin bottom
  },
  title: {
    fontSize: 16, // Reduced font size
    fontWeight: 'bold',
    marginBottom: 5, // Reduced margin bottom
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    alignItems: 'center',
    padding: 10, // Reduced padding
    backgroundColor: '#ececec',
    borderRadius: 8, // Adjusted border radius
    width: 80,  // Reduced width
    height: 100, // Reduced height
    justifyContent: 'center',
    marginHorizontal: 4, // Reduced margin between options
  },
  optionText: {
    marginTop: 5,
    fontSize: 13, // Reduced font size
  },
  icon: {
    fontSize: 28, // Reduced icon size
  },
  selectedOption: {
    backgroundColor: '#b0bec5', // Highlight color for selected option
  },
});

export default AppetiteSelector;