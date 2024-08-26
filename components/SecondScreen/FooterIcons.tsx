import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FooterIcons: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const footerIcons = [
    { label: 'Happy', color: '#F39C12', icon: '😁' },
    { label: 'Neutral', color: '#28B463', icon: '🙂' },
    { label: 'Sleep', color: '#85C1E9', icon: '💤' },
    { label: 'Food', color: '#3498DB', icon: '🍔' },
  ];

  const handleIconPress = (label: string) => {
    setSelectedIcon(label);
  };

  return (
    <View style={styles.footer}>
      {footerIcons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.footerIconContainer,
            {
              borderColor: icon.color,
              backgroundColor: selectedIcon === icon.label ? icon.color : '#FFFFFF',
            },
          ]}
          onPress={() => handleIconPress(icon.label)}
        >
          <Text
            style={[
              styles.footerIconText,
              { color: selectedIcon === icon.label ? '#FFFFFF' : icon.color },
            ]}
          >
            {icon.icon}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ECECEC',
  },
  footerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 16,
  },
  footerIconText: {
    fontSize: 24,
  },
});

export default FooterIcons;
