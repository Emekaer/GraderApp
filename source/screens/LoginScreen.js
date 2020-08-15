import React from 'react';
import {View, StyleSheet, Text,} from 'react-native';


const homeScreen = (props) => {
  
  return (
    // <View>
    //   <Text>This is the home screen</Text>
    //   <ResultRow submitHandler={submitHandler} />
    // </View>
    <View style={styles.mainView}>
      <Text>This is the home screen</Text>
      <ResultRow submitHandler={(data) => submitHandler(data)} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default homeScreen;
