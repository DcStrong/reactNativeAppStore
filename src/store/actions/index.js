import {
  ADD_TO_BASKET,
  RESTORE_BASKET_FROM_LOCAL_STORAGE,
  SET_TO_BASKET_PRODUCT_COUNT,
} from "./types";

export function addToBasket(payload, count) {
  return { type: ADD_TO_BASKET, payload, count };
}

export function restoreBasketFromLocalStorage(payload) {
  return { type: RESTORE_BASKET_FROM_LOCAL_STORAGE, payload };
}

export function setToBasketProductCount(payload) {
  return { type: SET_TO_BASKET_PRODUCT_COUNT, payload };
}