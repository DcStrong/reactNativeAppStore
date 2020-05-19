import * as utils from '../../utils';

const initialState = new Map([
  ['1', {name: 'Яблоко', price: '180', img: require('../../../assets/img/apple.jpeg')}],
  ['2', {name: 'Ананас', price: '120', img: require('../../../assets/img/ananas.jpg')}],
  ['3', {name: 'Морковь', price: '50', img: require('../../../assets/img/carrot.jpg')}],
  ['4', {name: 'Огурец', price: '60', img: require('../../../assets/img/cucumber.jpg')}],
  ['5', {name: 'Дыня', price: '300', img: require('../../../assets/img/melon.jpg')}],
  ['6', {name: 'Клубника', price: '550', img: require('../../../assets/img/strawberry.jpeg')}]
])
export default function products(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}