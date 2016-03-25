import ActionTypes from './action-types';

export function tick(state) {
  return { type: ActionTypes.TICK, amount: state.get('coinsPerSecond') };
}

export function work(effort) {
  return { type: ActionTypes.WORK, effort };
}

export function purchase(item) {
  return { type: ActionTypes.PURCHASE, item };
}
