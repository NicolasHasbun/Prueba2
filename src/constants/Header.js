import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    padding: 45,
    alignItems: 'center',
  },
  
  title: {
    fontSize: 24,
    fontFamily: "OpenSans-Bold"
  },
});

export default Header;