import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { work } from '../actions/action-creators';

const Button = (props) => {
  const { dispatch } = props;
  const effort = 5;
  const action = dispatch.bind(this, work(effort));

  return (
    <button onClick={action}>Go to work</button>
  );
};

Button.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(Button);
