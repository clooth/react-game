import { fromJS } from 'immutable';
import ActionTypes from '../actions/action-types';
import { tick, work, purchase } from '../actions/actions';

// Initial game state
const initialState = fromJS({
  coinsPerSecond: 1,
  bank: 0,
  lastUpdateTime: new Date().getTime(),
  items: {
    dele1: {
      id: 'dele1',
      name: 'Delegaatti',
      cost: 5,
      costIncrease: 1,
      coinsPerSecond: 2,
      owned: 0,
    },
  },
});

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TICK:
      return tick(state, action);
    case ActionTypes.WORK:
      return work(state, action.effort);
    case ActionTypes.PURCHASE:
      return purchase(state, action.item);
    default:
      return state;
  }
}
