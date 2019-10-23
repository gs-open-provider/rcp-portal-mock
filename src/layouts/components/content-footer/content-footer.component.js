import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { useTranslation } from 'react-i18next';
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
            >
              {
                ready &&
                <small>
                  {
                    t('ALL_RIGHTS_RESERVED')
                  }
                  &nbsp;&copy; 2014 - 2019.&nbsp;
                  <a
                    className={classes.ownerLink}
                    href="https://www.openprovider.com/"
                    target="blank"
                  >
                    Openprovider
                  </a>
                </small>
              }
            </Typography>
          </Grid>
          {/* <span className="portal-flex" /> */}
          <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {/* <Typography
              variant="h6"
              color="inherit"
            > */}
            <Hidden smDown>
              <Typography>{ready && t('CONTACT_US')} | {t('DASHBOARD')} | {t('KNOWLEDGE_BASE')} | {t('TERMS_AND_CONDITIONS')}</Typography>
            </Hidden>
            <Hidden mdUp>
              <Grid container direction="row" justify="center" xs>
                <Grid container justify="center" item xs={12} sm={6} md={3}>
                  {ready && t('CONTACT_US')}
                </Grid>
                <Grid container justify="center" item xs={12} sm={6} md={3}>
                  {ready && t('DASHBOARD')}
                </Grid>
                <Grid container justify="center" item xs={12} sm={6} md={3}>
                  {ready && t('KNOWLEDGE_BASE')}
                </Grid>
                <Grid container justify="center" item xs={12} sm={6} md={3}>
                  {ready && t('TERMS_AND_CONDITIONS')}
                </Grid>
              </Grid>
            </Hidden>
            {/* </Typography> */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

ContentFooter.propTypes = {
  classes: PropTypes.shape({
    coloredIcon: PropTypes.string,
    ownerLink: PropTypes.string
  }).isRequired
};


export default withStyles(themeStyles)(ContentFooter);
