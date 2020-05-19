import React from 'react';
import { StyleSheet, View, FlatList, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";
import ProductInBasket from '../component/ProductInBasket';


const Basket = ({ navigation }) => {
  const basket = useSelector(state => state.basket);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const productInBasket = [];

  const onAddToBasket = (item, count) => {
    dispatch(actions.addToBasket(new Map([[item, { count }]])));
  }

  basket.forEach((value, key, map) => {
    const product = products.get(key);
    product.count = value.count;
    product.id = key;
    productInBasket.push(product);
  });

  const summPrice = productInBasket.reduce((sum, current) => {
    return sum + (current.price * current.count);
  }, 0);

  const setCount = (status, id) => {

    if (status === 'INCREASE') {
      if (basket.get(id).count < 10) {
        const result = new Map([]);
        result.set(id, basket.get(id).count + 1)
        dispatch(actions.setToBasketProductCount(result));
      }
    };
    if (status === 'DECREASE') {
      if (basket.get(id).count > 1) {
        const result = new Map([]);
        result.set(id, basket.get(id).count - 1)
        dispatch(actions.setToBasketProductCount(result));
      }
    };
  };

  return (
    <View style={style.container}>
      {
        productInBasket.length === 0
          ?
          <Text>Корзина пустая</Text>
          :
          <>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={productInBasket}
              renderItem={({ item }) => (
                <ProductInBasket 
                  price={item.price} 
                  img={item.img} 
                  name={item.name} 
                  count={item.count} 
                  id={item.id} 
                  addToBasket={onAddToBasket} 
                  setCount={setCount} 
                />
              )}
            />
            <View style={style.containerCheque}>
              <Text style={style.text}>Сумма заказа: {summPrice}</Text>
              <Button title="Оплатить" onPress={() => navigation.navigate('Чек')} />
            </View>
          </>
      }
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  text: {
    textAlign: 'center',
  },
  containerCheque: {
    position: 'relative',
    marginBottom: 40,
  }
})

export default Basket;