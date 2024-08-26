import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

interface DaySelectorProps {
  selectedDay: number;
  setSelectedDay: (index: number) => void;
  month: number;
  year: number;
  view: 'month' | 'week'; // Prop to handle view type
}

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDay, setSelectedDay, month, year, view }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Days of the week

  // Get the number of days in the month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDayOfWeek = (date: number) => {
    const day = new Date(year, month, date);
    return daysOfWeek[day.getDay()]; // Adjusted to correctly index daysOfWeek
  };

  const daysInMonth = getDaysInMonth(month, year);
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Get the current week's days
  const getCurrentWeekDays = () => {
    const startOfWeek = new Date(year, month, 1); // Start at the 1st of the month
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Adjust to Sunday

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      return date.getDate();
    });
  };

  const weekDates = getCurrentWeekDays();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.daysContainer}
    >
      {view === 'week' && (
        <>
          {weekDates.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayItem,
                selectedDay === index && styles.activeDayItem,
              ]}
              onPress={() => setSelectedDay(index)}
            >
              <Text style={styles.dateLabel}>{date}</Text>
              <Text style={styles.dayOfWeekLabel}>{getDayOfWeek(date)}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}

      {view === 'month' && (
        <>
          {dates.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayItem,
                selectedDay === index && styles.activeDayItem,
              ]}
              onPress={() => setSelectedDay(index)}
            >
              <Text style={styles.dateLabel}>{date}</Text>
              <Text style={styles.dayOfWeekLabel}>{getDayOfWeek(date)}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  daysContainer: {
    flexDirection: 'row',
    paddingBottom: 50, // Adjust as needed
  },
  dayHeader: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
  },
  dayLabel: {
    color: '#5A5A5A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dayItem: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#ECECEC',
  },
  activeDayItem: {
    backgroundColor: '#b0bec5', // Color for selected day
  },
  dateLabel: {
    color: '#5A5A5A',
    fontSize: 14,
  },
  dayOfWeekLabel: {
    color: '#7A7A7A', // Slightly lighter color for the day of the week
    fontSize: 12,
  },
});

export default DaySelector;