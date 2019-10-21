import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './gtlds.style';

const GTLDs = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="title">
        {ready && t('NEW_GTLDS_PACKAGES')}
      </Typography>
    </div>
  );
};

GTLDs.defaultProps = {
};

GTLDs.propTypes = {
};

export default withStyles(styles, { withTheme: true })(GTLDs);
