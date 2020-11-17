/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MovieList from './Movies.js';
import BoatList from './Boats.js';

const App: () => React$Node = () => {
  return (
    <View>
      <ScrollView>
        <Text>Lesson 05 Exercises{'\n'}</Text>
        <MovieList />
        <Text>{'\n\n'}</Text>
        <Text>Lesson 05 Mini Project{'\n'}</Text>
        <BoatList />
      </ScrollView>
    </View>
  );
};

export default App;
