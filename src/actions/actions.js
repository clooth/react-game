export function tick(state, action) {
  const currentTime = new Date().getTime();
  const lastUpdateTime = state.get('lastUpdateTime');
  const deltaTime = (currentTime - lastUpdateTime) / 1000;
  const framesPerSecond = Math.ceil((1.0 / deltaTime));
  const amount = (1 / framesPerSecond) * action.amount;

  return state.withMutations(mutableState => {
    mutableState.update('bank', val => val + amount);
    mutableState.update('lastUpdateTime', () => currentTime);
  });
}

export function work(state, effort) {
  return state.update('bank', val => val + effort);
}

export function purchase(state, item) {
  const cost = state.getIn(['items', item, 'cost']);
  const costIncrease = state.getIn(['items', item, 'costIncrease']);
  const coinsPerSecond = state.getIn(['items', item, 'coinsPerSecond']);

  if (state.get('bank') >= cost) {
    return state.withMutations(mutableState => {
      // Increase owned count
      mutableState.updateIn(['items', item, 'owned'], 0, val => val + 1);
      // Make item more expensive
      mutableState.updateIn(['items', item, 'cost'], val => val + costIncrease);
      // Remove money from bank
      mutableState.update('bank', val => val - cost);
      // Increase coins per tick
      mutableState.update('coinsPerSecond', val => val + coinsPerSecond);
    });
  }

  return state;
}
