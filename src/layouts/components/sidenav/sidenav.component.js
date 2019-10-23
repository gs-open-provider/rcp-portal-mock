import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';

// Material components
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { MuiThemeProvider } from '@material-ui/core';

// Actions
import { toggleSidenav } from '../../../actions/layout.actions';

// Styles
import scss from './sidenav.module.scss';
import { companyLogo } from '../../../assets/data/sidenav/menu-items';

const Sidenav = (props) => {
  const {
    theme,
    layout
  } = props;

  const sidenavTheme = createMuiTheme(theme.sidenavTheme);
  const dockedClass = layout.sidenavOpen ? scss[`portal-sidenav-${layout.currentLayout}`] : '';

  return (
    <MuiThemeProvider theme={sidenavTheme}>
      <Drawer
        variant={layout.sidenavVariant}
        open={layout.sidenavOpen}
        onClose={props.toggleSidenav}
        classes={{
          docked: dockedClass,
          paper: scss[`portal-sidenav-${layout.currentLayout}`]
        }}
        style={{ borderRightColor: 'white' }}
      >
        <AppBar
          color="inherit"
          position="static"
          style={{ borderRightColor: 'white' }}
        >
          <Toolbar style={{ justifyContent: 'center', backgroundColor: 'white' }}>
            <img src={companyLogo} className={scss['portal-toolbar-brand']} alt="logo" />
          </Toolbar>
        </AppBar>
        {props.children}
        <AppBar
          color="default"
          position="static"
        >
          <Toolbar disableGutters>
            <span className="portal-flex" />
            <IconButton onClick={props.toggleSidenav}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Drawer>
    </MuiThemeProvider>
  );
};

function mapStateToProps(state) {
  return {
    theme: state.theme,
    layout: {
      currentLayout: state.layout.currentLayout,
      sidenavOpen: state.layout.sidenavOpen,
      sidenavVariant: state.layout.sidenavVariant
    }
  };
}

Sidenav.propTypes = {
  toggleSidenav: PropTypes.func.isRequired,
  layout: PropTypes.shape({
    sidenavOpen: PropTypes.bool,
    currentLayout: PropTypes.string,
    sidenavVariant: PropTypes.string
  }).isRequired,
  theme: PropTypes.shape({
    sidenavTheme: PropTypes.shape({})
  }).isRequired,
  children: PropTypes.shape({}).isRequired
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    toggleSidenav
  })
)(Sidenav);
