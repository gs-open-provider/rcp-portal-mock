import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './memberships.style';

const Memberships = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="h6">
        {ready && t('MEMBERSHIP_PLAN')}
      </Typography>
    </div>
  );
};

Memberships.defaultProps = {
};

Memberships.propTypes = {
};

export default withStyles(styles, { withTheme: true })(Memberships);
