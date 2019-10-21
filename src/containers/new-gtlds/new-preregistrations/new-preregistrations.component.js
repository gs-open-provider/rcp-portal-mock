import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './new-preregistrations.style';

const NewPreregistrations = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="h6">
        {ready && t('NEW_PRE_REGISTRATIONS')}
      </Typography>
    </div>
  );
};

NewPreregistrations.defaultProps = {
};

NewPreregistrations.propTypes = {
};

export default withStyles(styles, { withTheme: true })(NewPreregistrations);
