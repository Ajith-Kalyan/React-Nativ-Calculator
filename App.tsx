/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Switch, StatusBar} from 'react-native';
import {ThemeContext} from './src/context/ThemeContext';
import {useState} from 'react';
import {myColors} from './src/styles/colors';
import Keypad from './src/components/Keypad';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, {backgroundColor: '#121212'}]
        }>
        <StatusBar />
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <Keypad/>
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
