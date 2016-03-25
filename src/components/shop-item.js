import React from 'react';
import { connect } from 'react-redux';
import { purchase } from '../actions/action-creators';

const ShopItem = (props) => {
  const { dispatch, item, buyable } = props;
  const action = dispatch.bind(this, purchase(item.get('id')));

  return (
    <div>
      <p>
        <strong>{item.get('name')} ({item.get('owned')})</strong> (€{item.get('cost')})
         <button onClick={action} disabled={!buyable}>Osta</button>
      </p>
    </div>
  );
};

export default connect()(ShopItem);
