import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native';

//Exercise 2
const movie = {title: 'Doctor Sleep', year: '2019'};

class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
      </View>
    );
  }
}
//Exercise 3 / Exercise 4
//let MOVIES_DATA = ['Doctor Sleep', 'Midway'];
/*
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
  },
  {
    title: 'Midway',
    year: '2019',
  },
];
let MovieList = () => {
  return MOVIES_DATA.map((name) => <Movie title={name} />);
};
*/

//Exercise 5
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];
let MovieList = () => {
  return MOVIES_DATA.map((name) => {
    return (
      <View>
        <Text>{name.title}</Text>
        <Text>{name.year}</Text>
        <Image source={name.poster} />
      </View>
    );
  });
};

export default MovieList;
