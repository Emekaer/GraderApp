import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ResultData = (props) => {
  return (
    <View style={styles.row}>
      <View style={styles.sn}>
        <Text style={styles.text}>{props.sn}.</Text>
      </View>

      <TouchableOpacity onLongPress={props.delete}>
        <View style={styles.info}>
          <Text style={styles.text}>{props.courseCode.toUpperCase()}</Text>
          <Text style={styles.text}>{props.courseUnits}</Text>
          <Text style={styles.text}> {props.grade}</Text>
        </View>
      </TouchableOpacity>
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
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: "right",
    paddingLeft: 30,
  },
});

export default ResultData;
