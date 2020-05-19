import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, StyleSheet, Button, Text } from 'react-native';
import * as actions from "../store/actions";

import Product from "../component/Product";


const Store = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const basket = useSelector(state => state.basket);

  const onAddToBasket = (item, count) => {
    dispatch(actions.addToBasket(new Map([[item, {count}]])));
  }

  return (
    <View style={style.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.toString()}
        data={[...products.keys()]}
        renderItem={({item}) => (
          <View>
            <Product
            id={item}
            name={products.get(item).name}
            img={products.get(item).img}
            buttonTitle={basket.get(item) ? 'Убрать' : 'Добавить'}
            price={products.get(item).price}
            addToBasket={onAddToBasket}
            />
          </View>
        )}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35
  }
})

export default Store;