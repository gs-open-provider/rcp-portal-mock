import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './professional.style';

const Professional = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="title">
        {ready && t('PROFESSIONAL')}
      </Typography>
    </div>
  );
};

Professional.defaultProps = {
};

Professional.propTypes = {
};

export default withStyles(styles, { withTheme: true })(Professional);
