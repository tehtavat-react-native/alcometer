import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [promilles, setPromilles] = useState(0);

  const nbrOfBottles=Array();
  nbrOfBottles.push({label: '1 bottle',value: 1});
  nbrOfBottles.push({label: '2 bottles',value: 2});
  nbrOfBottles.push({label: '3 bottles',value: 3});
  nbrOfBottles.push({label: '4 bottles',value: 4});
  nbrOfBottles.push({label: '5 bottles',value: 5});
  nbrOfBottles.push({label: '6 bottles',value: 6});
  nbrOfBottles.push({label: '7 bottles',value: 7});
  nbrOfBottles.push({label: '8 bottles',value: 8});
  nbrOfBottles.push({label: '9 bottles',value: 9});
  nbrOfBottles.push({label: '10 bottles',value: 10});
  nbrOfBottles.push({label: '11 bottles',value: 11});
  nbrOfBottles.push({label: '12 bottles',value: 12});
  nbrOfBottles.push({label: '13 bottles',value: 13});
  nbrOfBottles.push({label: '14 bottles',value: 14});
  nbrOfBottles.push({label: '15 bottles',value: 15});

  const timeinhours=Array();
  timeinhours.push({label: '1 hour',value: 1});
  timeinhours.push({label: '2 hours',value: 2});
  timeinhours.push({label: '3 hours',value: 3});
  timeinhours.push({label: '4 hours',value: 4});
  timeinhours.push({label: '5 hours',value: 5});
  timeinhours.push({label: '6 hours',value: 6});
  timeinhours.push({label: '6 hours',value: 6});
  timeinhours.push({label: '7 hours',value: 7});
  timeinhours.push({label: '8 hours',value: 8});
  timeinhours.push({label: '9 hours',value: 9});
  timeinhours.push({label: '10 hours',value: 10});
  timeinhours.push({label: '11 hours',value: 11});
  timeinhours.push({label: '12 hours',value: 12});
  timeinhours.push({label: '13 hours',value: 13});
  timeinhours.push({label: '14 hours',value: 14});
  timeinhours.push({label: '15 hours',value: 15});
  timeinhours.push({label: '16 hours',value: 16});
  timeinhours.push({label: '16 hours',value: 16});
  timeinhours.push({label: '17 hours',value: 17});
  timeinhours.push({label: '18 hours',value: 18});
  timeinhours.push({label: '19 hours',value: 19});
  timeinhours.push({label: '20 hours',value: 20});
  timeinhours.push({label: '21 hours',value: 21});
  timeinhours.push({label: '22 hours',value: 22});
  timeinhours.push({label: '23 hours',value: 23});

  const genders=Array();
  genders.push({label: 'Male',value: 'male'});
  genders.push({label: 'Female',value: 'female'});

  function calculate() {
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsleft = grams - burning * time;
    
    let result = 0;
    if (gender === 'male') {
      result = gramsleft / (weight * 0.7);
      if (result < 0) {
        result = 0;
      }
    }
    else {
      result = gramsleft / (weight * 0.6);
      if (result < 0) {
        result = 0;
      }
    }
    setPromilles(result);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setWeight(text)}
          placeholder="type here"
          keyboardType='numeric'>
        </TextInput>
      </View>
      <View style={styles.field}>
        <Text>Bottles</Text>
        <Picker
          onValueChange={(itemValue) => setBottles(itemValue)}
          selectedValue={bottles}
        >
          {nbrOfBottles.map((bottles,index) => (
            <Picker.Item key={index} label={bottles.label} value={bottles.value}/>
          ))
          }
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Time</Text>
        <Picker
          onValueChange={(itemValue) => setTime(itemValue)}
          selectedValue={time}
        >
          {timeinhours.map((time,index) => (
            <Picker.Item key={index} label={time.label} value={time.value}/>
          ))
          }
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
          style={styles.radio}
          buttonSize = {10}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}
        />
      </View>
      <View style={styles.field}>
        <Text>Promilles</Text>
        <Text>{promilles.toFixed(2)}</Text>
        <Button style={styles.button} onPress={calculate} title="Calculate"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  field: {
    margin: 10,
  },
  input: {
    marginLeft: 10,
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  }
});
