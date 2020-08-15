import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultData = (props) => {
  return (
    <View style={styles.row}>
      <View style={styles.sn}>
        <Text style={styles.text}>{props.sn}.</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.text}>{props.courseCode.toUpperCase()}</Text>
        <Text style={styles.text}>{props.courseUnits}</Text>
        <Text style={styles.text}> {props.grade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  sn: {
    marginHorizontal: 15,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default ResultData;
