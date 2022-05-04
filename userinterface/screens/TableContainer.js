import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import ResultTable from './Table';

export default class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.tableData
    }
  }

  componentDidMount(){
      let headers = [];
      let tableData = [];
      let executionTimes = [];
      let queries = [];
      for(let i = 0; i< this.props.tableData.length; i++){
          headers.push(this.props.tableData[i]['columns']);
          tableData.push(this.props.tableData[i]['results']);
          executionTimes.push(this.props.tableData[i]['time']);
          queries.push(this.props.tableData[i]['query']);
      }
      this.setState({headers: headers, tableData: tableData, executionTimes: executionTimes, queries: queries});
  }
  
  render() {

    console.log("this.renders",this.state);

    return (
      <View style={styles.container}>
          <ScrollView keyboardShouldPersistTaps='never'>

                {!!this.state.headers && this.state.headers.map((item, index) => {
                    return (
                        <View style = {{ minHeight: '200px', maxHeight: '400px', width: '100%' }}>
                            <Text style={styles.textParent}>Query: <Text style={styles.textChild}>{this.state.queries[index]}</Text></Text>
                            <Text style={styles.textParent}>Execution Time: <Text style={styles.textChild}>{this.state.executionTimes[index]}</Text></Text>
                            <ResultTable headers={this.state.headers[index]} data={this.state.tableData[index]}/>
                        </View>  
                    );
                })}
          </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#ffffff' ,
    // width: '100%'
    maxHeight: '400px'
  },
  textParent:{
      fontSize: 16,
      fontWeight: 200
  },
  textChild:{
      fontWeight: 'bold'
  }

});