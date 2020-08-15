import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, Button, Alert} from 'react-native';
import ResultRow from '../components/ResultRow';
import ResultData from '../components/ResultData';

const homeScreen = (props) => {
  const [Data, setData] = useState([]);


  const submitHandler = (data) => {
    const result = Data.concat(data);
    console.log(result);
    setData(result);
    console.log(Data);
  };


  const gpCalculatorHandler = () => {
    let sum = 0;
    let totalUnits = 0;
    for (let i = 0; i < Data.length; i++) {
      let units = Data[i].courseUnits;
      console.log(units, 'units');
      let gp = Data[i].gp;
      console.log(gp, 'gp');
      let result = units * gp;
      console.log(result, 'result');
      sum = sum + result;
      console.log(sum, 'Sum');
      let highestPos = units * 4;
      totalUnits = highestPos + totalUnits;
      console.log(totalUnits, 'Total Units');
    }

    const totalGrade = (sum / totalUnits) * 4;

    Alert.alert('Final Result', `Your G.P.A =${totalGrade.toFixed(2)}`);
  };

  const deleteHandler=(pid)=>{
      console.log(pid)
    const result = Data.filter((id)=> id.courseCode !== pid);
    console.log(result);
    setData(result);

  }

  return (
    <View style={styles.mainView}>
      <View style={styles.inputRegion}>
        <ResultRow submitHandler={(data) => submitHandler(data)} />
      </View>
      {Data.length == 0 ? null : (
        <View style={styles.row}>
          <View style={styles.sn}>
            <Text style={styles.text}>No.</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>Course Code</Text>
            <Text style={styles.text}>Units</Text>
            <Text style={styles.text}>Grade</Text>
          </View>
        </View>
      )}

      <FlatList
        scrollEnabled={true}
        data={Data}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <View>
            <ResultData
              sn={index + 1}
              courseCode={item.courseCode}
              courseUnits={item.courseUnits}
              grade={item.grade}
              delete={() => {
                deleteHandler(item.courseCode);
              }}
            />
          </View>
        )}
      />
      <View style={{margin: 30}}>
        <Button title="Get GPA" onPress={gpCalculatorHandler} color="green" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  inputRegion: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sn: {
    marginHorizontal: 15,
  },
  info: {
   width: "90%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default homeScreen;
