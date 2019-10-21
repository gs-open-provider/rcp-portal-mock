import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './domain-application.style';

const DomainApplication = () => {
  const { t, ready } = useTranslation();

  return (
    <div>
      <Typography variant="h6">
        {ready && t('DOMAIN_APPLICATION')}
      </Typography>
    </div>
  );
};

DomainApplication.defaultProps = {
};

DomainApplication.propTypes = {
};

export default withStyles(styles, { withTheme: true })(DomainApplication);
