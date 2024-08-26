import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DaySelector from '../first-screen/Dayselector'; // Ensure this import path is correct

const DatePicker = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Month'); // Default to 'Month'
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<string>('January');
  const [selectedWeek, setSelectedWeek] = useState<number>(1); // Default selected week
  const [selectedDay, setSelectedDay] = useState<number>(0); // Default selected day

  const weeks = [1, 2, 3, 4]; // Assuming 4 weeks in each month for simplicity
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleSelect = (item: string | number) => {
    if (selectedTab === 'Month') {
      setSelectedMonth(item as string);
    } else if (selectedTab === 'Week') {
      setSelectedWeek(Number(item));
    }
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.segmentControl}>
        <TouchableOpacity
          style={[
            styles.segmentButton,
            selectedTab === 'Month' && styles.activeSegmentButton,
          ]}
          onPress={() => {
            setSelectedTab('Month');
            toggleDropdown();
          }}
        >
          <Text
            style={[
              styles.segmentButtonText,
              selectedTab === 'Month' && styles.activeSegmentButtonText,
            ]}
          >
            {selectedMonth}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.segmentButton,
            selectedTab === 'Week' && styles.activeSegmentButton,
          ]}
          onPress={() => {
            setSelectedTab('Week');
            toggleDropdown();
          }}
        >
          <Text
            style={[
              styles.segmentButtonText,
              selectedTab === 'Week' && styles.activeSegmentButtonText,
            ]}
          >
            {`Week ${selectedWeek}`}
          </Text>
        </TouchableOpacity>
      </View>

      {isDropdownVisible && (
        <ScrollView style={styles.dropdown}>
          {(selectedTab === 'Month'
            ? months
            : weeks
          ).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.dropdownItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      <DaySelector
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        month={months.indexOf(selectedMonth)}
        year={2024} // This will be ignored for week view
        view={selectedTab === 'Month' ? 'month' : 'week'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  segmentControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  segmentButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 16,
    marginHorizontal: 4,
  },
  segmentButtonText: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  activeSegmentButton: {
    backgroundColor: '#b0bec5',
  },
  activeSegmentButtonText: {
    color: '#FFFFFF',
  },
  dropdown: {
    maxHeight: 200, // Limit the height for scrollable list
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 16,
    marginTop: 10,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C8C8C8',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default DatePicker;