/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import MovieList from './Movies.js';
import BoatList from './Boats.js';

const App: () => React$Node = () => {
  return (
    <View>
      <ScrollView>
        <MovieList />
        <BoatList />
      </ScrollView>
    </View>
  );
};
export default App;
