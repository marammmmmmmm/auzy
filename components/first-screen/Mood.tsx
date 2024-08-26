import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.moodOptions}
      >
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood.label}
            style={[
              styles.moodOption,
              selectedMood === mood.label && styles.selectedMoodOption
            ]}
            onPress={() => handleMoodSelect(mood.label)}
          >
            <Text style={styles.moodIcon}>{mood.icon}</Text>
            <Text style={styles.moodOptionText}>{mood.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const moods = [
  { icon: '😊', label: 'Happy' },
  { icon: '😐', label: 'Ok' },
  { icon: '😢', label: 'Sad' },
  { icon: '😠', label: 'Angry' },
  { icon: '👍', label: 'Good' },
  { icon: '🤩', label: 'Excited' },
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
  moodOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodOption: {
    alignItems: 'center',
    padding: 10,  // Reduced padding
    backgroundColor: '#ececec',
    borderRadius: 8,  // Adjusted border radius
    width: 80,  // Reduced width
    height: 100, // Reduced height
    justifyContent: 'center',
    marginHorizontal: 4,  // Reduced margin between options
  },
  moodOptionText: {
    marginTop: 5,
    fontSize:13 // Reduced font size
  },
  moodIcon: {
    fontSize: 28, // Reduced icon size
  },
  selectedMoodOption: {
    backgroundColor: '#b0bec5', // Highlight color for selected mood
  },
});

export default MoodSelector;