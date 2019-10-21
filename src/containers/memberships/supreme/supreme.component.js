import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './supreme.style';

const Supreme = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="title">
        {ready && t('SUPREME_PLAN')}
      </Typography>
    </div>
  );
};

Supreme.defaultProps = {
};

Supreme.propTypes = {
};

export default withStyles(styles, { withTheme: true })(Supreme);
