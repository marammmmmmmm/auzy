import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Mood from "./Mood";
import Sleepquality from "./Sleepquality";
import Appetite from "./Appetite";

export default function MainContent({ onInteractionComplete }) {
  // You can define the logic to check if the user has completed all required interactionsr
  // For simplicity, we'll add a button to simulate the completion of interaction.

  const handleCompleteInteraction = () => {
    // Trigger the callback passed from FirstScreen when the interaction is complete
    onInteractionComplete();
  };
  return (
    <View style={styles.mainContent}>
      <Mood />
      <Sleepquality />
      <Appetite />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    padding: 20,
  },
});
