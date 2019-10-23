import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';

// Material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import themeStyles from './content-footer.theme.style';


class ContentFooter extends React.Component {
  renderRightsText = () => {
    const { classes, t, tReady } = this.props;
    return (
      <div>
        {
          tReady &&
          <small>
            {
              t('ALL_RIGHTS_RESERVED')
            }
            &nbsp;&copy; 2014 - 2019. <a className={classes.ownerLink} href="https://www.openprovider.com/" target="blank">Openprovider</a>
          </small>
        }
      </div>
    );
  };

  renderLinkItem = (name, link) => {
    const { classes, t, tReady } = this.props;
    return (
      <Link className={classes.linkItem} href="null" to={link} >
        {tReady && t(name)}
      </Link>
    );
  };

  render() {
    const {
      classes,
      t,
      tReady,
      ...other
    } = this.props;

    return (
      <AppBar
        color="default"
        position="static"
        {...other}
      >
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Hidden smDown>
                <Typography
                  variant="h6"
                  color="inherit"
                >
                  {this.renderRightsText(classes)}
                </Typography>
              </Hidden>
              <Hidden mdUp>
                <Typography
                  className={classes.rightsTextContainer}
                  variant="h6"
                  color="inherit"
                  noWrap
                >
                  {this.renderRightsText(classes)}
                </Typography>
              </Hidden>
            </Grid>
            <Grid item xs={12} md={6} >
              {
                tReady &&
                <div>
                  <Hidden smDown>
                    <Typography variant="subtitle1" className={classes.linkContainerLarge}>
                      <span>
                        {this.renderLinkItem('CONTACT_US', '/contact')}  |&nbsp;
                        {this.renderLinkItem(('DASHBOARD'), '/dashboard')}  |&nbsp;
                        {this.renderLinkItem(t('KNOWLEDGE_BASE'), '/knowledgebase')}  |&nbsp;
                        {this.renderLinkItem(t('TERMS_AND_CONDITIONS'), 'tc')}
                      </span>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Grid container direction="row" justify="center" className={classes.linkContainerSmall}>
                      <Grid container justify="center" item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1">{this.renderLinkItem('CONTACT_US', '/contact')}</Typography>
                      </Grid>
                      <Grid container justify="center" item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1">{this.renderLinkItem(('DASHBOARD'), '/dashboard')}</Typography>
                      </Grid>
                      <Grid container justify="center" item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1">{this.renderLinkItem(t('KNOWLEDGE_BASE'), '/knowledgebase')}</Typography>
                      </Grid>
                      <Grid container justify="center" item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1">{this.renderLinkItem(t('TERMS_AND_CONDITIONS'), 'tc')}</Typography>
                      </Grid>
                    </Grid>
                  </Hidden>
                </div>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

ContentFooter.defaultProps = {
  tReady: false
};

ContentFooter.propTypes = {
  classes: PropTypes.shape({
    coloredIcon: PropTypes.string,
    ownerLink: PropTypes.string,
    rightsTextContainer: PropTypes.string,
    linkItem: PropTypes.string,
    linkContainerLarge: PropTypes.string,
    linkContainerSmall: PropTypes.string
  }).isRequired,
  tReady: PropTypes.bool,
  t: PropTypes.func.isRequired
};


export default compose(withStyles(themeStyles), withTranslation())(ContentFooter);
