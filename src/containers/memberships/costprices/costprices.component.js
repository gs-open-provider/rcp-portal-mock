import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './costprices.style';

const CostPrices = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="title">
        {ready && t('OUR_COST_PRICES')}
      </Typography>
    </div>
  );
};

CostPrices.defaultProps = {
};

CostPrices.propTypes = {
};

export default withStyles(styles, { withTheme: true })(CostPrices);
