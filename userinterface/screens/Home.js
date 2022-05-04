import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Button } from 'react-native';
import { parseQuery } from '../api';
import ErrorComponent from './ErrorComponent';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import TableContainer from './TableContainer';

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
  const [showChartButton, setChartButtonVisible] = React.useState(false);
  const [showError, setErrorStatus] = React.useState(false);
  const [chartData, setChartData] = React.useState(undefined);
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

      if(response.data.length > 0){
        setTableData(response.data);
        setShowTable(true);
      }
      else{
          setErrorMsg(response.data.results);
          setErrorStatus(true);
      }
      // if(response.data.columns == null){
      //   setErrorMsg(response.data.results);
      //   setErrorStatus(true);
      // }
      // else{
        // setTime(response.data.time);

        // for(let i = 0; i< response.data.columns.length; i++){
        //   if(response.data.columns[i].includes("total_price") || response.data.columns[i].includes("sum") || response.data.columns[i].includes("avg")){
        //     setChartButtonVisible(true);
        //   }
        //   else{
        //     setChartButtonVisible(false);
        //   }
        // }
        // setShowTable(true);
      // }

    });
  };

  const openChart = () => {

    var chartData = [];

    tableData.map((item) => {
        var keys = Object.keys(item);
        chartData.push({'x': item[keys[0]],'y': parseInt(item[keys[1]])});
        // chartData.push(parseInt(item[keys[1]]));
    });
    const slicedArray = chartData.slice(0, 10);
    setChartData(slicedArray);
  }
  return (
    <View style={styles.container} keyboardShouldPersistTaps='never'>
      <ScrollView >
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
        {showTable && (<View style={{ maxHeight: '800px' }}><TableContainer tableData={tableData}/></View>)}
        {showChartButton && (

                  <View style={{...styles.button, margin: '8px'}}>
                    <Button
                    title='Show Chart'
                    onPress={openChart}
                    />
                  </View>
        )}
        {showError && <ErrorComponent errorData = {errorMsg}/>}
        {!!chartData && chartData.length > 0 && (
        <View style={{ height: '400px' }}>
            <Chart
                style={{ height: 200, width: 400 }}
                data={chartData}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                xDomain={{ min: 0, max: chartData.length }}
                yDomain={{ min: 1, max: 2000 }}
              >
                <VerticalAxis tickCount={6} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
                <HorizontalAxis tickCount={chartData.length}/>
                <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
                <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
              </Chart>
        </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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