import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Button } from 'react-native';

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
  const [value, onChangeText] = React.useState('');
  const [radioButtons, setRadioButtons] = React.useState(databases);

  function onPressRadioButton(radioButtonsArray){
    setRadioButtons(radioButtonsArray);
  }
  
  return (
    <View style={styles.container}>
      <Text style={{paddingBottom:20}}><b>Enter Query in below text area:</b></Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={(value) => {this.setState({value:value})}}
        layout = {'row'}

      />
      <MultiTextInput
        multiline
        numberOfLines={10}
        placeholder={'select * from table;'}
        onChangeText = {text => onChangeText(text)}
        value={value}
        style={{padding:10, width:1000, borderWidth:2}}
      />
      <br/>
      <Button
        title='Execute'
        //onPress={executeQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  }
});

export default Home;
