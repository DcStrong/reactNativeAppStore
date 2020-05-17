import * as utils from '../../utils';

const initialState = new Map([
  ['1', {name: 'Яблоко', price: '180', img: null}],
  ['2', {name: 'Ананас', price: '120', img: null}],
  ['3', {name: 'Морковь', price: '50', img: null}],
  ['4', {name: 'Огурец', price: '60', img: null}],
  ['5', {name: 'Дыня', price: '300', img: null}],
  ['6', {name: 'Клубника', price: '550', img: null}]
])
export default function products(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}