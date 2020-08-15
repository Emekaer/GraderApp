import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, Alert, Button} from 'react-native';

const ResultRow = (props) => {
  const [courseCode, setCourseCode] = useState();
  const [courseUnits, setCourseUnits] = useState();
  const [score, setScore] = useState();
  const [grade, setGrade] = useState();
  const [gp, setGp] = useState();

  useEffect(() => {
    if (75 <= score && score <= 100) {
      setGrade('A');
      console.log(score);
      setGp(4.0);
    } else if (70 <= score && score <= 74) {
      setGrade('AB');
      setGp(3.5);
    } else if (65 <= score && score <= 69) {
      setGrade('B');
      setGp(3.25);
    } else if (60 <= score && score <= 64) {
      setGrade('BC');
      setGp(3.0);
    } else if (55 <= score && score <= 59) {
      setGrade('C');
      setGp(2.75);
    } else if (50 <= score && score <= 54) {
      setGrade('CD');
      setGp(2.5);
    } else if (45 <= score && score <= 49) {
      setGrade('D');
      setGp(2.25);
    } else if (40 <= score && score <= 44) {
      setGrade('E');
      setGp(2.0);
    } else if (0 <= score && score <= 39) {
      setGrade('F');
      setGp(0);
    }
  }, [score]);

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
    props.submitHandler({
      courseCode: courseCode,
      courseUnits: courseUnits,
      score: score,
      grade: grade,
      gp: gp,
    });
  };

  return (
    <View>
      <View style={styles.row}>
        <Text>{props.number}.</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Course Code'}
          placeholderTextColor={'#ccc'}
          onChangeText={(value) => setChosenColor(value)}
          autoFocus
          textAlign="center"
          onChangeText={(value) => setCourseCode(value)}
        />
        <TextInput
          style={styles.textInput2}
          placeholder="Course Units"
          placeholderTextColor={'#ccc'}
          maxLength={1}
          textAlign="center"
          min={0}
          max={4}
          keyboardType="number-pad"
          onChangeText={(value) => setCourseUnits(value)}
        />
        <TextInput
          style={styles.textInput1}
          textAlign="center"
          placeholder={'Score'}
          placeholderTextColor={'#ccc'}
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
    width: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  textInput1: {
    height: 40,
    width: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  textInput2: {
    height: 40,
    width: 90,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ResultRow;
