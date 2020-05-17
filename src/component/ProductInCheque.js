import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProductInCheque = (props) => {

  const pricePerQuantity = (() => {
    const result = props.price * props.count;
    return result;
  })();

  return (
    <View style={style.container}>
      <Text>{props.name}</Text>
      <Text>{props.count}</Text>
      <Text>{pricePerQuantity}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300
  }
})
export default ProductInCheque;