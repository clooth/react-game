import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import Stats from './stats';
import Button from './button';
import Shop from './shop';

const Main = (props) => {
  const { bank, coinsPerSecond, items } = props;

  return (
    <div>
      <Stats
        coinsPerSecond={coinsPerSecond}
        bank={bank}
      />
      <hr />
      <Button />
      <hr />
      <Shop
        bank={bank}
        items={items}
      />
    </div>
  );
};

Main.propTypes = {
  bank: PropTypes.number,
  coinsPerSecond: PropTypes.number,
  items: ImmutablePropTypes.map,
};

const stateToProps = function stateToProps(state) {
  return {
    coinsPerSecond: state.get('coinsPerSecond'),
    bank: state.get('bank'),
    items: state.get('items'),
  };
};

export default connect(stateToProps)(Main);
