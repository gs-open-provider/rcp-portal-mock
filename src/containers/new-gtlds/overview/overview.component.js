import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './overview.style';

const NewGTLDsOverview = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="h6">
        {ready && t('NEW_GTLDS_OVERVIEW')}
      </Typography>
    </div>
  );
};

NewGTLDsOverview.defaultProps = {
};

NewGTLDsOverview.propTypes = {
};

export default withStyles(styles, { withTheme: true })(NewGTLDsOverview);
