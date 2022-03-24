import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const win = Dimensions.get("window");

const ABCConcER = () => (
   <Image
       source = {require('../resources/images/Instacart_relational_er.png')}
       style={{
          width: win.width,
          height: win.width+280,
          resizeMode: "contain",
          alignSelf: "center",
        }}
       resizeMode='stretch'
   />
)
export default ABCConcER