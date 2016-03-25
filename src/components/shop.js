import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import ShopItem from './shop-item';

const Shop = (props) => {
  const {
    items,
    bank,
  } = props;

  const itemElements = items.valueSeq().map((item) => {
    const buyable = bank >= item.get('cost');

    return (
      <ShopItem
        key={item.get('id')}
        item={item}
        buyable={buyable}
      />
    );
  });

  return (
    <div>
      <h3>Shop</h3>
      {itemElements}
    </div>
  );
};

Shop.propTypes = {
  dispatch: PropTypes.func,
  items: ImmutablePropTypes.map,
  bank: PropTypes.number,
};

export default connect()(Shop);
