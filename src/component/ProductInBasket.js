import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';

const ProductInBasket = (props) => {

  const pricePerQuantity = (() => {
    const result = props.price * props.count;
    return result;
  })();

  return (
    <View style={style.item}>
      {props.img === null ? <Text>Изображение не найдено</Text>: <Image style={style.productImg} source={props.img}/> }
      <Text style={style.textInfo}>{props.name}</Text>
      <Text style={style.textInfo}>Кол-во: {props.count}</Text>
      <Text style={style.textInfo}>Цена: {pricePerQuantity}</Text>
      <View style={style.countContaiter}>
        <TouchableOpacity style={style.buttonCount} onPress={() => props.setCount('DECREASE', props.id)}><Text style={style.text}>-</Text></TouchableOpacity>
        <Text style={style.count}>{props.count}</Text>
        <TouchableOpacity style={style.buttonCount} onPress={() => props.setCount('INCREASE', props.id)}><Text style={style.text}>+</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={style.button} onPress={() => {props.addToBasket(props.id, 1)}}><Text style={style.buttonText}>Удалить</Text></TouchableOpacity>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width;
const widthProportian = '80%';

const style = StyleSheet.create({
  item: {
    position: "relative",
    width: (windowWidth/1.8),
    height: 330,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.10,
    shadowRadius: 2.22,
    elevation: 3,
  },
  button: {
    backgroundColor: '#ff79c6',
    width: 100,
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productImg: {
    flex: 1,
    width: widthProportian,
    resizeMode: 'contain'
  },
  countContaiter: {
    flexDirection: 'row'
  },
  buttonCount: {
    borderWidth: 1,
    borderRadius: 25/2,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: 'center'
  },
  text: {
    textAlign: "center",
    color: '#000',
    fontSize: 19
  },
  textInfo: {
    flex: 0.2,
    textAlign: "center",
    color: '#000',
    fontSize: 16
  },
  count: {
    flex: 0.7,
    textAlign: "center",
    fontSize: 20
  }
})
export default ProductInBasket;