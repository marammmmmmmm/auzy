import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/first-screen/Header';
import Datepicker from '../components/first-screen/Datapicker';
import Dayselector from '../components/first-screen/Dayselector';
import MainContent from '../components/first-screen/MainContent';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Ensure @expo/vector-icons is installed
import firebase from '@react-native-firebase/app';

const App: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0); // State for the selected day
  const navigation = useNavigation();
  if (firebase.apps.length > 0) {
    console.log('Firebase App Initialized successfully:', firebase.apps[0].name);
  } else {
    console.log('Firebase App is not initialized');
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <Datepicker />
      <Dayselector selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <MainContent />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SecondScreen')}
      >
        <Ionicons name="arrow-forward" size={20} color="#fff" /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20, // Adds padding to space out the components
  },
  button: {
    width: 40,       // Smaller width for the button
    height: 40,      // Smaller height for the button
    borderRadius: 20, // Circle shape (half of the width/height)
    backgroundColor: '#b0bec5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,         // Position to the left with some margin
    bottom: 20,       // Position it at the bottom with some margin
  },
});

export default App;
