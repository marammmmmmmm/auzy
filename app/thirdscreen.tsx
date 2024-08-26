import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HeaderComponent from '../components/thirdscreen/header';
import NotesComponent from '../components/thirdscreen/notes';

const ThirdScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <HeaderComponent />
      <NotesComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default ThirdScreen;