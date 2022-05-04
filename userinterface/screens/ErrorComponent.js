import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';


export default class ErrorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: this.props.errorData.results.error_msg,
      errorNo: this.props.errorData.results.error_no,
      errorState: this.props.errorData.results.sqlstate,
      query: this.props.errorData.query
    }
  }
  render() {
      console.log("pop",this.props);
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps='never'>
            <Text style={styles.sideHeading}>Error Message: <Text style={styles.textValue}>{this.state.errorMsg}</Text></Text>
            <Text style={styles.sideHeading}>Error Query: <Text style={styles.textValue}>{this.state.query}</Text></Text>
            <Text style={styles.sideHeading}>Error Number: <Text style={styles.textValue}>{this.state.errorNo}</Text></Text>
            <Text style={styles.sideHeading}>SQL Status: <Text style={styles.textValue}>{this.state.errorState}</Text></Text>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    paddingTop: 30,
    flexDirection: 'column',

    // width: '100%'
  },
  sideHeading:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  textValue:{
    fontSize: 14,
    fontWeight: "400",
    color: 'red'
  }
});