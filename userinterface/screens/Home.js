import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Button } from 'react-native';
import { parseQuery } from '../api';
import ResultTable from './Table';
import ErrorComponent from './ErrorComponent';

const databases = [
  {
    id: '1',
    label: 'MySQL',
    value: 'mysql',
    selected: true
  },
  {
    id: '2',
    label: 'Redshift',
    value: 'redshift'
  }
];

const schemas = [
  {
    id: '1',
    label: 'Instacart',
    value: 'instacart',
    selected: true
  },
  {
    id: '2',
    label: 'ABC_Retail',
    value: 'abcretail'
  }
];

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
  const [databaseSelected, setDatabase] = React.useState(databases);
  const [radioButtons, setRadioButtons] = React.useState(databases);
  const [selectedSchema, setSchema] = React.useState(schemas);
  const [columns, setColumns] = React.useState(undefined);
  const [tableData, setTableData] = React.useState(undefined);
  const [showTable, setShowTable] = React.useState(false);
  const [timeToExecute, setTime] = React.useState('');
  const [showError, setErrorStatus] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState({'error_msg': undefined, 'error_no': undefined, 'sqlstate': undefined})

  function onPressRadioButton(radioButtonsArray){
    setRadioButtons(radioButtonsArray);
  }

  const executeQuery = () => {
    setShowTable(false);
    setErrorStatus(false);
    let databaseType = databaseSelected[0]['selected'] ? databaseSelected[0]['value']: databaseSelected[1]['value'];
    let schemaType = selectedSchema[0]['selected'] ? selectedSchema[0]['value']: selectedSchema[1]['value'];

    parseQuery(databaseType, schemaType, query).then((response) => {
      if(response.data.columns == null){
        setErrorMsg(response.data);
        setErrorStatus(true);
      }
      else{
        console.log("res.",response.data);
        setColumns(response.data.columns);
        setTableData(response.data.results);
        setTime(response.data.time);
        setShowTable(true);
      }

    });
  };

  
  return (
    <View style={styles.container} keyboardShouldPersistTaps='never'>
      <View style={styles.body}>
        <View style={styles.radioGroup}>
          <Text style={{paddingLeft:'2%'}}>Select database: </Text>
          <View style={styles.radioBut}>
            <RadioGroup
              radioButtons={databases}
              onPress={(value) => setDatabase(value)}
              layout = {'row'}

            />
          </View>
        </View>
        <View>
          <Text style={{paddingLeft:'2%'}}>Choose schema: </Text>
          <View style={styles.radioBut}>
            <RadioGroup
              radioButtons={schemas}
              onPress={(value) => setSchema(value)}
              layout = {'row'}

            />
          </View>
        </View>
        <View style={styles.textBox}  keyboardShouldPersistTaps='never'>
          <MultiTextInput
            multiline
            numberOfLines={4}
            placeholder={'Enter your query here!!!'}
            onChangeText = {(text) => onChangeQuery(text)}
            value={query}
            style={{padding:'2%', width: '98%', borderWidth:2}}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Execute'
            onPress={executeQuery}
          />
        </View>
        </View>
      {showTable && <Text>Query executed in {timeToExecute}</Text>}
      {showTable && <ResultTable headers={columns} data={tableData}/>}
      {showError && <ErrorComponent errorData = {errorMsg}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  radioGroup:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  radioBut:{
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16
  },
  scrollContainer:{
    minWidth: '100%'
  },
  tableHeader:{
    // width: '25%'
  },
  textBox:{
    padding: 5
  },
  button:{
    textAlign:'center',
    marginLeft:140,
    width:100
  }
});

export default Home;