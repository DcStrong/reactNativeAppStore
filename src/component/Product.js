import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const Product = (props) => {
  return (
    <View style={style.item}>
      <Text>{props.name}</Text>
      <Text>{props.price}</Text>
      <TouchableOpacity style={style.button} onPress={() => {props.addToBasket(props.id, 1)}}><Text>{props.buttonTitle}</Text></TouchableOpacity>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const style = StyleSheet.create({
  item: {
    borderWidth: 1,
    width: (windowWidth/2) - 20,
    height: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#9563',
    width: 100,
    alignItems: 'center',
    padding: 5,
    borderRadius: 15
  }
})
export default Product;