import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ResultRow from '../components/ResultRow';

const homeScreen = (props) => {
  const Data = [];
  const submitHandler = (data) => {
    console.log("it's ollay");
  };
  return (
    <View style={styles.mainView}>
      <Text>This is the home screen</Text>
      <ResultRow submitHandler={(data)=>submitHandler(data)} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
   marginTop: 40,
  },
});

export default homeScreen;
