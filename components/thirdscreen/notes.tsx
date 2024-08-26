import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NotesComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily notes (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your daily notes here."
        multiline
        placeholderTextColor="#9E9E9E"  // Added placeholderTextColor
      />
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save logs</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: '#5A5A5A',
  },
  input: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#7D3C98',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default NotesComponent;
