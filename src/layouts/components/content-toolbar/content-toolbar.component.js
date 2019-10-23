import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';

// Material components
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import withTheme from '@material-ui/core/styles/withTheme';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';

// Actions
import { updateLayout, toggleSidenav, toggleNotifications } from '../../../actions/layout.actions';
import { changeTheme, changeThemeDirection } from '../../../actions/theme.actions';
import UtilityService from '../../../services/UtilityService';

// Menu Items
import { menuItems } from '../../../assets/data/sidenav/menu-items';

// Themes
import scss from './content-toolbar.module.scss';
import { API } from '../../../config';

// Custom Components
import UserInfo from '../userinfo/userinfo.component';

// Mock Data
import userInfo from '../../../assets/data/sidenav/user-info';

function setTitle(items, currentPath, t) {
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].href && items[i].href === currentPath) {
      return t(items[i].title);
    }

    if (items[i].children) {
      const result = setTitle(items[i].children, currentPath, t);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

class ContentToolbar extends React.Component {
  state = {
    languages: [],
    languageMenuEl: null,
    userMenuEl: null,
    languageMenuOpen: false,
    userMenuOpen: false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await UtilityService.getRequest(API.getLanguages);
    if (response) {
      const data = response.data.success && response.data.data ? response.data.data : null;
      if (data !== null) {
        const someLangs = [];
        for (let i = 0; i < data.length;) {
          someLangs.push({
            code: data[i].language,
            icon: data[i].iconUrl,
            label: data[i].label
          });
          i += 1;
        }
        this.setState({ languages: someLangs });
      }
    }
  }

  handleOpenLanguageClick = (event) => {
    const { languages } = this.state;
    this.setState({ languageMenuEl: event.currentTarget, languageMenuOpen: languages && languages.length > 0 });
  };

  handleSelectLanguageClick = (event, selectedLanguage) => {
    this.setState({
      languageMenuEl: null,
      languageMenuOpen: false
    });
    i18n.changeLanguage(selectedLanguage.code);
  };

  handleCloseLanguageClick = () => {
    this.setState({ languageMenuEl: null, languageMenuOpen: false });
  };

  handleOpenUserClick = (event) => {
    this.setState({ userMenuEl: event.currentTarget, userMenuOpen: true });
  };

  handleCloseUserClick = () => {
    this.setState({ userMenuEl: null, userMenuOpen: false });
  };

  render() {
    const {
      width,
      layout,
      location,
      tReady,
      t
    } = this.props;
    const {
      languages,
      languageMenuEl,
      languageMenuOpen,
      userMenuEl,
      userMenuOpen
    } = this.state;

    const showBurgerMenu = isWidthDown('sm', width) || !layout.sidenavOpen;

    return (
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open sidenav"
          style={{ display: showBurgerMenu ? 'block' : 'none' }}
          onClick={this.props.toggleSidenav}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography variant="h6" color="inherit" className={scss['portal-toolbar-logo-text']} noWrap>
            {tReady && (setTitle(menuItems, location.pathname, t) || 'Route Not Found')}
          </Typography>
        </div>
        <span className="portal-flex" />
        <IconButton
          color="inherit"
          aria-label="change language"
          onClick={this.handleOpenLanguageClick}
        >
          <LanguageIcon />
        </IconButton>
        <Menu
          id="theme-menu"
          anchorEl={languageMenuEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={languageMenuOpen}
          onClose={this.handleCloseLanguageClick}
        >
          {languages && languages.length > 0 && languages.map(langOption => (
            <MenuItem key={langOption.code} onClick={event => this.handleSelectLanguageClick(event, langOption)}>
              {langOption.code} - {langOption.label} (<img src={langOption.icon} alt={langOption.code} width={16} />)
            </MenuItem>
          ))}
        </Menu>
        <IconButton
          color="inherit"
          aria-label="open notifications"
          onClick={this.props.toggleNotifications}
        >
          <NotificationsIcon />
        </IconButton>
        <UserInfo
          isMobileView={isWidthDown('sm', width)}
          userDetails={userInfo[0]}
          handleMenuOpen={this.handleOpenUserClick}
        />
        <Menu
          id="theme-menu"
          anchorEl={userMenuEl}
          open={userMenuOpen}
          onClose={this.handleCloseUserClick}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MenuItem style={{ minWidth: 260 }}>
            Profile
          </MenuItem>
          <MenuItem>
            Signout
          </MenuItem>
        </Menu>
      </Toolbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout: {
      sidenavOpen: state.layout.sidenavOpen
    }
  };
}

ContentToolbar.defaultProps = {
  tReady: false,
  t: () => { }
};

ContentToolbar.propTypes = {
  width: PropTypes.string.isRequired,
  layout: PropTypes.shape({
    sidenavOpen: PropTypes.bool.isRequired
  }).isRequired,
  theme: PropTypes.shape({
    direction: PropTypes.string.isRequired
  }).isRequired,
  toggleSidenav: PropTypes.func.isRequired,
  toggleNotifications: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  tReady: PropTypes.bool,
  t: PropTypes.func
};

const ContToolbar = withTheme(connect(mapStateToProps, {
  toggleSidenav,
  toggleNotifications,
  updateLayout,
  changeTheme,
  changeThemeDirection
})(withRouter(withTranslation()(withWidth()(ContentToolbar)))));

function WithTheme() {
  return (
    // <ThemeProvider>
    <ContToolbar />
    // </ThemeProvider>
  );
}

export default compose(
  withRouter,
  withWidth(),
)(WithTheme);
