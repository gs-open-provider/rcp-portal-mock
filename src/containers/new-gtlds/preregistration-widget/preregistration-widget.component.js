import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './preregistration-widget.style';

const PreregistrationWidget = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="h6">
        {ready && t('PREREGISTRATION_WIDGET')}
      </Typography>
    </div>
  );
};

PreregistrationWidget.defaultProps = {
};

PreregistrationWidget.propTypes = {
};

export default withStyles(styles, { withTheme: true })(PreregistrationWidget);
