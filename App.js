import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'

import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>

   
   
    <Home/>

    </PaperProvider>

  )
}