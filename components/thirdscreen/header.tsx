import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
        <FontAwesome name="user-circle-o" size={26} color="black" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      height: 90,
      backgroundColor: "#f8f8f8",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 15,
    },
    headerText: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });