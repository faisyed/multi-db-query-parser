import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Button } from 'react-native';
import { parseQuery } from '../api';

const databases = [
  {
    id: '1',
    label: 'MySQL',
    value: 'mysql'
  },
  {
    id: '2',
    label: 'Redshift',
    value: 'redshift'
  }
]

const MultiTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={1000}
    />
  );
}

const Home = ({ navigation }) => {
  const [query, onChangeQuery] = React.useState('');
  const [databaseSelected, setDatabase] = React.useState('');
  const [radioButtons, setRadioButtons] = React.useState(databases);

  function onPressRadioButton(radioButtonsArray){
    setRadioButtons(radioButtonsArray);
  }

  const executeQuery = () => {
    let databaseType = databaseSelected[0]['selected'] ? databaseSelected[0]['value']: databaseSelected[1]['value'];

    parseQuery(databaseType, query).then((response) => {
      console.log("Some thing from backend",response.data);
    });
  };

  
  return (
    <View style={styles.container}>
      <Text style={{paddingBottom:20, fontWeight: 'bold'}}>Enter Query in below text area:</Text>
      <RadioGroup
        radioButtons={databases}
        onPress={(value) => setDatabase(value)}
        layout = {'row'}

      />
      <MultiTextInput
        multiline
        numberOfLines={10}
        placeholder={'select * from table;'}
        onChangeText = {(text) => onChangeQuery(text)}
        value={query}
        style={{padding:'2%', width: '98%', borderWidth:2}}
      />
      <Button
        title='Execute'
        onPress={executeQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

export default Home;