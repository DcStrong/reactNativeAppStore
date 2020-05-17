import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const ProductInBasket = (props) => {

  const pricePerQuantity = (() => {
    const result = props.price * props.count;
    return result;
  })();

  return (
    <View style={style.item}>
      <Text>{props.name}</Text>
      <Text>Кол-во: {props.count}</Text>
      <Text>Цена: {pricePerQuantity}</Text>
      <View style={style.countContaiter}>
        <TouchableOpacity style={style.buttonCount} onPress={() => props.setCount('INCREASE', props.id)}><Text style={style.text}>+</Text></TouchableOpacity>
        <Text style={style.count}>{props.count}</Text>
        <TouchableOpacity style={style.buttonCount} onPress={() => props.setCount('DECREASE', props.id)}><Text style={style.text}>-</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={style.button} onPress={() => {props.addToBasket(props.id, 1)}}><Text>Button</Text></TouchableOpacity>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width;
const style = StyleSheet.create({
  item: {
    borderWidth: 1,
    width: (windowWidth/2) - 10,
    height: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  countContaiter: {
    marginTop: 30,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
  },
  count: {
    flex: 1,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#9563',
    width: 100,
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
    marginBottom: 50
  },
  buttonCount: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#5435',
  }
})
export default ProductInBasket;