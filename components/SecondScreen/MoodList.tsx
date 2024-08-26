import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoodList: React.FC = () => {
  const moods = [
    { color: '#76D7C4', emoji: '😃' },
    { color: '#F7DC6F', emoji: '😊' },
    { color: '#A569BD', emoji: '😟' },
    { color: '#F5B041', emoji: '😠' },
    { color: '#5DADE2', emoji: '😢' },
  ];

  return (
    <View style={styles.moodList}>
      {moods.map((mood, index) => (
        <View key={index} style={styles.moodItem}>
          <View style={[styles.moodCircle, { backgroundColor: mood.color }]}>
            <Text style={styles.moodEmoji}>{mood.emoji}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodList: {
    justifyContent: 'flex-start', // Positionne les éléments vers le haut
    alignItems: 'baseline',
    marginVertical: 90,
  },
  moodItem: {
    marginVertical: 5, // Ajoute de l'espace entre chaque émoji verticalement
  },
  moodCircle: {
    width: 40, // Taille du cercle
    height: 40,
    borderRadius: 25, // Cercle parfaitement rond
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodEmoji: {
    fontSize: 24, // Taille de l'émoji
  },
});

export default MoodList;