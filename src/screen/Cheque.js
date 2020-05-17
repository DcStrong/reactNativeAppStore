import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import ProductInCheque from '../component/ProductInCheque';

const Cheque = () => {
  const basket = useSelector(state => state.basket);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const productInBasket = [];

  basket.forEach((value, key, map) => {
    const product = products.get(key);
    product.count = value.count;
    product.id = key;
    productInBasket.push(product);
  });

  const summPrice = productInBasket.reduce((sum, current) => {
    return sum + (current.price * current.count);
  }, 0);

  return (
    <View style={style.container}>
      <Text>Cheque</Text>
      <View style={style.containerRow}>
        <Text>Название</Text>
        <Text>Кол-во</Text>
        <Text>Цена</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={productInBasket}
        renderItem={({ item }) => (
          <ProductInCheque price={item.price} item={item} name={item.name} count={item.count} id={item.id}/>
        )}
      />
      <View>
        <Text>Общая сумма заказа: {summPrice}</Text>
        <Button title='Потвердить заказ' onPress={() => alert(`Ваш заказ на сумму ${summPrice} оформлен`)}/>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300
  }
})

export default Cheque;