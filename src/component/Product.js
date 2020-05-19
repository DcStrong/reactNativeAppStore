import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';

const Product = (props) => {
  return (
    <View style={style.item}>
      {props.img === null ? <Text>Изображение не найдено</Text>: <Image style={style.productImg} source={props.img}/> }
      <Text>{props.name}</Text>
      <Text>{props.price}</Text>
      <TouchableOpacity style={style.button} onPress={() => {props.addToBasket(props.id, 1)}}><Text style={style.buttonText}>{props.buttonTitle}</Text></TouchableOpacity>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const widthProportian = '80%';
const style = StyleSheet.create({
  item: {
    position: "relative",
    width: (windowWidth/2) - 20,
    height: 300,
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
    borderRadius: 15
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productImg: {
    flex: 0.5,
    width: widthProportian,
    resizeMode: 'contain'
  }
})
export default Product;