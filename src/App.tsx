import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';

import Routes from './routes';
import defaultTheme from './styles/theme/default';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#312e38"
          translucent
        />
        <AppProvider>
          <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <Routes />
          </View>
        </AppProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
