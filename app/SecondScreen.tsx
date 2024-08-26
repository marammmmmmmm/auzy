import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from '../components/first-screen/Datapicker';
import Dayselector from '../components/SecondScreen/Dayselector';
import Head from '../components/SecondScreen/Head';
import MoodList from '../components/SecondScreen/MoodList';
import FooterIcons from '../components/SecondScreen/FooterIcons';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Ensure @expo/vector-icons is installed

export default function SecondScreen() {
  // State for selected day
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Head />
      <DatePicker />
      {/* Pass selectedDay and setSelectedDay to DaySelector */}
      <Dayselector selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <MoodList />
      <FooterIcons />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('thirdscreen')}
      >
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    width: 35,       // Button width
    height: 35,      // Button height
    borderRadius: 20, // Circle shape
    backgroundColor: '#b0bec5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,       // Position to the right with margin
    bottom: 20,      // Position it at the bottom with margin
  },
});
