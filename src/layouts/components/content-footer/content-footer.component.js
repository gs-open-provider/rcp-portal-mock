import React from 'react';
import PropTypes from 'prop-types';

// Material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import FontAwesome from 'react-fontawesome';

import themeStyles from './content-footer.theme.style';

const ContentFooter = (props) => {
  const { classes, ...other } = props;
  const { t, ready } = useTranslation();

  return (
    <AppBar
      color="default"
      position="static"
      {...other}
    >
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          {
            ready &&
            <small>&copy; 2018&nbsp;
              {
                t('WELCOME')
              }
            </small>
          }
        </Typography>
        <span className="portal-flex" />
        <FontAwesome name="facebook" className={classes.coloredIcon} />
        <FontAwesome name="twitter" className={classes.coloredIcon} />
      </Toolbar>
    </AppBar>
  );
};

ContentFooter.propTypes = {
  classes: PropTypes.shape({
    coloredIcon: PropTypes.string
  }).isRequired
};


export default withStyles(themeStyles)(ContentFooter);
