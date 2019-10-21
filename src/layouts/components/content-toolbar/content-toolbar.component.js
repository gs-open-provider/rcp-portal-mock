import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

// Material components
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import withTheme from '@material-ui/core/styles/withTheme';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';

import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import LanguageIcon from '@material-ui/icons/Language';

// Actions
import { updateLayout, toggleSidenav, toggleNotifications } from '../../../actions/layout.actions';
import { changeTheme, changeThemeDirection } from '../../../actions/theme.actions';

// Menu Items
import { menuItems } from '../../../config';

// Themes
import themes from '../../../themes';
import scss from './content-toolbar.module.scss';
import logoImage from '../../../assets/images/op-logo.png';

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
    layoutMenuEl: null,
    layoutMenuOpen: false,
    themeMenuEl: null,
    themeMenuOpen: false,
    languages: [],
    languageMenuEl: null,
    languageMenuOpen: false
    // language: {
    //   code: localStorage.getItem('op_rcp_user_language_code') || "en",
    //   icon: localStorage.getItem('op_rcp_user_language_icon') ||
    // "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
    // }
  };

  componentDidMount() {
    this.fetchData();
  }

  // getLanguageProps = () => {
  //   const { languages } = this.state;
  //   for (let i = 0; i < languages.length;) {
  //     if (languages[i].code === i18n.language) {
  //       return languages[i];
  //     }
  //   }
  //   console.warn('Prop not found for selected language. Hence, falling back to default language (English)');
  //   return {
  //     code: 'en',
  //     icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png'
  //   };
  // }

  fetchData = async () => {
    const response = await (await fetch('http://localhost:9090/v1/admin/languages')).json();
    if (response) {
      const data = response.success && response.data ? response.data : null;
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

  handleOpenLayoutClick = (event) => {
    this.setState({ layoutMenuEl: event.currentTarget, layoutMenuOpen: true });
  };

  handleSelectLayoutClick = (event, layout) => {
    this.props.updateLayout(layout);
    this.setState({ layoutMenuEl: null, layoutMenuOpen: false });
  }

  handleCloseLayoutClick = () => {
    this.setState({ layoutMenuEl: null, layoutMenuOpen: false });
  };

  handleOpenThemeClick = (event) => {
    this.setState({ themeMenuEl: event.currentTarget, themeMenuOpen: true });
  };

  handleSelectThemeClick = (event, selectedTheme) => {
    this.props.changeTheme(selectedTheme.theme);
    this.setState({ themeMenuEl: null, themeMenuOpen: false });
  }

  handleCloseThemeClick = () => {
    this.setState({ themeMenuEl: null, themeMenuOpen: false });
  };

  handleOpenLanguageClick = (event) => {
    this.setState({ languageMenuEl: event.currentTarget, languageMenuOpen: true });
  };

  handleSelectLanguageClick = (event, selectedLanguage) => {
    this.setState({
      languageMenuEl: null,
      languageMenuOpen: false
      // language: selectedLanguage
    });
    i18n.changeLanguage(selectedLanguage.code);
    localStorage.setItem('op_rcp_user_language_code', selectedLanguage.code);
    localStorage.setItem('op_rcp_user_language_icon', selectedLanguage.icon);
  };

  handleCloseLanguageClick = () => {
    this.setState({ languageMenuEl: null, languageMenuOpen: false });
  };

  handleDirectionChange = (event, checked) => {
    this.props.changeThemeDirection({
      direction: checked === true ? 'rtl' : 'ltr'
    });
    this.setState({ themeMenuEl: null, themeMenuOpen: false });
  };


  render() {
    const {
      width,
      layout,
      location,
      theme,
      tReady,
      t
    } = this.props;

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
          <img src={logoImage} className={scss['portal-toolbar-logo']} alt="logo" />
          <Typography variant="title" color="inherit" className={scss['portal-toolbar-logo-text']} noWrap>
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
          anchorEl={this.state.languageMenuEl}
          open={this.state.languageMenuOpen}
          onClose={this.handleCloseLanguageClick}
        >
          {this.state.languages.map(langOption => (
            <MenuItem key={langOption.code} onClick={event => this.handleSelectLanguageClick(event, langOption)}>
              {langOption.code} - {langOption.label} (<img src={langOption.icon} alt={langOption.code} width={16} />)
            </MenuItem>
          ))}
        </Menu>
        <IconButton
          color="inherit"
          aria-label="change theme"
          onClick={this.handleOpenThemeClick}
        >
          <InvertColorsIcon />
        </IconButton>
        <Menu
          id="theme-menu"
          anchorEl={this.state.themeMenuEl}
          open={this.state.themeMenuOpen}
          onClose={this.handleCloseThemeClick}
        >
          {themes.map(themeOption => (
            <MenuItem key={themeOption.id} onClick={event => this.handleSelectThemeClick(event, themeOption)}>
              {themeOption.name}
            </MenuItem>
          ))}
        </Menu>


        <IconButton
          color="inherit"
          aria-label="change layout"
          onClick={this.handleOpenLayoutClick}
        >
          <AppsIcon />
        </IconButton>
        <Menu
          id="layout-menu"
          anchorEl={this.state.layoutMenuEl}
          open={this.state.layoutMenuOpen}
          onClose={this.handleCloseLayoutClick}
        >
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'classic')}>Classic</MenuItem>
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'toolbar')}>Toolbar</MenuItem>
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'compact')}>Compact</MenuItem>
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'boxed')}>Boxed</MenuItem>
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'funky')}>Funky</MenuItem>
          <MenuItem onClick={event => this.handleSelectLayoutClick(event, 'tabbed')}>Tabbed</MenuItem>
          <MenuItem onClick={() => this.handleDirectionChange}>
            <FormGroup>
              <FormControlLabel
                control={<Switch
                  checked={theme.direction === 'rtl'}
                  onChange={this.handleDirectionChange}
                  aria-label="Theme Direction"
                />}
                label="RTL Direction"
              />
            </FormGroup>
          </MenuItem>
        </Menu>
        <IconButton
          color="inherit"
          aria-label="open notifications"
          onClick={this.props.toggleNotifications}
        >
          <NotificationsIcon />
        </IconButton>
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
  t: () => {}
};

ContentToolbar.propTypes = {
  width: PropTypes.string.isRequired,
  layout: PropTypes.shape({
    sidenavOpen: PropTypes.bool
  }).isRequired,
  theme: PropTypes.shape({}).isRequired,
  toggleSidenav: PropTypes.func.isRequired,
  toggleNotifications: PropTypes.func.isRequired,
  updateLayout: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeThemeDirection: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
  tReady: PropTypes.bool,
  t: PropTypes.func
};

export default compose(
  withRouter,
  withWidth(),
  withTheme(),
  withTranslation(),
  connect(mapStateToProps, {
    toggleSidenav,
    toggleNotifications,
    updateLayout,
    changeTheme,
    changeThemeDirection
  })
)(ContentToolbar);
