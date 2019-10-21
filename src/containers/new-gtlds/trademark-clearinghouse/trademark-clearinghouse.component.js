import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './trademark-clearinghouse.style';

const TrademarkClearinghouse = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="h6">
        {ready && t('TRADEMARK_CLEARINGHOUSE')}
      </Typography>
    </div>
  );
};

TrademarkClearinghouse.defaultProps = {
};

TrademarkClearinghouse.propTypes = {
};

export default withStyles(styles, { withTheme: true })(TrademarkClearinghouse);
