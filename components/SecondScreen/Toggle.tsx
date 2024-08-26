
// components/Toggle.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ToggleProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const Toggle: React.FC<ToggleProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          selectedTab === 'Week' && styles.selectedTab,
        ]}
        onPress={() => setSelectedTab('Week')}
      >
        <Text style={selectedTab === 'Week' ? styles.selectedText : styles.unselectedText}>
          Week
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          selectedTab === 'Month' && styles.selectedTab,
        ]}
        onPress={() => setSelectedTab('Month')}
      >
        <Text style={selectedTab === 'Month' ? styles.selectedText : styles.unselectedText}>
          Month
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: 'purple',
  },
  selectedText: {
    color: '#fff',
  },
  unselectedText: {
    color: 'purple',
  },
});

export default Toggle;
