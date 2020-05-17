import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Store from './Store';
import Basket from './Basket';
import Cheque from './Cheque';

const Navigation = () => {

  const BasketStack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

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
      <Tab.Navigator>
        <Tab.Screen
          name="Store"
          component={Store}
          options={{
            title: "Магазин",
            tabBarLabel: "Магазин"
          }}
        />
        <Tab.Screen
          name="Basket"
          component={BasketStackScreen}
          options={{
            title: "Корзина",
            tabBarLabel: "Корзина"
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