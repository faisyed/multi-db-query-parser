import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import InstaSch from '../screens/InstaSch';
import ABCSchema from '../screens/ABCSchema';
import ABCConc from '../screens/ABCConcER';
import ABCRel from '../screens/ABCRelER';
import InstaConcER from "../screens/InstaConcER";
import InstaRelER from "../screens/InstaRelER";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Instacart Conceptual ER" component={InstaConcER} />
      <Drawer.Screen name="Instacart Relational ER" component={InstaRelER} />
      <Drawer.Screen name="ABC Conceptual ER" component={ABCConc} />
      <Drawer.Screen name="ABC Relational ER" component={ABCRel} />
      <Drawer.Screen name="Instacart Schema" component={InstaSch} />
      <Drawer.Screen name="ABC Retail Schema" component={ABCSchema} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
