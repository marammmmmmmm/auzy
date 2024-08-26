import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SleepQualitySelector = () => {
  const [selectedSleepQuality, setSelectedSleepQuality] = useState(null);

  const handleSleepQualitySelect = (quality) => {
    setSelectedSleepQuality(quality);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleep Quality</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.options}
      >
        {sleepQualities.map((quality) => (
          <TouchableOpacity
            key={quality.label}
            style={[
              styles.option,
              selectedSleepQuality === quality.label && styles.selectedOption
            ]}
            onPress={() => handleSleepQualitySelect(quality.label)}
          >
            <Text style={styles.icon}>{quality.icon}</Text>
            <Text style={styles.optionText}>{quality.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const sleepQualities = [
  { icon: '😴', label: 'Terrible' },
  { icon: '😔', label: 'Bad' },
  { icon: '🙂', label: 'Ok' },
  { icon: '😃', label: 'Good' },
  { icon: '😎', label: 'Excellent'},
  { icon: '😴', label: 'Overslept' },
];

const styles = StyleSheet.create({
  container: {
    padding: 10,  // Reduced padding
    marginBottom: 10,  // Reduced margin bottom
  },
  title: {
    fontSize: 16,  // Reduced font size
    fontWeight: 'bold',
    marginBottom: 5,  // Reduced margin bottom
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    alignItems: 'center',
    padding: 10,  // Reduced padding
    backgroundColor: '#ececec',
    borderRadius: 8,  // Adjusted border radius
    width: 80,  // Reduced width
    height: 100, // Reduced height
    justifyContent: 'center',
    marginHorizontal: 4,  // Reduced margin between options
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

export default SleepQualitySelector;

