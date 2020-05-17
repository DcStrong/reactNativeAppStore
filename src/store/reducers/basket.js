import * as utils from '../../utils';
import { ADD_TO_BASKET, RESTORE_BASKET_FROM_LOCAL_STORAGE, SET_TO_BASKET_PRODUCT_COUNT } from '../actions/types';

const initialState = new Map([]);

export default function basketStore(state = initialState, { type, payload }) {

  switch (type) {
    case ADD_TO_BASKET:
      let payloadKey = payload.keys().next().value;
      let payloadValue = payload.values().next().value;

      if (state.has(payloadKey)) {
        state.delete(payloadKey);
      } else {
        state.set(payloadKey, payloadValue);
      }
      utils.asyncStorageSetWrapper('@itemBasket', JSON.stringify([...state.entries()]));
      return new Map([...state]);

    case RESTORE_BASKET_FROM_LOCAL_STORAGE:
      const mapPayload = payload;
      mapPayload.map(id => state.set(id[0], id[1]))
      return new Map([...state]);

    case SET_TO_BASKET_PRODUCT_COUNT:
      payload.forEach((value, key) => {
        state.set(key, {count: value});
      })
      return new Map([...state]);

    default:
      return state;
  };
};