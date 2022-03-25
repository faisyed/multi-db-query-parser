import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import ResultTable from './Table';

const ABCSchema = () => {

  const products = {
    'name': 'products',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [
      {
        'Default': "0",
        'Extra': "",
        'Field': "PRODUCT_ID",
        'Key': "PRI",
        'Null': "NO",
        'Type': "bigint unsigned"
      },
      {
        'Field': "PRODUCTNAME",
        'Key': "",
        'Null': "YES",
        'Type': "varchar(1000)",
        'Default': "null",
        'Extra': ""
      }
    ]
  };


  const orders = {
    'name': 'orders',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [
      {
        'Default': 'null',
        'Extra': "",
        'Field': "OrderID",
        'Key': "",
        'Null': "YES",
        'Type': "varchar(1000)"
      },
      {
        'Field': "OrderDate",
        'Key': "",
        'Null': "YES",
        'Type': "timestamp",
        'Default': "null",
        'Extra': ""
      },
      {
        'Field': "Order_ShippedDate",
        'Key': "",
        'Null': "YES",
        'Type': "varchar(100)",
        'Default': "null",
        'Extra': ""
      },
      {
        'Field': "Order_Freight",
        'Key': "",
        'Null': "YES",
        'Type': "varchar(1000)",
        'Default': "null",
        'Extra': ""
      },
      {
        'Field': "Order_ShipCity",
        'Key': "",
        'Null': "YES",
        'Type': "varchar(1000)",
        'Default': "null",
        'Extra': ""
      },
      {
        'Field': "Order_ShipCountry",
        'Key': "",
        'Null': "YES",
        'Type': "varchar(100)",
        'Default': "null",
        'Extra': ""
      },
      {
        'Field': "EMPLOYEE_ID",
        'Key': "",
        'Null': "NO",
        'Type': "bigint unsigned",
        'Default': "0",
        'Extra': ""
      },
      {
        'Field': "EMPLOYEE_ID",
        'Key': "",
        'Null': "NO",
        'Type': "bigint unsigned",
        'Default': "null",
        'Extra': ""
      },
      {
        'Field': "CUSTOMER_ID",
        'Key': "",
        'Null': "NO",
        'Type': "bigint unsigned",
        'Default': "0",
        'Extra': ""
      }
    ]
  };

  const orders_products = {
    'name': 'order_products',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [{
      'Field': 'OrderID',
      'Type': 'varchar(1000)',
      'Null': 'YES',
      'Key': '',
      'Default': 'None',
      'Extra': ''
    }, {
      'Field': 'PRODUCT_ID',
      'Type': 'bigint unsigned',
      'Null': 'NO',
      'Key': '',
      'Default': '0',
      'Extra': ''
    }, {
      'Field': 'Order_UnitPrice',
      'Type': 'double',
      'Null': 'YES',
      'Key': '',
      'Default': 'None',
      'Extra': ''
    }, {
      'Field': 'Order_Quantity',
      'Type': 'double',
      'Null': 'YES',
      'Key': '',
      'Default': 'None',
      'Extra': ''
    }, {'Field': 'Order_Amount', 'Type': 'double', 'Null': 'YES', 'Key': '', 'Default': 'None', 'Extra': ''}]
  };

  const employees = {
    'name': 'employees',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [{'Field': 'EMPLOYEE_ID', 'Type': 'bigint unsigned', 'Null': 'NO', 'Key': 'PRI', 'Default': '0', 'Extra': ''}, {'Field': 'Employee_LastName', 'Type': 'varchar(1000)', 'Null': 'YES', 'Key': '', 'Default': 'None', 'Extra': ''}, {'Field': 'Employee_FirstName', 'Type': 'varchar(1000)', 'Null': 'YES', 'Key': '', 'Default': 'None', 'Extra': ''}, {'Field': 'Employee_Title', 'Type': 'varchar(1000)', 'Null': 'YES', 'Key': '', 'Default': 'None', 'Extra': ''}]
  };

  const customers = {
    'name': 'customers',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [{'Field': 'CUSTOMER_ID', 'Type': 'bigint unsigned', 'Null': 'NO', 'Key': 'PRI', 'Default': '0', 'Extra': ''}, {'Field': 'COMPANY_ID', 'Type': 'bigint unsigned', 'Null': 'NO', 'Key': '', 'Default': '0', 'Extra': ''}, {'Field': 'Customer_ContactName', 'Type': 'varchar(1000)', 'Null': 'YES', 'Key': '', 'Default': 'None', 'Extra': ''}, {'Field': 'Customer_City', 'Type': 'varchar(1000)', 'Null': 'YES', 'Key': '', 'Default': 'None', 'Extra': ''}, {'Field': 'Customer_Country', 'Type': 'varchar(1000)', 'Null': 'YES', 'Key': '', 'Default': 'None', 'Extra': ''}, {'Field': 'Customer_Phone', 'Type': 'varchar(1000)', 'Null': 'YES', 'Key': '', 'Default': 'None', 'Extra': ''}]
  };

  const company = {
    'name': 'company',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [{
      'Field': 'COMPANY_ID',
      'Type': 'bigint unsigned',
      'Null': 'NO',
      'Key': '',
      'Default': '0',
      'Extra': ''
    }, {'Field': 'COMPANYNAME', 'Type': 'varchar(1000)', 'Null': 'YES', 'Key': '', 'Default': 'None', 'Extra': ''}]
  };

  const schemas = [products, orders, orders_products, employees, customers, company];

  return (
    <View style={styles.container}>
      <ScrollView>
        {schemas.map((schema) => {
          return (
            <View>
              <Text style = {styles.heading}>{schema.name}</Text>
              <ResultTable headers={schema.columns} data={schema.results}/>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    flexDirection: 'column'
  },
  heading:{
    fontSize: 24,
    paddingTop: 8,
    paddingBottom: 8,
    alignSelf: 'center'
  }
});

export default ABCSchema;
