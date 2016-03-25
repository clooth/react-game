import React, { PropTypes } from 'react';

const Stats = (props) => {
  const { bank, coinsPerSecond } = props;
  const bankFormatted = Math.round(bank * 100) / 100;
  const coinsPerSecondFormatted = Math.round(coinsPerSecond * 100) / 100;

  return (
    <div>
      <strong>Stats</strong>
      <p><strong>Bank:</strong> <span>{bankFormatted}</span> coins</p>
      <p><strong>Coin/second:</strong> {coinsPerSecondFormatted} coins</p>
    </div>
  );
};

Stats.propTypes = {
  bank: PropTypes.number,
  coinsPerSecond: PropTypes.number,
};

export default Stats;
