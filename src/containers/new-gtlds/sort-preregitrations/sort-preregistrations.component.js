import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './sort-preregistrations.style';

const SortPreregistrations = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="title">
        {ready && t('SORT_YOUR_PREREGISTRATIONS')}
      </Typography>
    </div>
  );
};

SortPreregistrations.defaultProps = {
};

SortPreregistrations.propTypes = {
};

export default withStyles(styles, { withTheme: true })(SortPreregistrations);
