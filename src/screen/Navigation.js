import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as utils from "../utils/index";
import * as actions from "../store/index";

import Store from './Store';
import Basket from './Basket';
import Cheque from './Cheque';

const Navigation = () => {

  const BasketStack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const basket = useSelector(state => state.basket);

  utils
    .asyncStorageGetWrapper("@itemBasket")
    .then((value) => {
      dispatch(actions.restoreBasketFromLocalStorage(JSON.parse(value)));
    })
    .catch((e) => console.log(e, "erorr"));

  function BasketStackScreen() {
    return (
      <BasketStack.Navigator headerMode="screen" initialRouteName="Корзина">
        <BasketStack.Screen
          name="Корзина"
          component={Basket}
          options={{ tabBarLabel: "Корзина" }}
        />
        <BasketStack.Screen name="Чек" component={Cheque} />
      </BasketStack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{backgroundColor: '#fff'}}>
        <Tab.Screen
          name="Store"
          component={Store}
          options={{
            title: "Магазин",
            tabBarLabel: "Магазин",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Basket"
          component={BasketStackScreen}
          options={{
            title: "Корзина",
            tabBarLabel: "Корзина",
            tabBarIcon: ({ color }) => (
              <View>
                {basket.size === 0 ? null : (
                  <View style={style.bascetCount}>
                    <Text style={style.basketCountText}>{basket.size}</Text>
                  </View>
                )}
                <MaterialCommunityIcons name="basket-fill" color={color} size={26} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  bascetCount: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 20,
    bottom: 5,
    backgroundColor: "red",
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
  },
  basketCountText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default Navigation;