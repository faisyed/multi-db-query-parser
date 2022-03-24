import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import ResultTable from './Table';

const Cart = () => {

  const aisles = {
    'name': 'aisles',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [
      {
        'Field': "aisle_id",
        'Key': "PRI",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "aisle",
        'Key': "",
        'Null': "NO",
        'Type': "varchar(256)",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "department_id",
        'Key': "MUL",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      }
    ]
  };


  const department = {
    'name': 'department',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [
      {
        'Field': "department_id",
        'Key': "PRI",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "department",
        'Key': "",
        'Null': "NO",
        'Type': "varchar(256)",
        'Default': "NULL",
        'Extra': ""
      }
    ]
  };

  const order_products = {
    'name': 'order_products',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [
      {
        'Field': "order_id",
        'Key': "PRI",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "product_id",
        'Key': "PRI",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "add_to_cart_order",
        'Key': "",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "reordered",
        'Key': "",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      }
    ]
  };

  
  const orders = {
    'name': 'orders',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [
      {
        'Field': "order_id",
        'Key': "PRI",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "user_id",
        'Key': "",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "order_number",
        'Key': "",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "order_dow",
        'Key': "",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "order_hour_of_day",
        'Key': "",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "days_since_prior_order",
        'Key': "",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      }
    ]
  };



  const products = {
    'name': 'products',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [
      {
        'Field': "product_id",
        'Key': "PRI",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "product",
        'Key': "",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      },
      {
        'Field': "aisle_id",
        'Key': "",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      }
    ]
  };




  const users = {
    'name': 'users',
    'columns': ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
    'results': [
      {
        'Field': "user_id",
        'Key': "",
        'Null': "NO",
        'Type': "int",
        'Default': "NULL",
        'Extra': ""
      }
    ]
  };

  const schemas = [aisles, department, order_products, orders, products, users];

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

export default Cart;
