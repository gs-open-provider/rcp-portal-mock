import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './basic.style';

const Basic = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="title">
        {ready && t('BASIC')}
      </Typography>
    </div>
  );
};

Basic.defaultProps = {
};

Basic.propTypes = {
};

export default withStyles(styles, { withTheme: true })(Basic);
