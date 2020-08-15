import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Alert, Button} from 'react-native';

const ResultRow = (props) => {
  const [courseCode, setCourseCode] = useState();
  const [courseUnits, setCourseUnits] = useState();
  const [score, setScore] = useState();

  const setDataHandler = () => {
    if (+score > 100 || +score < 0) {
      Alert.alert('Incorrect input', 'Please enter a number from 0-100');
      return;
    }
    if (+courseUnits > 4 || +courseUnits < 0) {
      Alert.alert('Incorrect input', 'Please enter a number from 0-4');
      return;
    }
    if (!courseCode || !courseUnits || !score) {
      Alert.alert(
        'Please complete the form',
        `You cannot proceed. \n Please complete form.`,
      );
      return;
    }

    props.submitHnadler(courseCode, courseUnits, score);
  };
  return (
    <View>
      <View style={styles.row}>
        <Text>{props.number}.</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Course Code'}
          onChangeText={(value) => setChosenColor(value)}
          autoFocus
          onChangeText={(value) => setCourseCode(value)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Course Units"
          maxLength={1}
          min={0}
          max={4}
          keyboardType="number-pad"
          onChangeText={(value) => setCourseUnits(value)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Score"
          maxLength={3}
          min={0}
          max={100}
          keyboardType="number-pad"
          onChangeText={(value) => setScore(value)}
        />
      </View>
      <Button color="green" title="Add Course" onPress={setDataHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    margin: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
  },
});

export default ResultRow;
